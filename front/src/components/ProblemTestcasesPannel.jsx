import React, { useState } from "react";

const ProblemTestcasesPannel = ({ testcases }) => {
  const [activeTab, setActiveTab] = useState(0);

  const TabContent = () => {
    const testcase = testcases[activeTab];
    if (!testcase) return null;
    return (
      <div className="bg-base-300 border-base-100 py-4 px-3 space-y-3">
        <div>
          <p className="text-base-content/60 font-semibold">Input =</p>
          <p className="bg-base-200 py-3 px-3 rounded-lg">{testcase.input}</p>
        </div>
        <div>
          <p className="text-base-content/60 font-semibold">Output =</p>
          <p className="bg-base-200 py-3 px-3 rounded-lg">{testcase.output}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="">
        <div className="bg-base-300">
          <div className="tabs tabs-box bg-base-300 space-x-2 z-20">
            {testcases.map((testcase, idx) => (
              <input
                key={idx}
                type="radio"
                name="my_tabs_6"
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

export default ProblemTestcasesPannel;
