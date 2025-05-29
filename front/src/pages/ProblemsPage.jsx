import {
  Bookmark,
  CheckSquare,
  Circle,
  CircleCheckBig,
  Ellipsis,
} from "lucide-react";
import ProblemsPageSidebar from "../components/ProblemsPageSidebar";
import ProblemsHeader from "../components/ProblemsHeader";
import { useGetProblemsQuery } from "../querys/useProblemQuery";
import { useGetUserQuery } from "../querys/useUserQuery";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import AddToPlaylistProblemModal from "../components/AddToPlaylistProblemModal";
import { useFilterStore } from "../store/filterStore";

const ProblemsPage = () => {
  const [tags, setTags] = useState([]);
  const { problemsFilter } = useFilterStore();

  const { data, isFetching, isError, error } =
    useGetProblemsQuery(problemsFilter);
    
  const { data: user } = useGetUserQuery();
  // const problems = data?.problems;

  const problems = useMemo(
    () => data?.problems.slice().sort((a, b) => a.createdAt - b.createdAt),
    [data?.problems]
  );

  const errorMessage = error?.response.data.message;

  const [problemId, setProblemId] = useState([]);

  const handleAddProblemInPlaylist = (problemId) => {
    document.getElementById("add_problem_in_playlist_modal").showModal();
    setProblemId([problemId]);
  };

  const getAcceptanceRate = (problem) => {
    const total = problem.submissions?.length || 0;
    const accepted =
      problem.submissions?.filter((s) => s.status === "Accepted").length || 0;
    if (total === 0) return "0%";
    return `${Math.round((accepted / total) * 100)}%`;
  };

  useEffect(() => {
    if (problems) {
      setTags([...new Set(problems.flatMap((problem) => problem.tags || []))]);
    }
  }, [problems]);

  return (
    <div className="flex min-h-screen bg-base-100 text-base-content">
      {/* Add Problem to playlist Modal */}
      <AddToPlaylistProblemModal problemId={problemId} />

      {/* Mobile sidebar toggle */}
      <ProblemsPageSidebar />

      {/* Main content */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto">
        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="card bg-emerald-700 text-white">
            <div className="card-body">
              <h2 className="card-title text-xl">
                HYPE Code's Interview Crash Course:
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
                HYPE Code's Interview Crash Course:
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
        <ProblemsHeader tags={tags} />

        {/* Problems List */}
        <div className="overflow-x-auto">
          {isFetching ? (
            <>
              <tr className="flex items-center justify-center w-full">
                <td className="loading loading-ring loading-xl"></td>
              </tr>
            </>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Title</th>
                  <th>Difficulty</th>
                  <th>Company</th>
                  <th>Tags</th>
                  <th className="text-left">Acceptance</th>
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
                <tbody key="problem-tbody">
                  {problems?.length == 0 ? (
                    <>
                      <tr>
                        <td>
                          <h1>No Problems Found!</h1>
                        </td>
                      </tr>
                    </>
                  ) : (
                    problems?.map((problem, idx) => {
                      const isSolved = problem.solvedBy?.some(
                        (userP) => userP.userId == user?.user.id
                      );

                      return (
                        <tr
                          key={problem.id}
                          className={` ${idx % 2 == 0 && "bg-base-200"}`}
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
                          <td className="font-medium relative">
                            {problem.isDemo && (
                              <span className="absolute top-2 right-1/2 badge badge-sm badge-primary">
                                Demo
                              </span>
                            )}
                            <Link
                              to={`/problems/${problem.id}`}
                              className="hover:underline"
                            >
                              <span className="line-clamp-2 break-words max-w-xs">
                                {idx + 1}. {problem.title}
                              </span>
                            </Link>
                          </td>
                          <td
                            className={`capitalize ${
                              problem.difficulty === "EASY".toUpperCase()
                                ? "text-success"
                                : problem.difficulty === "MEDIUM".toUpperCase()
                                ? "text-warning"
                                : "text-error"
                            }`}
                          >
                            <span>{problem.difficulty}</span>
                          </td>
                          <td>{problem.company}</td>
                          <td>
                            {problem.tags.map(
                              (tag, i) =>
                                i < 2 && (
                                  <span key={i} className="badge badge-">
                                    {tag}
                                  </span>
                                )
                            )}
                          </td>
                          <td className="text-left">
                            {getAcceptanceRate(problem)}
                          </td>

                          <td>
                            <div className="dropdown dropdown-bottom dropdown-end">
                              <button
                                tabIndex={0}
                                role="button"
                                className="btn btn-sm md:btn"
                              >
                                <Ellipsis size="18" />
                              </button>
                              <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-1 w-50 p-2 shadow-sm"
                              >
                                <li>
                                  <button
                                    onClick={() =>
                                      handleAddProblemInPlaylist(problem.id)
                                    }
                                  >
                                    Add to playlist
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              )}
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProblemsPage;
