import React, { useState } from "react";

const ProblemTestcasesPannel = () => {
  const [activeTab, setActiveTab] = useState("case1");

  const TabContent = () => {
    switch (activeTab) {
      case "case1":
        return (
          <div className=" bg-base-300 border-base-100 py-4 px-3 space-y-3">
            <div>
              <p className="text-base-content/60 font-semibold">Input =</p>
              <p className="bg-base-200 py-3 px-3 rounded-lg">{"[3,3]"}</p>
            </div>
            <div>
              <p className="text-base-content/60 font-semibold">Output =</p>
              <p className="bg-base-200 py-3 px-3 rounded-lg">{"[3,3]"}</p>
            </div>
          </div>
        );
      case "case2":
        return (
          <div className="bg-base-300 border-base-100 p-6">Testcase 2</div>
        );
    }
  };

  return (
    <>
      <div className="">
        <div className="bg-base-300">
          <div className="tabs tabs-box bg-base-300 space-x-2 z-20">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab bg-base-200"
              aria-label="Case 1"
              defaultChecked
              onChange={() => setActiveTab("case1")}
            />

            <input
              type="radio"
              name="my_tabs_6"
              className="tab bg-base-200"
              aria-label="Case 2"
              onChange={() => setActiveTab("case2")}
            />
          </div>
          <TabContent />
        </div>
      </div>
    </>
  );
};

export default ProblemTestcasesPannel;
