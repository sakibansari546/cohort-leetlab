"use client";
import DataTable from "../../components/admin/DataTable";
import { Link } from "react-router-dom";
import { FilePlus, Upload, Download } from "lucide-react";

export default function ProblemsPage() {
  // Mock problems data
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      tags: ["Array", "Hash Table"],
      submissions: 12543,
      acceptance: "78%",
      is_premium: false,
      is_published: true,
      created_at: "2023-01-15",
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium",
      category: "Linked List",
      tags: ["Linked List", "Math"],
      submissions: 8752,
      acceptance: "65%",
      is_premium: false,
      is_published: true,
      created_at: "2023-01-20",
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      category: "String",
      tags: ["String", "Sliding Window"],
      submissions: 9321,
      acceptance: "54%",
      is_premium: false,
      is_published: true,
      created_at: "2023-01-25",
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      category: "Array",
      tags: ["Array", "Binary Search", "Divide and Conquer"],
      submissions: 4231,
      acceptance: "42%",
      is_premium: true,
      is_published: true,
      created_at: "2023-02-01",
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      category: "String",
      tags: ["String", "Dynamic Programming"],
      submissions: 7654,
      acceptance: "59%",
      is_premium: false,
      is_published: true,
      created_at: "2023-02-05",
    },
    {
      id: 6,
      title: "ZigZag Conversion",
      difficulty: "Medium",
      category: "String",
      tags: ["String"],
      submissions: 5421,
      acceptance: "52%",
      is_premium: false,
      is_published: true,
      created_at: "2023-02-10",
    },
    {
      id: 7,
      title: "Reverse Integer",
      difficulty: "Medium",
      category: "Math",
      tags: ["Math"],
      submissions: 8976,
      acceptance: "48%",
      is_premium: false,
      is_published: true,
      created_at: "2023-02-15",
    },
    {
      id: 8,
      title: "String to Integer (atoi)",
      difficulty: "Medium",
      category: "String",
      tags: ["String"],
      submissions: 7123,
      acceptance: "43%",
      is_premium: false,
      is_published: true,
      created_at: "2023-02-20",
    },
    {
      id: 9,
      title: "Palindrome Number",
      difficulty: "Easy",
      category: "Math",
      tags: ["Math"],
      submissions: 10234,
      acceptance: "83%",
      is_premium: false,
      is_published: true,
      created_at: "2023-02-25",
    },
    {
      id: 10,
      title: "Regular Expression Matching",
      difficulty: "Hard",
      category: "String",
      tags: ["String", "Dynamic Programming", "Recursion"],
      submissions: 3456,
      acceptance: "36%",
      is_premium: true,
      is_published: true,
      created_at: "2023-03-01",
    },
    {
      id: 11,
      title: "Container With Most Water",
      difficulty: "Medium",
      category: "Array",
      tags: ["Array", "Two Pointers", "Greedy"],
      submissions: 6789,
      acceptance: "62%",
      is_premium: false,
      is_published: true,
      created_at: "2023-03-05",
    },
    {
      id: 12,
      title: "Integer to Roman",
      difficulty: "Medium",
      category: "Math",
      tags: ["Math", "String"],
      submissions: 5432,
      acceptance: "70%",
      is_premium: false,
      is_published: true,
      created_at: "2023-03-10",
    },
    {
      id: 13,
      title: "Roman to Integer",
      difficulty: "Easy",
      category: "Math",
      tags: ["Math", "String"],
      submissions: 11234,
      acceptance: "79%",
      is_premium: false,
      is_published: true,
      created_at: "2023-03-15",
    },
    {
      id: 14,
      title: "Longest Common Prefix",
      difficulty: "Easy",
      category: "String",
      tags: ["String"],
      submissions: 9876,
      acceptance: "75%",
      is_premium: false,
      is_published: true,
      created_at: "2023-03-20",
    },
    {
      id: 15,
      title: "3Sum",
      difficulty: "Medium",
      category: "Array",
      tags: ["Array", "Two Pointers", "Sorting"],
      submissions: 7654,
      acceptance: "53%",
      is_premium: false,
      is_published: true,
      created_at: "2023-03-25",
    },
  ];

  const columns = [
    {
      header: "Title",
      accessor: "title",
      render: (problem) => (
        <div>
          <Link
            href={`/admin/problems/${problem.id}`}
            className="link link-hover link-primary"
          >
            {problem.title}
          </Link>
          {problem.is_premium && (
            <span className="badge badge-warning badge-sm ml-2">Premium</span>
          )}
          {!problem.is_published && (
            <span className="badge badge-ghost badge-sm ml-2">Draft</span>
          )}
        </div>
      ),
    },
    {
      header: "Difficulty",
      accessor: "difficulty",
      render: (problem) => (
        <span
          className={`badge ${
            problem.difficulty === "Easy"
              ? "badge-success"
              : problem.difficulty === "Medium"
              ? "badge-warning"
              : "badge-error"
          }`}
        >
          {problem.difficulty}
        </span>
      ),
    },
    {
      header: "Category",
      accessor: "category",
    },
    {
      header: "Tags",
      accessor: "tags",
      render: (problem) => (
        <div className="flex flex-wrap gap-1">
          {problem.tags.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              {tag}
            </span>
          ))}
        </div>
      ),
    },
    {
      header: "Submissions",
      accessor: "submissions",
    },
    {
      header: "Acceptance",
      accessor: "acceptance",
    },
  ];

  const handleEditProblem = (problem) => {
    window.location.href = `/admin/create-problem?id=${problem.id}`;
  };

  const handleDeleteProblem = (problem) => {
    if (
      confirm(`Are you sure you want to delete problem "${problem.title}"?`)
    ) {
      console.log("Delete problem:", problem);
      // This would call an API to delete the problem
    }
  };

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
              <div className="stat-value">{problems.length}</div>
              <div className="stat-desc">
                {problems.filter((p) => p.difficulty === "Easy").length} Easy,{" "}
                {problems.filter((p) => p.difficulty === "Medium").length}{" "}
                Medium, {problems.filter((p) => p.difficulty === "Hard").length}{" "}
                Hard
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Total Submissions</div>
              <div className="stat-value text-secondary">
                {problems
                  .reduce((acc, problem) => acc + problem.submissions, 0)
                  .toLocaleString()}
              </div>
              <div className="stat-desc">All time</div>
            </div>
            <div className="stat">
              <div className="stat-title">Premium Problems</div>
              <div className="stat-value text-warning">
                {problems.filter((p) => p.is_premium).length}
              </div>
              <div className="stat-desc">
                {Math.round(
                  (problems.filter((p) => p.is_premium).length /
                    problems.length) *
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

        <DataTable
          columns={columns}
          data={problems}
          title="Problems"
          onEdit={handleEditProblem}
          onDelete={handleDeleteProblem}
        />
      </div>
    </div>
  );
}
