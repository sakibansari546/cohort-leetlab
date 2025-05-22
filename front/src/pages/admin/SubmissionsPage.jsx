"use client";
import DataTable from "../../components/admin/DataTable";
import { ArrowUpDown, Download } from "lucide-react";

export default function SubmissionsPage() {
  // Mock submissions data
  const submissions = [
    {
      id: "sub12345",
      user_id: 1,
      user_name: "Alex Johnson",
      problem_id: 1,
      problem_title: "Two Sum",
      language: "JavaScript",
      status: "Accepted",
      runtime: "76 ms",
      memory: "42.1 MB",
      timestamp: "2023-05-15 14:32:45",
    },
    {
      id: "sub12346",
      user_id: 2,
      user_name: "Sarah Chen",
      problem_id: 2,
      problem_title: "Add Two Numbers",
      language: "Python",
      status: "Accepted",
      runtime: "68 ms",
      memory: "13.9 MB",
      timestamp: "2023-05-15 09:15:22",
    },
    {
      id: "sub12347",
      user_id: 3,
      user_name: "Michael Rodriguez",
      problem_id: 3,
      problem_title: "Longest Substring Without Repeating Characters",
      language: "Java",
      status: "Wrong Answer",
      runtime: "N/A",
      memory: "N/A",
      timestamp: "2023-05-15 16:48:10",
    },
    {
      id: "sub12348",
      user_id: 3,
      user_name: "Michael Rodriguez",
      problem_id: 3,
      problem_title: "Longest Substring Without Repeating Characters",
      language: "Java",
      status: "Accepted",
      runtime: "5 ms",
      memory: "42.3 MB",
      timestamp: "2023-05-15 17:22:37",
    },
    {
      id: "sub12349",
      user_id: 4,
      user_name: "Emma Wilson",
      problem_id: 4,
      problem_title: "Median of Two Sorted Arrays",
      language: "C++",
      status: "Time Limit Exceeded",
      runtime: "N/A",
      memory: "N/A",
      timestamp: "2023-05-14 11:05:19",
    },
    {
      id: "sub12350",
      user_id: 4,
      user_name: "Emma Wilson",
      problem_id: 4,
      problem_title: "Median of Two Sorted Arrays",
      language: "C++",
      status: "Accepted",
      runtime: "32 ms",
      memory: "89.5 MB",
      timestamp: "2023-05-14 13:40:55",
    },
    {
      id: "sub12351",
      user_id: 5,
      user_name: "Daniel Lee",
      problem_id: 5,
      problem_title: "Longest Palindromic Substring",
      language: "JavaScript",
      status: "Accepted",
      runtime: "88 ms",
      memory: "44.7 MB",
      timestamp: "2023-05-14 10:27:33",
    },
    {
      id: "sub12352",
      user_id: 6,
      user_name: "Olivia Taylor",
      problem_id: 6,
      problem_title: "ZigZag Conversion",
      language: "Python",
      status: "Accepted",
      runtime: "52 ms",
      memory: "14.1 MB",
      timestamp: "2023-05-13 18:12:45",
    },
    {
      id: "sub12353",
      user_id: 7,
      user_name: "James Brown",
      problem_id: 7,
      problem_title: "Reverse Integer",
      language: "C++",
      status: "Runtime Error",
      runtime: "N/A",
      memory: "N/A",
      timestamp: "2023-05-13 15:34:21",
    },
    {
      id: "sub12354",
      user_id: 7,
      user_name: "James Brown",
      problem_id: 7,
      problem_title: "Reverse Integer",
      language: "C++",
      status: "Accepted",
      runtime: "0 ms",
      memory: "6.1 MB",
      timestamp: "2023-05-13 15:50:09",
    },
    {
      id: "sub12355",
      user_id: 8,
      user_name: "Sophia Martinez",
      problem_id: 8,
      problem_title: "String to Integer (atoi)",
      language: "Java",
      status: "Wrong Answer",
      runtime: "N/A",
      memory: "N/A",
      timestamp: "2023-05-12 09:22:17",
    },
    {
      id: "sub12356",
      user_id: 8,
      user_name: "Sophia Martinez",
      problem_id: 8,
      problem_title: "String to Integer (atoi)",
      language: "Java",
      status: "Accepted",
      runtime: "2 ms",
      memory: "38.9 MB",
      timestamp: "2023-05-12 10:15:33",
    },
    {
      id: "sub12357",
      user_id: 9,
      user_name: "William Garcia",
      problem_id: 9,
      problem_title: "Palindrome Number",
      language: "Python",
      status: "Accepted",
      runtime: "56 ms",
      memory: "13.8 MB",
      timestamp: "2023-05-12 14:47:52",
    },
    {
      id: "sub12358",
      user_id: 10,
      user_name: "Ava Hernandez",
      problem_id: 10,
      problem_title: "Regular Expression Matching",
      language: "JavaScript",
      status: "Wrong Answer",
      runtime: "N/A",
      memory: "N/A",
      timestamp: "2023-05-11 11:11:27",
    },
    {
      id: "sub12359",
      user_id: 10,
      user_name: "Ava Hernandez",
      problem_id: 10,
      problem_title: "Regular Expression Matching",
      language: "JavaScript",
      status: "Time Limit Exceeded",
      runtime: "N/A",
      memory: "N/A",
      timestamp: "2023-05-11 12:05:44",
    },
    {
      id: "sub12360",
      user_id: 10,
      user_name: "Ava Hernandez",
      problem_id: 10,
      problem_title: "Regular Expression Matching",
      language: "JavaScript",
      status: "Accepted",
      runtime: "92 ms",
      memory: "47.2 MB",
      timestamp: "2023-05-11 14:30:18",
    },
  ];

  const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "User",
      accessor: "user_name",
      render: (submission) => (
        <a
          href={`/admin/users/${submission.user_id}`}
          className="link link-hover"
        >
          {submission.user_name}
        </a>
      ),
    },
    {
      header: "Problem",
      accessor: "problem_title",
      render: (submission) => (
        <a
          href={`/admin/problems/${submission.problem_id}`}
          className="link link-hover link-primary"
        >
          {submission.problem_title}
        </a>
      ),
    },
    {
      header: "Language",
      accessor: "language",
      render: (submission) => (
        <div className="badge badge-outline badge-sm">
          {submission.language}
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (submission) => (
        <span
          className={`badge badge-sm ${
            submission.status === "Accepted"
              ? "badge-success"
              : submission.status === "Wrong Answer"
              ? "badge-error"
              : "badge-warning"
          }`}
        >
          {submission.status}
        </span>
      ),
    },
    {
      header: "Runtime",
      accessor: "runtime",
    },
    {
      header: "Memory",
      accessor: "memory",
    },
    {
      header: "Timestamp",
      accessor: "timestamp",
    },
  ];

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Submission History</h1>
          <p className="text-base-content opacity-70">
            View and analyze code submissions from all users.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Submissions</div>
              <div className="stat-value">{submissions.length}</div>
              <div className="stat-desc">Last 7 days</div>
            </div>
            <div className="stat">
              <div className="stat-title">Acceptance Rate</div>
              <div className="stat-value text-success">
                {Math.round(
                  (submissions.filter((s) => s.status === "Accepted").length /
                    submissions.length) *
                    100
                )}
                %
              </div>
              <div className="stat-desc">
                {submissions.filter((s) => s.status === "Accepted").length}{" "}
                accepted submissions
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Most Used Language</div>
              <div className="stat-value text-primary">
                {
                  Object.entries(
                    submissions.reduce((acc, sub) => {
                      acc[sub.language] = (acc[sub.language] || 0) + 1;
                      return acc;
                    }, {})
                  ).sort((a, b) => b[1] - a[1])[0][0]
                }
              </div>
              <div className="stat-desc">
                {Math.round(
                  (Object.entries(
                    submissions.reduce((acc, sub) => {
                      acc[sub.language] = (acc[sub.language] || 0) + 1;
                      return acc;
                    }, {})
                  ).sort((a, b) => b[1] - a[1])[0][1] /
                    submissions.length) *
                    100
                )}
                % of submissions
              </div>
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

        <DataTable
          columns={columns}
          data={submissions}
          title="Recent Submissions"
          actions={false}
        />
      </div>
    </div>
  );
}
