import React, { useState } from "react";

import { Cpu, Lightbulb, Tag, Timer } from "lucide-react";

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
                <div className="mt-5">
                  <h2 className="text-md font-bold mb-2">Example 1:</h2>
                  <div className="pl-5">
                    <p>
                      <b>Input :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        nums = [2,7,11,15], target = 9
                      </span>{" "}
                    </p>
                    <p>
                      <b>Output :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        [0,1]
                      </span>{" "}
                    </p>
                    <p>
                      <b>Explanation :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        Because nums[0] + nums[1] == 9, we return [0, 1].
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-md font-bold mb-2">Example 1:</h2>
                  <div className="pl-5">
                    <p>
                      <b>Input :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        nums = [2,7,11,15], target = 9
                      </span>{" "}
                    </p>
                    <p>
                      <b>Output :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        [0,1]
                      </span>{" "}
                    </p>
                    <p>
                      <b>Explanation :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        Because nums[0] + nums[1] == 9, we return [0, 1].
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-md font-bold mb-2">Example 1:</h2>
                  <div className="pl-5">
                    <p>
                      <b>Input :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        nums = [2,7,11,15], target = 9
                      </span>{" "}
                    </p>
                    <p>
                      <b>Output :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        [0,1]
                      </span>{" "}
                    </p>
                    <p>
                      <b>Explanation :</b>{" "}
                      <span className="font-medium text-base-content/80">
                        Because nums[0] + nums[1] == 9, we return [0, 1].
                      </span>{" "}
                    </p>
                  </div>
                </div>
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
const ProblemSubmissionsTabContent = () => {
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
                <th>Runtimer</th>
                <th>Memoryr</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <h2 className="font-semibold text-error">Worng Answer</h2>
                  <p>22 May 25</p>
                </td>
                <td>
                  <p className="badge">Javascript</p>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const TabContent = ({ problem, activeTab }) => {
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
      return <ProblemSubmissionsTabContent />;
  }
};

const ProblemLeftPannel = ({ problem }) => {
  const [activeTab, setActiveTab] = useState("description");

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
            </div>

            <TabContent problem={problem} activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemLeftPannel;
