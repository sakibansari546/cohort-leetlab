import React, { useEffect, useRef, useState } from "react";

import { ArrowLeft, Cpu, Lightbulb, LinkIcon, Tag, Timer } from "lucide-react";
import { useGetSubmissionsForProblemQuery } from "../querys/useSubmissionQuery";
import { formateDate } from "../utils/date-formate";

import Highlight from "react-highlight";
import "highlight.js/styles/dracula.css";

const ProblemDescriptionTabContent = ({ problem }) => {
  return (
    <>
      <div className=" border-base-300 bg-base-200 py-4 px-3">
        <div>
          {/* Description Top Part */}
          <div className="flex flex-col gap-2">
            {/* Problem Title */}
            <div>
              <h2 className="text-2xl font-bold capitalize">{problem.title}</h2>
            </div>
            {/* Problem Tags Hints Btns */}
            <div className="space-x-2">
              <p className="badge text-success font-medium ">
                {problem.difficulty}
              </p>
              <a href="#tags" className="badge font-medium">
                <Tag size="14" />
                Tags
              </a>
              <a href="#hints" className="badge font-medium">
                <Lightbulb size="14" />
                Hints
              </a>
            </div>
            {/* Problem Description */}
            <div>
              <p className="text-base-content">{problem?.description}</p>
            </div>
            {/* Problem Examples */}
            <div>
              <div className="mt-7">
                {Object.entries(problem?.examples).map(
                  ([name, content], idx) => (
                    <div key={idx} className="mt-5">
                      <h2 className="text-md font-bold mb-2">{name} :</h2>
                      <div className="pl-5">
                        <p>
                          <b>Input :</b>{" "}
                          <span className="font-medium text-base-content/80">
                            {content.input}
                          </span>{" "}
                        </p>
                        <p>
                          <b>Output :</b>{" "}
                          <span className="font-medium text-base-content/80">
                            {content.input}
                          </span>{" "}
                        </p>
                        <p>
                          <b>Explanation :</b>{" "}
                          <span className="font-medium text-base-content/80">
                            {content.explanation}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Problem Constraints */}
            <div className="mt-10">
              <ul>
                <h2 className="text-md font-bold mb-2">Constraints</h2>
                {problem?.constraints.split(",").map((con) => (
                  <li key={con} className="list-disc ml-10">
                    <code className="">{con}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="divider mx-0 my-5"></div>

          {/* Bottom Part */}
          <div>
            <div>
              <div className=" bg-base-200">
                {/* Tags Crousel */}
                <div
                  id="tags"
                  className="collapse collapse-arrow join-item rounded-none border-base-content/20 border-x-0 border"
                >
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title font-semibold">
                    <p className="flex items-center gap-2 font-semibold ">
                      {" "}
                      <Tag size="16" /> Tags
                    </p>
                  </div>
                  <div className="collapse-content text-sm space-x-1.5s">
                    {problem.tags?.map((tag) => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Hints Crousel */}
                <div id="hints">
                  <div className="collapse collapse-arrow join-item rounded-none border-base-content/20 border-x-0 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">
                      <p className="flex items-center gap-2 font-semibold">
                        {" "}
                        <Lightbulb size="16" /> Hint
                      </p>
                    </div>
                    <div className="collapse-content text-sm">
                      Click on "Forgot Password" on the login page and follow
                      the instructions sent to your email.
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item rounded-none border-base-content/20 border-x-0 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">
                      <p className="flex items-center gap-2 font-semibold">
                        {" "}
                        <Lightbulb size="16" /> Hint
                      </p>
                    </div>
                    <div className="collapse-content text-sm">
                      Click on "Forgot Password" on the login page and follow
                      the instructions sent to your email.
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item rounded-none border-base-content/20 border-x-0 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">
                      <p className="flex items-center gap-2 font-semibold">
                        {" "}
                        <Lightbulb size="16" /> Hint
                      </p>
                    </div>
                    <div className="collapse-content text-sm">
                      Click on "Forgot Password" on the login page and follow
                      the instructions sent to your email.
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

const ProblemEditorialTabContent = () => {
  return <div className=" border-base-300 bg-base-200 p-10">Editorial</div>;
};

const ProblemSolutionsTabContent = ({ problem }) => {
  return (
    <div className=" border-base-300 bg-base-200">
      <div className="py-6 px-4 space-y-3">
        <div className="px-2">
          <h2 className="text-2xl font-bold">Solutions</h2>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border-base-300 border bg-base-300"
        >
          <div className="collapse-title font-semibold">
            <div className="flex items-center justify-between ">
              <h2 className="text-lg">{problem.title}</h2>
            </div>
          </div>
          <div className="collapse-content text-sm">
            <div className="w-full h-full space-y-3">
              {Object.entries(problem.referenceSolutions).map(
                ([language, code]) => (
                  <div>
                    <h3 className="py-3 text-lg font-semibold">{language}</h3>
                    <div className="py-3 px-6 bg-[#282a36]">
                      <Highlight className={`${language.toLowerCase()}`}>
                        {code}
                      </Highlight>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProblemSubmissionsTabContent = ({ problemId }) => {
  const { data, isPending, isError, error } =
    useGetSubmissionsForProblemQuery(problemId);
  const submissions = data?.submissions;
  const errorMessage = error?.response?.data.message || "Internal server error";

  if (isPending) {
    return (
      <>
        <div className="skeleton border-base-300 bg-base-200 h-[82vh] py-4 px-3 overflow-y-auto"></div>
      </>
    );
  }

  if (isError) {
    return (
      <div className="border-base-300 bg-base-200 h-[82vh] py-4 px-3 overflow-y-auto">
        <h3 className="text-center text-2xl font-extrabold text-error my-6">
          {errorMessage}
        </h3>
      </div>
    );
  }

  if (submissions?.length === 0) {
    return (
      <div className="border-base-300 bg-base-200 py-4 px-3">
        <h2 className="text-center text-lg font-semibold text-base-content/70">
          Nothing to show now.
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className=" border-base-300 bg-base-200  py-4 px-3 overflow-y-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border-b border-base-content/30">
                <th></th>
                <th>Status</th>
                <th>Language</th>
                <th>Runtime</th>
                <th>Memory</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {submissions?.map((submission, idx) => (
                <tr key={submission.id}>
                  <th>{idx + 1}</th>
                  <td>
                    <h2
                      className={`font-semibold ${
                        submission.status === "Wrong Answer"
                          ? "text-error"
                          : "text-success"
                      }`}
                    >
                      {submission.status}
                    </h2>
                    <p>{formateDate(submission.createdAt)}</p>
                  </td>
                  <td>
                    <p className="badge">{submission.language}</p>
                  </td>
                  <td>
                    <p className="flex items-center gap-1.5">
                      <Timer size="18" />
                      N/A
                    </p>
                  </td>
                  <td>
                    <p className="flex items-center gap-1.5">
                      <Cpu size="18" />
                      N/A
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const SubmissionResultTabContent = ({ submissionMutation }) => {
  const submission = submissionMutation?.data?.submission;

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

  const totalMemory = JSON.parse(submission?.memory || "[]")
    .map((memory) => parseFloat(memory))
    .reduce((pre, curr) => pre + curr, 0)
    .toFixed(2);

  const totalTime = JSON.parse(submission?.time || "[]")
    .map((time) => parseFloat(time))
    .reduce((pre, curr) => pre + curr, 0)
    .toFixed(4);

  if (submissionMutation.isPending) {
    return (
      <>
        <div className="skeleton border-base-300 bg-base-200 h-[82vh] py-4 px-3 overflow-y-auto"></div>
      </>
    );
  }
  if (submissionMutation.isError) {
    return (
      <>
        <div className=" border-base-300 bg-base-200 py-4 px-3">
          <span className="text-error text-lg font-semibold">
            {submissionMutation.error?.response?.data?.message ||
              "An error occurred while submitting your solution."}
          </span>
        </div>
      </>
    );
  }
  if (!submission) {
    return (
      <div className="border-base-300 bg-base-200 py-4 px-3">
        <h2 className="text-center text-lg font-semibold text-base-content/70">
          Nothing to show now.
        </h2>
      </div>
    );
  }
  return (
    <>
      <div className="border-base-300 bg-base-200 py px-3">
        <div>
          {/* {!submission && <h2>Nothing to show now</h2>} */}
          <div className="">
            <div className="flex items-center justify-between  border-b border-base-content/20">
              <button className="flex items-center gap-2 cursor-pointer hover:bg-base-300 py-2 px-4">
                <ArrowLeft size="18" />
                <span>All Submissions</span>
              </button>
              <button className="flex items-center gap-2 cursor-pointer hover:bg-base-300 py-2 px-4">
                <LinkIcon size="18" />
              </button>
            </div>
            <div className="px-8 py-8">
              <div>
                <div>
                  <div className="flex items-center gap-8">
                    <h1
                      className={`text-2xl font-semibold ${
                        allTestCasesPassed ? "text-success" : "text-error"
                      }`}
                    >
                      {allTestCasesPassed
                        ? submission?.status
                        : submission.stderr !== null
                        ? "An Error Accured"
                        : "Worng Answer"}
                    </h1>
                    <h1 className="mt-2 text-base-content/70">
                      {allTestCasesPassed
                        ? submission?.testCases.length
                        : faildTestcase[0]?.testcaseNo}
                      /{submission?.testCases.length} testcases passed
                    </h1>
                  </div>
                  <div className="py-3">
                    <p className="text-base-content/80">
                      Submited at{" "}
                      <span className="font-medium">
                        {formateDate(submission?.createdAt)}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  {submission?.stderr === null ? (
                    <>
                      {allTestCasesPassed ? (
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
                      ) : (
                        <div className="my-6 space-y-6">
                          <div>
                            <p className="text-md font-medium">Input: </p>
                            <input
                              className="py-4 px-4 bg-base-300  w-full text-base-content/80 text-lg font-medium"
                              value={faildTestcase[0]?.input}
                              type="text"
                              disabled
                            />
                          </div>
                          <div>
                            <p className="text-md font-medium">Output: </p>
                            <input
                              className="py-4 px-4 bg-base-300 w-full text-error text-lg font-medium"
                              value={faildTestcase[0]?.output}
                              type="text"
                              disabled
                            />
                          </div>
                          <div>
                            <p className="text-md font-medium">Expected: </p>
                            <input
                              className="py-4 px-4 bg-base-300 w-full text-lg font-medium text-success"
                              value={faildTestcase[0]?.expected}
                              type="text"
                              disabled
                            />
                          </div>
                        </div>
                      )}
                      <div className="py-5">
                        <div className="flex items-center font-medium text-base-content/70">
                          <p className="border-r border-base-content/20 px-4 py-3 bg-base-100/30">
                            Code
                          </p>
                          <p className="px-4 py-3 bg-base-100/30">
                            {submission?.language.toLowerCase()}
                          </p>
                        </div>
                        <div className="w-full h-full ">
                          <div className="py-3 px-6 bg-[#282a36]">
                            <Highlight
                              className={`${submission?.language.toLowerCase()} `}
                            >
                              {submission?.source_code}
                            </Highlight>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="py-3 px-6 bg-[#282a36] mt-6">
                        <p className="text-lg text-error font-medium">
                          {JSON.parse(submission?.stderr || "[]")[0]}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TabContent = ({ problem, activeTab, submissionMutation }) => {
  switch (activeTab) {
    case "description":
      return <ProblemDescriptionTabContent problem={problem} />;
    case "editorial":
      return <ProblemEditorialTabContent editorial={problem?.editorial} />;
    case "solutions":
      return <ProblemSolutionsTabContent problem={problem} />;
    case "submissions":
      return <ProblemSubmissionsTabContent problemId={problem?.id} />;
    case "submission_result":
      return (
        <SubmissionResultTabContent submissionMutation={submissionMutation} />
      );
  }
};

const ProblemLeftPannel = ({ problem, submissionMutation }) => {
  const submissionTabInputRef = useRef();
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (submissionMutation.isPending && submissionTabInputRef.current) {
      submissionTabInputRef.current.checked = true;
      setActiveTab("submission_result");
    }
  }, [submissionMutation.isPending]);

  return (
    <>
      <div className="bg-base-200 w-1/2 h-[90vh] rounded-lg overflow-y-auto border border-base-content/30">
        <div className="bg-base-300 w-full h-12 rounded-lg border border-base-content/30 ">
          <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-border">
              {/* Description */}
              <input
                type="radio"
                name="my_tabs_2"
                className="tab"
                aria-label="Description"
                onChange={() => setActiveTab("description")}
                defaultChecked
              />

              {/* Editorail */}
              <input
                type="radio"
                name="my_tabs_2"
                className="tab"
                onChange={() => setActiveTab("editorial")}
                aria-label="Editorial"
              />

              {/* Solutions */}
              <input
                type="radio"
                name="my_tabs_2"
                className="tab"
                aria-label="Solutions"
                onChange={() => setActiveTab("solutions")}
              />

              {/* All Submissions */}
              <input
                type="radio"
                onChange={() => setActiveTab("submissions")}
                name="my_tabs_2"
                className="tab"
                aria-label="Submissions"
              />

              <input
                type="radio"
                name="my_tabs_2"
                className={`tab`}
                ref={submissionTabInputRef}
                onChange={() => setActiveTab("submission_result")}
                aria-label="Submission Result"
              />
            </div>

            <TabContent
              problem={problem}
              activeTab={activeTab}
              submissionMutation={submissionMutation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemLeftPannel;
