import React, { useState } from "react";

const ProblemTestcasesResultTab = ({ result }) => {
  const [activeTab, setActiveTab] = useState(0);

  const TabContent = () => {
    const testcase = result.submission?.testCases[activeTab];
    if (!testcase) return null;
    return (
      <div className="bg-base-300 border-base-100 py-4 px-3 space-y-3">
        <div>
          <p className="text-base-content/60 font-semibold">Input =</p>
          <p className="bg-base-200 py-3 px-3 rounded-lg">
            {result?.submission?.stdin.split("\n")[activeTab]}
          </p>
        </div>
        <div>
          <p className="text-base-content/60 font-semibold">Output =</p>
          <p className="bg-base-200 py-3 px-3 rounded-lg">
            {testcase.stdout || "null"}
          </p>
        </div>
        <div>
          <p className="text-base-content/60 font-semibold">
            Expected Output =
          </p>
          <p className="bg-base-200 py-3 px-3 rounded-lg">
            {testcase.expected}
          </p>
        </div>
      </div>
    );
  };

  if (!result) {
    return (
      <div className="p-4 text-center text-base-content/60">
        Nothing to show
      </div>
    );
  }

  return (
    <>
      <div className="">
        <div className="bg-base-300">
          <div className="ml-3 my-3">
            <h2 className="text-xl font-semibold">
              {result?.submission.status}
            </h2>
          </div>
          <div className="tabs tabs-box bg-base-300 space-x-2 z-20">
            {result?.submission?.testCases.map((testcase, idx) => (
              <input
                key={idx}
                type="radio"
                name="testcase_result_tab"
                className="tab bg-base-200"
                aria-label={`Case ${idx + 1}`}
                defaultChecked={idx === 0}
                onChange={() => setActiveTab(idx)}
              />
            ))}
          </div>
          <TabContent />
        </div>
      </div>
    </>
  );
};

export default ProblemTestcasesResultTab;
