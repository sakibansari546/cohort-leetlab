import React from "react";
import Editor from "@monaco-editor/react";

import {
  Bookmark,
  CheckSquare,
  CloudUploadIcon,
  Code2,
  LucidePlay,
  Maximize,
  Maximize2,
} from "lucide-react";

import ProblemLeftPannel from "../components/ProblemLeftPannel";
import ProblemTestcasesPannel from "../components/ProblemTestcasesPannel";

const ProblemPage = () => {
  return (
    <>
      <div className="bg-base-100 w-[1000px] lg:w-full max-h- rounded-lg">
        <div className="flex items-center justify-center w-full">
          <div className="w-full">
            <div className="flex items-center justify-center bg-base-100 py-5">
              <div className="space-x-2">
                <button className="btn btn btn-sm md:btn-md">
                  <LucidePlay size="18" />
                  Run
                </button>
                <button className="btn btn-accent btn-sm md:btn-md">
                  <CloudUploadIcon size="18" />
                  Submit
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full h-full flex items-center px-3 gap-2 justify-center rounded-lg">
                {/* Problem Description Pannel */}
                <ProblemLeftPannel />

                <div className="w-1/2 h-[90vh]">
                  <div className="w-full h-full flex flex-col gap-2 ">
                    {/* Top COding Part */}
                    <div className="relative w-full bg-base-300 h-1/2 rounded-lg border border-base-content/30">
                      <div>
                        <div className="bg-base-200 w-full sticky left-0 top-0 z-50 rounded-lg">
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
                                className="select select-sm bg-base-300 border-none outline-none focus:outline-0 text-base-content cursor-pointer"
                              >
                                <option>JavaScript</option>
                                <option>C++</option>
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
                        <Editor
                          className="overflow-hidden rounded-lg"
                          theme="vs-dark"
                          height="34vh"
                          defaultLanguage="javascript"
                          defaultValue="// some comment"
                        />
                      </div>
                    </div>

                    {/* Bottom Testaces Part */}
                    <div className="w-full bg-base-300 h-1/2 z-50 rounded-lg border border-base-content/30 overflow-y-auto">
                      <div>
                        <div className="bg-base-200 z-50 w-full sticky top-0 rounded-lg border border-base-content/30 rounded-b-none">
                          <div className="h-10 flex items-center justify-between  border border-base-content/30 border-b-0 rounded-lg rounded-b-none">
                            <button className="btn btn-ghost text-success">
                              <CheckSquare size="18" />
                              Testcases
                            </button>
                            <button className="btn btn-ghost">
                              <Maximize size="18" />
                            </button>
                          </div>
                        </div>
                        {/* Problem Testcases */}
                        <ProblemTestcasesPannel />
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
