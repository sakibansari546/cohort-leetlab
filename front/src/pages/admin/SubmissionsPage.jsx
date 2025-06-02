"use client";
import { Link } from "react-router-dom";
import DataTable from "../../components/admin/DataTable";
import {
  ArrowUpDown,
  Download,
  Edit,
  Ellipsis,
  Loader2,
  Search,
  Trash2,
} from "lucide-react";
import {
  useDeleteSubmissionMutation,
  useGeSubmissionsQuery,
} from "../../querys/useAdminQuery";
import { formateDate } from "../../utils/date-formate";

export default function SubmissionsPage() {
  const { data, isPending, isError, error } = useGeSubmissionsQuery();
  const submissions = data?.submissions;

  const { mutateAsync, isPending: deleteIsPending } =
    useDeleteSubmissionMutation();

  const subs = submissions ?? [];
  const topLangCounts = subs.reduce((acc, sub) => {
    acc[sub.language] = (acc[sub.language] || 0) + 1;
    return acc;
  }, {});

  const topLangEntries = Object.entries(topLangCounts).sort(
    ([, a], [, b]) => b - a
  );
  const [topLang, topCount] = topLangEntries[0] || ["—", 0];
  const topLangPercent =
    subs.length > 0 ? Math.round((topCount / subs.length) * 100) : 0;

  const handleDeleteSubmission = async (submissionId) => {
    await mutateAsync({ submissionId });
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
    <div class="p-4 sm:ml-64 min-h-screen">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Submission History</h1>
          <p className="text-base-content opacity-70">
            View and analyze code submissionss from all users.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Submissionss</div>
              <div className="stat-value">{submissions?.length}</div>
              <div className="stat-desc">Last 7 days</div>
            </div>
            <div className="stat">
              <div className="stat-title">Acceptance Rate</div>
              <div className="stat-value text-success">
                {Math.round(
                  (submissions?.filter((s) => s.status === "Accepted").length /
                    submissions?.length) *
                    100
                )}
                %
              </div>
              <div className="stat-desc">
                {submissions?.filter((s) => s.status === "Accepted").length}{" "}
                accepted submissionss
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Most Used Language</div>
              <div className="stat-value text-primary">{topLang}</div>
              <div className="stat-desc">{topLangPercent}% of submissions</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">
              <ArrowUpDown size={16} className="mr-1" />
              Filter
            </button>
            <button className="btn btn-outline btn-sm">
              <Download size={16} className="mr-1" />
              Export
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 ">
          <h2 className="text-xl font-medium">Submissions</h2>
          <div>
            <label className="input w-68">
              <Search />
              <input type="text" placeholder="Search" id="" />
            </label>
          </div>
        </div>

        <div>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>User</th>
                <th>Problem</th>
                <th>Language</th>
                <th>Status</th>
                <th>Runtime</th>
                <th>Memory</th>
                <th>Timestamp</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isPending ? (
                <td className="absolute top-1/2 left-1/2">
                  <span className="loading text-lg"></span>
                </td>
              ) : submissions.lenght === 0 ? (
                <td className="absolute top-1/2 left-1/2">
                  <span className="text-lg">No Users found</span>
                </td>
              ) : (
                submissions?.map((submission) => {
                  const totalTime = JSON.parse(submission?.time || "[]")
                    .reduce((accu, time) => (accu += parseFloat(time)), 0)
                    .toFixed(2);
                  const totalMemory = JSON.parse(submission?.memory || "[]")
                    .reduce((accu, memory) => (accu += parseFloat(memory)), 0)
                    .toFixed(2);
                  return (
                    <tr key={submission.id}>
                      <td className="font-medium">
                        {submission.user.fullname}
                      </td>
                      <td className="font-medium ">
                        <Link className="hover:underline text-primary">
                          <span className="line-clamp-2 break-words max-w-xs">
                            {submission.problem?.title}
                          </span>
                        </Link>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            submission.language == "JAVASCRIPT"
                              ? "badge-ghost"
                              : submission.language == "PYTHON"
                              ? "badge-error"
                              : "badge-warning"
                          }`}
                        >
                          {submission.language}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            submission.stderr !== null
                              ? "badge-warning"
                              : submission.status === "Accepted"
                              ? "badge-success"
                              : "badge-error"
                          }`}
                        >
                          {submission.stderr !== null
                            ? "Error"
                            : submission.status}
                        </span>
                      </td>
                      <td>{totalTime} s</td>
                      <td>{(totalMemory / 1024).toFixed(2)} MB </td>
                      <td>{formateDate(submission.createdAt)}</td>
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
                                  onClick={() =>
                                    handleDeleteSubmission(submission.id)
                                  }
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
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
