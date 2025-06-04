import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

import {
  Bookmark,
  CheckSquare,
  ChevronLeft,
  CloudUploadIcon,
  Code2,
  Code2Icon,
  Loader2,
  LucidePlay,
  Maximize,
  Maximize2,
  Palette,
} from "lucide-react";

import ProblemTestcasesPannel from "../components/ProblemTestcasesPannel";
import ProblemLeftPannel from "../components/ProblemLeftPannel";
import ProblemTestcasesResultTab from "../components/ProblemTestcasesResultTab";

import { getJudge0LangaugeId } from "../utils/language";

import { useGetProblemByIdQuery } from "../querys/useProblemQuery";
import { useCreateSubmissionMutation } from "../querys/useSubmissionQuery";
import { useRunCodeMutation } from "../querys/useRunCodeQuery";
import { LANGUAGES } from "../constants";

const ProblemPage = () => {
  const { problemId } = useParams();
  const editorRef = useRef(null);
  const testcaseResultTabInputRef = useRef(null);
  const [coolDown, setCoolDown] = useState(0);

  const [activeTeastcasesOrResultTab, setActiveTestcasesOrResultTab] =
    useState("testcases");

  const { data, isPending, isError, error } = useGetProblemByIdQuery(problemId);
  const problem = data?.problem;
  const errorMessage =
    error?.response?.data?.message || "Internal server error";

  const [language, setLanguage] = useState(
    Object.keys(problem?.codeSnippets || {})[0] || "javascript"
  );

  const [source_code, setSource_code] = useState("");

  const mutation = useCreateSubmissionMutation(problemId);
  const runCodeMutation = useRunCodeMutation(problemId);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    setSource_code(editorRef.current.getValue());
  }

  const handleSubmitCode = () => {
    const data = {
      language_id: getJudge0LangaugeId(language).toString(),
      stdins: problem.testcases.map((tCase) => tCase.input),
      expected_outputs: problem.testcases.map((tCase) => tCase.output),
      source_code,
    };
    mutation.mutate(data);
  };
  const handleRunCode = () => {
    const data = {
      language_id: getJudge0LangaugeId(language).toString(),
      stdins: problem.testcases.map((tCase) => tCase.input),
      expected_outputs: problem.testcases.map((tCase) => tCase.output),
      source_code,
    };
    runCodeMutation.mutate(data);
  };

  const throttledWithCooldown = (fn, delaySeconds) => {
    let myId = null;
    return (...arg) => {
      if (myId !== null) return;

      fn(...arg);

      if (runCodeMutation.isPending === false) {
        setCoolDown(delaySeconds);

        const intervalId = setInterval(() => {
          setCoolDown((prev) => {
            if (prev <= 1) {
              clearInterval(intervalId);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }

      myId = setTimeout(() => {
        myId = null;
      }, delaySeconds * 1000);
    };
  };

  const throttledRun = throttledWithCooldown(handleRunCode, 20);
  const throttledSubmit = throttledWithCooldown(handleSubmitCode, 20);

  useEffect(() => {
    if (runCodeMutation.isPending && testcaseResultTabInputRef.current) {
      testcaseResultTabInputRef.current.checked = true;
      setActiveTestcasesOrResultTab("result");
    }
  }, [runCodeMutation.isPending]);

  useEffect(() => {
    if (!isPending) {
      setLanguage(Object.keys(problem?.codeSnippets || {})[0]);
    }
  }, [isPending, setLanguage, problem?.codeSnippets]);

  // Memoized panel to prevent re-renders

  const TestcasesOrResultTabContent = useMemo(() => {
    return () => {
      switch (activeTeastcasesOrResultTab) {
        case "testcases":
          return (
            <>
              {isPending ? (
                <div className="skeleton bg-base-300 w-full h-[40vh] rounded-lg overflow-y-auto border border-base-content/30"></div>
              ) : isError ? (
                <div className="w-full bg-base-300 h-[40vh z-50 rounded-lg border border-base-content/30 overflow-y-auto flex justify-center">
                  <h3 className="text-xl font-extrabold text-error my-6">
                    {errorMessage}
                  </h3>
                </div>
              ) : (
                <ProblemTestcasesPannel testcases={problem?.testcases} />
              )}
            </>
          );
        case "result":
          return (
            <>
              {runCodeMutation.isPending ? (
                <>
                  <div className="skeleton border-base-300 bg-base-200 h-[40vh] py-4 px-3 overflow-y-auto"></div>
                </>
              ) : runCodeMutation.isError ? (
                <div className="w-full bg-base-300 h-[40vh] z-50 rounded-lg border border-base-content/30 overflow-y-auto flex flex-col items-center justify-center">
                  <h3 className="text-xl font-extrabold text-error my-6">
                    {runCodeMutation.error?.response?.data?.message ||
                      "An error occurred while running your code."}
                  </h3>
                </div>
              ) : (
                <ProblemTestcasesResultTab result={runCodeMutation.data} />
              )}
            </>
          );
        default:
          return null;
      }
    };
  }, [
    activeTeastcasesOrResultTab,
    isPending,
    isError,
    errorMessage,
    problem,
    runCodeMutation.isPending,
    runCodeMutation.isError,
    runCodeMutation.error,
    runCodeMutation.data,
  ]);

  return (
    <>
      <div className="bg-base-100 w-[1000px] lg:w-full max-h- rounded-lg">
        <div className="flex items-center justify-center w-full">
          <div className="w-full">
            <div className="flex items-center justify-between bg-base-100 py-5 px-6">
              <div className="flex items-center gap-2">
                <Link
                  to={-1}
                  className="btn btn-ghost btn-sm md:btn-md link"
                  title="Problems"
                >
                  {/* Back arrow icon */}
                  <ChevronLeft size="18" />
                  Back
                </Link>
              </div>
              <div className="space-x-2">
                <button
                  onClick={throttledRun}
                  className="btn btn-sm md:btn-md"
                  disabled={
                    mutation.isPending ||
                    runCodeMutation.isPending ||
                    coolDown > 0
                  }
                >
                  {runCodeMutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin" size="18" />
                      Running...
                    </>
                  ) : (
                    <>
                      {coolDown > 0 ? (
                        `Wait ${coolDown}s`
                      ) : (
                        <>
                          {" "}
                          <LucidePlay size="18" />
                          Run
                        </>
                      )}
                    </>
                  )}
                </button>
                <button
                  onClick={throttledSubmit}
                  className="btn btn-accent btn-sm md:btn-md"
                  disabled={
                    mutation.isPending ||
                    runCodeMutation.isPending ||
                    coolDown > 0
                  }
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin" size="18" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      {" "}
                      {coolDown > 0 ? (
                        `Wait ${coolDown}s`
                      ) : (
                        <>
                          {" "}
                          <CloudUploadIcon size="18" />
                          Submit
                        </>
                      )}
                    </>
                  )}
                </button>
              </div>
              <div>
                <Link
                  to="/theme"
                  className="btn btn-sm md:btn-md flex items-center justify-center"
                >
                  <Palette size={18} />
                  Theme
                </Link>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full h-full flex items-center px-3 gap-2 justify-center rounded-lg">
                {/* Problem Description Pannel */}
                {isPending ? (
                  <div className="skeleton bg-base-300 w-1/2 h-[90vh] rounded-lg overflow-y-auto border border-base-content/30"></div>
                ) : isError ? (
                  <div className="bg-base-300 w-1/2 h-[90vh] rounded-lg overflow-y-auto border border-base-content/30 flex justify-center">
                    <h3 className="text-2xl font-extrabold text-error my-6">
                      {errorMessage}
                    </h3>
                  </div>
                ) : (
                  <ProblemLeftPannel
                    problem={problem}
                    submissionMutation={mutation}
                  />
                )}

                <div className="w-1/2 h-[90vh]">
                  <div className="w-full h-full flex flex-col gap-2 ">
                    {/* Top COding Part */}
                    <div className="relative w-full bg-base-200 h-1/2 rounded-lg border border-base-content/30">
                      <div>
                        <div className="bg-base-300 w-full sticky left-0 top-0 z-50 rounded-lg">
                          <div className="h-10 flex items-center justify-between rounded-b-none border border-base-content/30 border-b-0 rounded-lg">
                            <button className="btn btn-ghost">
                              <Code2 size="18" />
                              Code
                            </button>
                            <button className="btn btn-ghost">
                              <Maximize size="18" />
                            </button>
                          </div>
                          <div className="h-10 flex items-center bg-base-300 justify-between border border-base-content/30 px-">
                            <div>
                              <select
                                defaultValue={language.toUpperCase()}
                                onChange={(e) => {
                                  setLanguage(e.target.value.toLowerCase());
                                  setSource_code(
                                    problem?.codeSnippets[
                                      e.target.value.toUpperCase()
                                    ]
                                  );
                                }}
                                className="select select-sm bg-base-300 border-none outline-none focus:outline-0 text-base-content cursor-pointer"
                              >
                                {Object.keys(problem?.codeSnippets || {}).map(
                                  (lang, idx) => (
                                    <option key={idx}>{lang}</option>
                                  )
                                )}
                              </select>
                            </div>
                            <div className="flex items-center gap-2 mr-4">
                              <button className="cursor-pointer">
                                <Bookmark size="18" />
                              </button>
                              <button className="cursor-pointer">
                                <Maximize2 size="18" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Editor */}
                      <div className="overflow-hidden">
                        {isPending ? (
                          <div className="skeleton bg-base-300 w-full h-[40vh] rounded-lg overflow-y-auto border border-base-content/30"></div>
                        ) : isError ? (
                          <div className="w-full bg-base-300 h-[40vh z-50 rounded-lg border border-base-content/30 overflow-y-auto flex justify-center">
                            <h3 className="text-xl font-extrabold text-error my-6">
                              {errorMessage}
                            </h3>
                          </div>
                        ) : (
                          <Editor
                            className="overflow-hidden rounded-lg rounded-t-none"
                            theme="vs-dark"
                            height="34vh"
                            defaultLanguage={language.toLowerCase()}
                            defaultValue={
                              problem?.codeSnippets[language.toUpperCase()]
                            }
                            value={
                              problem?.codeSnippets[language.toUpperCase()]
                            }
                            language={
                              language === "C++"
                                ? "cpp"
                                : language.toLowerCase()
                            }
                            onMount={handleEditorDidMount}
                            onChange={(value) => setSource_code(value)}
                            options={{
                              smoothScrolling: true,
                              scrollBeyondLastLine: false,
                              fontSize: 16,
                              minimap: { enabled: false },
                              wordWrap: "on",
                              cursorSmoothCaretAnimation: "on",
                              scrollbar: {
                                vertical: "visible",
                                horizontal: "visible",
                                useShadows: false,
                                verticalScrollbarSize: 8,
                                horizontalScrollbarSize: 8,
                              },
                            }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Bottom Testaces Part */}
                    <div className="w-full bg-base-200 h-1/2 z-50 rounded-lg border border-base-content/30 overflow-y-auto">
                      <div>
                        <div className="bg-base-300 z-50 w-full sticky top-0 rounded-lg border border-base-content/30 rounded-b-none mb-3">
                          <div className="h-10 flex items-center justify-between  border border-base-content/30 border-b-0 rounded-lg rounded-b-none">
                            <div className="tabs tabs-lift">
                              <label className="tab space-x-2">
                                <input
                                  type="radio"
                                  name="testcase_tab"
                                  className="tab"
                                  aria-label="TestCases"
                                  checked={
                                    activeTeastcasesOrResultTab === "testcases"
                                  }
                                  onChange={() =>
                                    setActiveTestcasesOrResultTab("testcases")
                                  }
                                />
                                <CheckSquare
                                  size="18"
                                  className={`${
                                    activeTeastcasesOrResultTab == "testcases"
                                      ? "text-success"
                                      : ""
                                  }`}
                                />
                                <span>TestCases</span>
                              </label>

                              <label className="tab space-x-2">
                                <input
                                  type="radio"
                                  name="testcase_tab"
                                  className="tab"
                                  aria-label="Result"
                                  ref={testcaseResultTabInputRef}
                                  checked={
                                    activeTeastcasesOrResultTab === "result"
                                  }
                                  onChange={() =>
                                    setActiveTestcasesOrResultTab("result")
                                  }
                                />
                                <Code2Icon
                                  size="20"
                                  className={`${
                                    activeTeastcasesOrResultTab == "result"
                                      ? "text-success"
                                      : ""
                                  }`}
                                />
                                <span>Result</span>
                              </label>
                            </div>
                            <button className="btn btn-ghost">
                              <Maximize size="18" />
                            </button>
                          </div>
                        </div>

                        {/* Problem Testcases */}
                        <div className="ml-3">
                          <TestcasesOrResultTabContent />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemPage;
