import React from "react";

const UserDashBoardHead = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5">
          <div className=" w-full bg-base-300  rounded-lg flex items-center justify-center">
            <div className="w-full flex items-center gap-2.5 py-4 px-4">
              <div className="w-[60%] h-38 bg-base-200/40">
                <div className="bg-base-300 rounded-lg p-2 md:col-span-2 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold">
                        0<span className="text-lg opacity-50">/343</span>
                      </div>
                      <div className="text-sm opacity-70">Solved</div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-38 ">
                <div className="space-y-2">
                  <div className="bg-base-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-success text-sm">Easy</span>
                      <span className="text-sm">3</span>
                    </div>
                  </div>
                  <div className="bg-base-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-warning text-sm">Med.</span>
                      <span className="text-sm">4</span>
                    </div>
                  </div>
                  <div className="bg-base-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-error text-sm">Hard</span>
                      <span className="text-sm"> 54</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-base-300 min-h-[20vh] rounded-lg flex items-center justify-center">
            <div className="w-full flex items-center gap-2.5 py-4 px-4">
              <div className="w-[60%] h-38 bg-base-200/40">
                <div className="bg-base-300 rounded-lg p-2 md:col-span-2 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold">
                        0<span className="text-lg opacity-50">/343</span>
                      </div>
                      <div className="text-sm opacity-70">Submissions</div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-38 ">
                <div className="space-y-2">
                  <div className="bg-base-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-success text-sm">Easy</span>
                      <span className="text-sm">3</span>
                    </div>
                  </div>
                  <div className="bg-base-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-warning text-sm">Med.</span>
                      <span className="text-sm">4</span>
                    </div>
                  </div>
                  <div className="bg-base-200 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-error text-sm">Hard</span>
                      <span className="text-sm"> 54</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoardHead;
