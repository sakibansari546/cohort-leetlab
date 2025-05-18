import React, { useEffect, useRef, useState } from "react";

import { Cpu, Lightbulb, Tag, Timer } from "lucide-react";
import { useGetSubmissionsForProblemQuery } from "../querys/useSubmissionQuery";
import { formateDate } from "../utils/date-formate";

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
const ProblemSolutionsTabContent = () => {
  return <div className=" border-base-300 bg-base-200 p-10">solution</div>;
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
      <div className="border-base-300 bg-base-200 h-[82vh] py-4 px-3 overflow-y-auto">
        <h3 className="text-center text-2xl font-extrabold text-error my-6">
          No submissions to show yet.
        </h3>
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
                        submission.status === "Wrong_Answer"
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

  if (submissionMutation.isPending) {
    return (
      <>
        <div className=" border-base-300 bg-base-200 py-4 px-3">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <span className="mt-4 text-base font-semibold text-base-content">
            Evaluating Submission...
          </span>
        </div>
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
  return (
    <>
      <div className=" border-base-300 bg-base-200 py-4 px-3">
        <div>
          {!submission && <h2>Nothing to show now</h2>}
          <h2>{submission?.status}</h2>
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
      return (
        <ProblemSolutionsTabContent editorial={problem?.referenceSolutions} />
      );
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
