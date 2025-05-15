import { Bookmark, CheckSquare, Circle, CircleCheckBig } from "lucide-react";
import ProblemsPageSidebar from "../components/ProblemsPageSidebar";
import ProblemsHeader from "../components/ProblemsHeader";
import { useGetProblemsQuery } from "../querys/useProblemQuery";
import { useGetUserQuery } from "../querys/useUserQuery";

const ProblemsPage = () => {
  const { data, isFetching, isError, error } = useGetProblemsQuery();
  const { data: user } = useGetUserQuery();
  const problems = data?.problems;
  const errorMessage = error?.response.data.message;

  // Get solved problem ids from user data
  const solvedProblems = user?.user.solvedProblems || [];

  return (
    <div className="flex min-h-screen bg-base-100 text-base-content">
      {/* Mobile sidebar toggle */}
      <ProblemsPageSidebar />

      {/* Main content */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto">
        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="card bg-emerald-700 text-white">
            <div className="card-body">
              <h2 className="card-title text-xl">
                LeetCode's Interview Crash Course:
              </h2>
              <p>System Design for Interviews and Beyond</p>
              <div className="card-actions justify-start mt-2">
                <button className="btn btn-sm bg-white text-emerald-800 border-none hover:bg-white/90">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-indigo-600 text-white">
            <div className="card-body">
              <h2 className="card-title text-xl">
                LeetCode's Interview Crash Course:
              </h2>
              <p>Data Structures and Algorithms</p>
              <div className="card-actions justify-start mt-2">
                <button className="btn btn-sm bg-white text-indigo-700 border-none hover:bg-white/90">
                  Start Learning
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-amber-500 text-white">
            <div className="card-body relative">
              <div className="absolute top-2 right-2 badge badge-sm bg-orange-500 border-none">
                New
              </div>
              <h2 className="card-title text-xl">New & Trending Company Qs</h2>
              <p>Latest Qs From Big Tech</p>
              <div className="card-actions justify-start mt-2">
                <button className="btn btn-sm bg-white text-amber-600 border-none hover:bg-white/90">
                  Claim Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search sbar */}
        <ProblemsHeader />

        {/* Problems List */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Title</th>
                <th className="text-right">Acceptance</th>
                <th>Difficulty</th>
                <th>Progress</th>
                <th>Actions</th>
              </tr>
            </thead>
            {isError ? (
              <tbody className="w-full text-center font-bold text-2xl">
                <tr>
                  <td>{errorMessage}</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                <tr className="hover:bg-base-200">
                  <td className="w-8">
                    <CheckSquare className="w-5 h-5 text-primary rounded-full" />
                  </td>
                  <td className="font-medium ">
                    <span className="line-clamp-2 break-words max-w-xs">
                      2900. Longest Unequal Adjacent Groups Subsequence I
                    </span>
                  </td>
                  <td className="text-right">65.3%</td>
                  <td className="text-success">Easy</td>
                  <td>
                    <div className="w-24 bg-base-200 rounded-full h-2">
                      <div
                        className="bg-success h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm md:btn">
                      <Bookmark size="18" />
                    </button>
                  </td>
                </tr>
                {isFetching ? (
                  <>
                    <tr className="flex items-center justify-center w-full">
                      <td className="loading loading-ring loading-xl"></td>
                    </tr>
                  </>
                ) : problems?.length == 0 ? (
                  <>
                    <tr>
                      <td>
                        <h1>No Problems Found!</h1>
                      </td>
                    </tr>
                  </>
                ) : (
                  problems?.map((problem, idx) => {
                    const isSolved = solvedProblems.includes(problem.id);
                    return (
                      <tr
                        key={problem.id}
                        className={`hover:bg-base-200 ${
                          idx % 2 == 0 && "bg-base-200"
                        }`}
                      >
                        <td className="w-8">
                          {isSolved ? (
                            <CircleCheckBig
                              size="18"
                              className="text-success"
                            />
                          ) : (
                            <Circle size="18" />
                          )}
                        </td>
                        <td className="font-medium ">
                          <span className="line-clamp-2 break-words max-w-xs">
                            {idx + 1}. {problem.title}
                          </span>
                        </td>
                        <td className="text-right">55.6%</td>
                        <td className="text-success">
                          <span className="capitalize">
                            {problem.difficulty}
                          </span>
                        </td>
                        <td>
                          <div className="w-24 bg-base-200 rounded-full h-2">
                            <div
                              className="bg-success h-2 rounded-full"
                              style={{ width: "55%" }}
                            ></div>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-sm md:btn">
                            <Bookmark size="18" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
export default ProblemsPage;
