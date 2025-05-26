import React, { useState } from "react";

const ProblemTestcasesResultTab = ({ result }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(result);

  const totalMemory = JSON.parse(result?.submission?.memory || "[]")
    .map((memory) => parseFloat(memory))
    .reduce((pre, curr) => pre + curr, 0)
    .toFixed(2);

  const totalTime = JSON.parse(result?.submission?.time || "[]")
    .map((time) => parseFloat(time))
    .reduce((pre, curr) => pre + curr, 0)
    .toFixed(4);

  const TabContent = () => {
    const testcase = result.submission?.testCases[activeTab];
    if (result?.submission?.stderr !== null) {
      return (
        <>
          <div className="bg-base-200 border-base-100 py-4 px-3">
            <div className="bg-base-300">
              <p className="p-4 text-lg text-error font-medium">
                {JSON.parse(result?.submission?.stderr || "[]")[0]}
              </p>
            </div>
          </div>
        </>
      );
    }
    if (!testcase) return null;
    return (
      <div className="bg-base-200 border-base-100 py-4 px-3 space-y-3">
        <div>
          <p className="text-base-content/60 font-semibold">Input =</p>
          <p className="bg-base-300 py-3 px-3 rounded-lg">
            {result?.submission?.problem.testcases[activeTab].input}
          </p>
        </div>
        <div>
          <p className="text-base-content/60 font-semibold">Output =</p>
          <p
            className={`bg-base-300 py-3 px-3 rounded-lg ${
              testcase?.passed === true ? "text-success" : "text-error"
            }`}
          >
            {testcase.stdout || "null"}
          </p>
        </div>
        <div>
          <p className="text-base-content/60 font-semibold ">
            Expected Output =
          </p>
          <p className="bg-base-300 py-3 px-3 rounded-lg text-success">
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
        <div className="bg-base-200">
          <div className="ml-3 py-3">
            <div className="flex items-center gap-5">
              <h2
                className={`text-2xl font-semibold ${
                  result?.submission.status === "Accepted"
                    ? "text-success"
                    : "text-error"
                }`}
              >
                {result.submission?.stderr !== null
                  ? "An Error Accourd"
                  : result?.submission.status}
              </h2>
              <p className="text-base-content/80">Runtime: {totalTime} s</p>
              <p className="text-base-content/80">Memory: {totalMemory} KB</p>
            </div>
          </div>
          {result?.submission?.stderr === null && (
            <div className="tabs tabs-box bg-base-200 space-x-2 z-20">
              {result?.submission?.testCases.map((testcase, idx) => (
                <label
                  className={`tab bg-base-300 ${
                    testcase.passed === false ? "text-error" : "text-success"
                  }`}
                  key={idx}
                >
                  <li>
                    <input
                      type="radio"
                      name="testcase_result_tab"
                      className="tab bg-base-300"
                      defaultChecked={idx === 0}
                      onChange={() => setActiveTab(idx)}
                    />
                    <span>Case {idx + 1}</span>
                  </li>
                </label>
              ))}
            </div>
          )}

          <TabContent />
        </div>
      </div>
    </>
  );
};

export default ProblemTestcasesResultTab;
