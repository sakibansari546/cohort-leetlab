import React, { useState } from "react";
import Editor from "@monaco-editor/react";

import {
  Bookmark,
  CheckSquare,
  ChevronLeft,
  CloudUploadIcon,
  Code2,
  Loader2,
  LucidePlay,
  Maximize,
  Maximize2,
} from "lucide-react";

import ProblemLeftPannel from "../components/ProblemLeftPannel";
import ProblemTestcasesPannel from "../components/ProblemTestcasesPannel";
import { useGetProblemByIdQuery } from "../querys/useProblemQuery";
import { Link, useParams } from "react-router-dom";

const ProblemPage = () => {
  const { problemId } = useParams();
  const { data, isPending, isError, error } = useGetProblemByIdQuery(problemId);
  const problem = data?.problem;
  const errorMessage = error?.response?.data.message || "Internal server error";

  const [language, setLanguage] = useState("javascript");

  return (
    <>
      <div className="bg-base-100 w-[1000px] lg:w-full max-h- rounded-lg">
        <div className="flex items-center justify-center w-full">
          <div className="w-full">
            <div className="flex items-center justify-between bg-base-100 py-5">
              <div className="flex items-center gap-2">
                <Link
                  to={-1}
                  className="btn btn-ghost btn-sm md:btn-md link"
                  title="Back"
                >
                  {/* Back arrow icon */}
                  <ChevronLeft size="18" />
                  Back
                </Link>
              </div>
              <div className="space-x-2">
                <button className="btn btn-sm md:btn-md">
                  <LucidePlay size="18" />
                  Run
                </button>
                <button className="btn btn-accent btn-sm md:btn-md">
                  <CloudUploadIcon size="18" />
                  Submit
                </button>
              </div>
              <div></div>
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
                  <ProblemLeftPannel problem={problem} />
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
                                defaultValue="JavaScript"
                                onChange={(e) =>
                                  setLanguage(e.target.value.toLowerCase())
                                }
                                className="select select-sm bg-base-300 border-none outline-none focus:outline-0 text-base-content cursor-pointer"
                              >
                                <option>JavaScript</option>
                                <option>Python</option>
                                <option>Java</option>
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
                            language={language.toLowerCase()}
                          />
                        )}
                      </div>
                    </div>

                    {/* Bottom Testaces Part */}
                    <div className="w-full bg-base-200 h-1/2 z-50 rounded-lg border border-base-content/30 overflow-y-auto">
                      <div>
                        <div className="bg-base-300 z-50 w-full sticky top-0 rounded-lg border border-base-content/30 rounded-b-none">
                          <div className="h-10 flex items-center justify-between  border border-base-content/30 border-b-0 rounded-lg rounded-b-none">
                            <button className="btn btn-ghost">
                              <CheckSquare className="text-success" size="18" />
                              Testcases
                            </button>
                            <button className="btn btn-ghost">
                              <Maximize size="18" />
                            </button>
                          </div>
                        </div>
                        {/* Problem Testcases */}
                        {isPending ? (
                          <div className="skeleton bg-base-300 w-full h-[40vh] rounded-lg overflow-y-auto border border-base-content/30"></div>
                        ) : isError ? (
                          <div className="w-full bg-base-300 h-[40vh z-50 rounded-lg border border-base-content/30 overflow-y-auto flex justify-center">
                            <h3 className="text-xl font-extrabold text-error my-6">
                              {errorMessage}
                            </h3>
                          </div>
                        ) : (
                          <ProblemTestcasesPannel
                            testcases={problem?.testcases}
                          />
                        )}
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
