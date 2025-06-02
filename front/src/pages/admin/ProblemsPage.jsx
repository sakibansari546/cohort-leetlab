"use client";
import DataTable from "../../components/admin/DataTable";
import { Link } from "react-router-dom";
import {
  FilePlus,
  Upload,
  Download,
  Trash2,
  Loader2,
  Edit,
  Ellipsis,
} from "lucide-react";
import {
  useDeleteProblemMutation,
  useGetProblemsQuery,
} from "../../querys/useProblemQuery";
import { formateDate } from "../../utils/date-formate";
import { useFilterStore } from "../../store/filterStore";

export default function ProblemsPage() {
  const { problemsFilter } = useFilterStore();
  const { data, isPending, isError, error } =
    useGetProblemsQuery(problemsFilter);
  const problems = data?.problems;

  console.log(error);

  const {
    mutateAsync,
    isPending: deleteIsPending,
    isError: deleteIsError,
    error: deleteError,
  } = useDeleteProblemMutation();

  const getAcceptanceRate = (problem) => {
    const total = problem.submissions?.length || 0;
    const accepted =
      problem.submissions?.filter((s) => s.status === "Accepted").length || 0;
    if (total === 0) return "0%";
    return `${Math.round((accepted / total) * 100)}%`;
  };

  const handleDeleteProblem = async (problemId) => {
    await mutateAsync({ problemId });
  };

  if (isError) {
    return (
      <div class="p-4 sm:ml-64 w-full">
        <div class="p-4 rounded-lg max-h-[80vh]">
          <div className="flex items-center py-6">
            <h1 className="text-2xl font-semibold text-center w-full">
              {error?.response?.data?.message || "Something went wrong"}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Problem Management</h1>
          <p className="text-base-content opacity-70">
            View, add, edit and manage coding problems on HypeCoding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Problems</div>
              <div className="stat-value">{problems?.length}</div>
              <div className="stat-desc">
                {problems?.filter((p) => p.difficulty === "EASY").length} Easy,{" "}
                {problems?.filter((p) => p.difficulty === "MEDIUM").length}{" "}
                Medium,{" "}
                {problems?.filter((p) => p.difficulty === "HARD").length} Hard
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Total Submissions</div>
              <div className="stat-value text-secondary">
                {problems
                  ?.reduce(
                    (acc, problem) => acc + problem.submissions?.length,
                    0
                  )
                  .toLocaleString()}
              </div>
              <div className="stat-desc">All time</div>
            </div>
            <div className="stat">
              <div className="stat-title">Demo Problems</div>
              <div className="stat-value text-warning">
                {problems?.filter((p) => p.isDemo).length}
              </div>
              <div className="stat-desc">
                {Math.round(
                  (problems?.filter((p) => p.isDemo).length /
                    problems?.length) *
                    100
                )}
                % of total
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">
              <Download size={16} className="mr-1" />
              Export
            </button>
            <button className="btn btn-outline btn-sm">
              <Upload size={16} className="mr-1" />
              Import
            </button>
            <Link
              href="/admin/create-problem"
              className="btn btn-primary btn-sm"
            >
              <FilePlus size={16} className="mr-1" />
              Add Problem
            </Link>
          </div>
        </div>

        <div>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Difficulty</th>
                <th>Company</th>
                <th>Tags</th>
                <th>Submissions</th>
                <th>Acceptance</th>
                <th>CreatedAt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isPending ? (
                <td className="absolute top-1/2 left-1/2">
                  <span className="loading text-lg"></span>
                </td>
              ) : problems?.lenght === 0 ? (
                <td className="absolute top-1/2 left-1/2">
                  <span className="text-lg">No Problems found</span>
                </td>
              ) : (
                problems?.map((problem) => (
                  <tr key={problem.id}>
                    <td className="font-medium relative">
                      {problem.isDemo && (
                        <span className="absolute -top-3 right-5 badge badge-sm badge-primary">
                          Demo
                        </span>
                      )}

                      <Link
                        to={`/problems/${problem.id}`}
                        className="hover:underline text-primary"
                      >
                        <span className="line-clamp-2 break-words max-w-xs text-primary">
                          {problem.title}
                        </span>
                      </Link>
                    </td>

                    <td>
                      <span
                        className={`badge badge-sm ${
                          problem.difficulty == "EASY"
                            ? "badge-success"
                            : problem.difficulty == "HARD"
                            ? "badge-error"
                            : "badge-warning"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-">{problem.company[0]}</span>
                    </td>
                    <td className="max-w-l">
                      {problem.tags.map(
                        (tag, i) =>
                          i < 2 && (
                            <span key={i} className="badge badge-">
                              {tag}
                            </span>
                          )
                      )}
                    </td>
                    <td>{problem.submissions?.length}</td>
                    <td>{getAcceptanceRate(problem)}</td>
                    <td>{formateDate(problem.createdAt).split("-")[0]}</td>

                    <td>
                      <div className="flex items-center gap-2">
                        <div className="dropdown dropdown-end">
                          <button
                            tabIndex={0}
                            role="button"
                            className="btn btn-sm"
                          >
                            <Ellipsis size="16" />
                          </button>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                          >
                            <li>
                              <button className="flex items-center gap-3">
                                <Edit size="18" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                disabled={deleteIsPending}
                                onClick={() => handleDeleteProblem(problem.id)}
                                className="flex items-center gap-3 text-error"
                              >
                                {deleteIsPending ? (
                                  <>
                                    {" "}
                                    <Loader2
                                      className="animate-spin"
                                      size="18"
                                    />
                                    Loading
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <Trash2 size="18" />
                                    Delete
                                  </>
                                )}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}

              {/* Row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
