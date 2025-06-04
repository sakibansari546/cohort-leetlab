import React from "react";
import {
  useGetProblemsCountQuery,
  useGetProblemsQuery,
  useGetSolvedProblemsCountQuery,
  useGetSolvedProblemsQuery,
} from "../querys/useProblemQuery";
import {
  useGetSubmissionsCountQuery,
  useGetSubmissionsQuery,
} from "../querys/useSubmissionQuery";

const UserDashBoardHead = () => {
  const { data, isPending } = useGetSolvedProblemsCountQuery();
  const { data: problemsCountData } = useGetProblemsCountQuery();
  const { data: solvedProblemsData } = useGetSolvedProblemsQuery();

  const { data: submissionsCountData } = useGetSubmissionsCountQuery();
  const { data: submissionsData } = useGetSubmissionsQuery();

  // Count accepted submissions
  const acceptedSubmissionCount = submissionsData?.submissions?.reduce(
    (acc, curr) => (curr.status === "Accepted" ? acc + 1 : acc),
    0
  );

  // Calculate acceptance rate (as a percentage)
  const totalSubmissions = submissionsData?.submissions?.length || 0;
  const acceptanceRate =
    totalSubmissions > 0
      ? ((acceptedSubmissionCount / totalSubmissions) * 100).toFixed(0)
      : "0.00";

  const difficultyCounts = solvedProblemsData?.solvedProblems?.reduce(
    (acc, curr) => {
      const diff = curr?.difficulty;
      if (diff) {
        acc[diff] = (acc[diff] || 0) + 1;
      }
      return acc;
    },
    { EASY: 0, MEDIUM: 0, HARD: 0 }
  );
  const submissionsLanguageCounts = submissionsData?.submissions?.reduce(
    (acc, curr) => {
      const lang = curr?.language;
      if (lang) {
        acc[lang] = (acc[lang] || 0) + 1;
      }
      return acc;
    },
    { JAVASCRIPT: 0, PYTHON: 0, JAVA: 0 }
  );

  return (
    <div>
      <div className="flex flex-col justify-center gap-5">
        <div className="w-full flex items-center justify-center gap-5">
          <div className=" w-full bg-base-200  rounded-lg flex items-center justify-center">
            <div className="w-full flex items-center gap-2.5 py-4 px-4">
              <div className="w-[60%] py-4 bg-base-200/40">
                <div className="bg-base-100 rounded-lg p-2 md:col-span-2 py-4 flex items-center justify-center">
                  <div className="relative w-32 ">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold">
                        {isPending ? "0" : data?.count}
                        <span className="text-lg opacity-50">
                          /{problemsCountData?.count}
                        </span>
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
              <div className="w-[40%]">
                <div className="space-y-2">
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-success text-sm">Easy</span>
                      <span className="text-sm">{difficultyCounts?.EASY}</span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-warning text-sm">Med.</span>
                      <span className="text-sm">
                        {difficultyCounts?.MEDIUM}
                      </span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-error text-sm">Hard</span>
                      <span className="text-sm">{difficultyCounts?.HARD}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-base-200 min-h-[20vh] rounded-lg flex items-center justify-center">
            <div className="w-full flex items-center gap-2.5 py-4 px-4">
              <div className="w-[60%] py-4 bg-base-200/40">
                <div className="bg-base-100  rounded-lg p-2 md:col-span-2 py-4 flex items-center justify-center">
                  <div className="relative w-32 ">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold">
                        {submissionsData?.submissions?.length || 0}
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
              <div className="w-[40%] ">
                <div className="space-y-2">
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-success text-sm">Javascript</span>
                      <span className="text-sm">
                        {submissionsLanguageCounts?.JAVASCRIPT}
                      </span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-warning text-sm">Python</span>
                      <span className="text-sm">
                        {submissionsLanguageCounts?.PYTHON}
                      </span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-error text-sm">Java</span>
                      <span className="text-sm">
                        {submissionsLanguageCounts?.JAVA}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          <div className=" w-full bg-base-200  rounded-lg flex items-center justify-center">
            <div className="w-full flex items-center gap-2.5 py-4 px-4">
              <div className="w-[60%] py-4 bg-base-200/40">
                <div className="bg-base-100 rounded-lg p-2 md:col-span-2 py-4 flex items-center justify-center">
                  <div className="relative w-32 ">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold">
                        {acceptedSubmissionCount}
                        <span className="text-lg opacity-50">
                          / {submissionsData?.submissions?.length || 0}
                        </span>
                      </div>
                      <div className="text-sm opacity-70">Accepted</div>
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
              <div className="w-[40%]">
                <div className="space-y-2">
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-success text-sm">Easy</span>
                      <span className="text-sm">{difficultyCounts?.EASY}</span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-warning text-sm">Med.</span>
                      <span className="text-sm">
                        {difficultyCounts?.MEDIUM}
                      </span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-error text-sm">Hard</span>
                      <span className="text-sm">{difficultyCounts?.HARD}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full bg-base-200 min-h-[20vh] rounded-lg flex items-center justify-center">
            <div className="w-full flex items-center gap-2.5 py-4 px-4">
              <div className="w-[60%] py-4 bg-base-200/40">
                <div className="bg-base-100  rounded-lg p-2 md:col-span-2 py-4 flex items-center justify-center">
                  <div className="relative w-32 ">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold">
                        {acceptanceRate}%
                        {/* <span className="text-lg opacity-50">/ 100</span> */}
                      </div>
                      <div className="text-sm opacity-70">Acceptance Rate</div>
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
              <div className="w-[40%] ">
                <div className="space-y-2">
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-success text-sm">Javascript</span>
                      <span className="text-sm">
                        {submissionsLanguageCounts?.JAVASCRIPT}
                      </span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-warning text-sm">Python</span>
                      <span className="text-sm">
                        {submissionsLanguageCounts?.PYTHON}
                      </span>
                    </div>
                  </div>
                  <div className="bg-base-100 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-error text-sm">Java</span>
                      <span className="text-sm">
                        {submissionsLanguageCounts?.JAVA}
                      </span>
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
