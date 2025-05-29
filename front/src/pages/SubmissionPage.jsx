import React from "react";
import { useParams } from "react-router-dom";
import ProblemsPageSidebar from "../components/ProblemsPageSidebar";
import Highlight from "react-highlight";
import { useGetSubmissionById } from "../querys/useSubmissionQuery";
import { formateDate } from "../utils/date-formate";
import { Cpu, Loader2, Timer } from "lucide-react";
import Markdown from "react-markdown";

const SubmissionPage = () => {
  const { submissionId } = useParams();
  const { data, isPending, isError, error } =
    useGetSubmissionById(submissionId);
  const submission = data?.submission;

  const totalMemory = JSON.parse(submission?.memory || "[]")
    .map((memory) => parseFloat(memory))
    .reduce((pre, curr) => pre + curr, 0)
    .toFixed(2);

  const totalTime = JSON.parse(submission?.time || "[]")
    .map((time) => parseFloat(time))
    .reduce((pre, curr) => pre + curr, 0)
    .toFixed(4);

  let allTestCasesPassed = true;
  const faildTestcase = submission?.testCases.map((testcase, idx) => {
    if (!testcase.passed) {
      allTestCasesPassed = false;
      return {
        input: submission.stdin.split("\n")[idx],
        output: testcase.stdout,
        expected: testcase.expected,
        testcaseNo: testcase.testCase,
      };
    }
  });

  return (
    <div>
      <div className="flex min-h-screen bg-base-100 text-base-content">
        {/* Mobile sidebar toggle */}
        <ProblemsPageSidebar />

        {isError ? (
          <div className="w-full h-[80vh] flex items-center justify-center">
            <p className="text-xl text-error font-semibold flex items-center gap-2">
              {error?.response?.data?.message ||
                error?.message ||
                "Internal server error"}
            </p>
          </div>
        ) : isPending ? (
          <div className="w-full h-[80vh] flex items-center justify-center">
            <p className="text-xl font-semibold flex items-center gap-2">
              <Loader2 className="animate-spin" /> Loading
            </p>
          </div>
        ) : (
          <div className="flex-1 p-10 lg:p-10 overflow-auto">
            {/* Main content */}
            <div className="space-y-3">
              <div>
                <h2 className="text-2xl font-bold pb-6">
                  {submission?.problem?.title}
                </h2>
              </div>
              <div className="flex items-center gap-10">
                <h2
                  className={`text-xl font-semibold ${
                    submission?.status === "Accepted"
                      ? "text-success"
                      : "text-error "
                  }`}
                >
                  {submission?.stderr !== null ||
                  submission?.compileOutput !== null
                    ? "Error"
                    : submission?.status == "Accepted"
                    ? "Accepted"
                    : submission?.status}
                </h2>
                <p>
                  {allTestCasesPassed
                    ? submission?.testCases.length
                    : faildTestcase[0]?.testcaseNo}
                  /{submission?.testCases.length} testcases passed
                </p>
              </div>
              <div>
                <p>
                  Submited at{" "}
                  <span className="font-bold">
                    {formateDate(submission?.createdAt)}
                  </span>
                </p>
              </div>

              <div className="my-4 flex items-center gap-6 text-center">
                <div className="py-5 px-10 bg-base-content/10 flex gap-3 rounded-md flex-col items-center justify-cente">
                  <Cpu size="30" />
                  <p className="font-bold text-lg">Memory</p>
                  <p>{totalMemory} KB</p>
                </div>
                <div className="py-5 px-10 bg-base-content/10 flex rounded-md gap-3 flex-col items-center justify-center">
                  <Timer size="30" />
                  <p className="font-bold text-lg">Runtime</p>
                  <p>{totalTime} s</p>
                </div>
              </div>

              {submission?.stderr !== null ||
              submission?.compileOutput !== null ? (
                <div className="p-3 bg-base-300">
                  <p className="text-lg text-error">
                    <Markdown
                    // className={`${submission?.language.toLowerCase()} text-error`}
                    >
                      {
                        JSON.parse(
                          submission?.stderr ||
                            submission?.compileOutput ||
                            "[]"
                        )[0]
                      }
                    </Markdown>
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {submission.problem.testcases.map((testcase, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-semibold py-3 pb-4">
                        Testcase {idx + 1}
                      </h4>
                      <div>
                        <div>
                          <div className="form-control mb-4">
                            <label htmlFor="input" className="label">
                              <span className="label-text mb-2 font-medium">
                                Input
                              </span>
                            </label>
                            <div className="w-full">
                              <input
                                readOnly
                                value={testcase.input}
                                id="input"
                                type="text"
                                name="title"
                                placeholder="Enter problem title"
                                className="input input-bordered w-full font-semibold "
                              />
                            </div>
                          </div>
                          <div className="form-control mb-4">
                            <label htmlFor="output" className="label">
                              <span className="label-text mb-2 font-medium">
                                Output
                              </span>
                            </label>
                            <div className="w-full">
                              <input
                                readOnly
                                value={submission.testCases[idx].stdout}
                                id="output"
                                type="text"
                                name="title"
                                placeholder="Enter problem title"
                                className={`input input-bordered w-full font-semibold ${
                                  submission.testCases[idx].expected ===
                                  submission.testCases[idx].stdout
                                    ? "text-success"
                                    : "text-error"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="form-control mb-4">
                            <label htmlFor="expected" className="label">
                              <span className="label-text mb-2 font-medium">
                                Expected
                              </span>
                            </label>
                            <div className="w-full">
                              <input
                                readOnly
                                value={submission.testCases[idx].expected}
                                id="expected"
                                type="text"
                                name="title"
                                placeholder="Enter problem title"
                                className={`input input-bordered w-full font-semibold  text-success`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <div className="py-5">
                  <div className="flex items-center font-medium text-base-content/70">
                    <p className="border-r border-base-content/20 px-4 py-3 bg-base-100/30">
                      Code
                    </p>
                    <p className="px-4 py-3 bg-base-100/30">
                      {submission?.language}
                    </p>
                  </div>
                  <div className="w-full h-full ">
                    <div className="py-3 px-6 bg-[#282a36]">
                      <Highlight
                        className={`${submission?.language.toLowerCase()}`}
                      >
                        {submission?.source_code}
                      </Highlight>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-3">
                <h3 className="text-xl font-semibold py-3 pb-5">Feedback</h3>
                <div>
                  <Markdown>{submission?.feedback}</Markdown>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionPage;
