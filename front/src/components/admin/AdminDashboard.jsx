import StatsCard from "./StatsCard";
import ActivityChart from "./ActivityChart";
import {
  Users,
  Code,
  ListTodo,
  FileText,
  AlertTriangle,
  Activity,
  FilePlus,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  useGetPlaylistsCount,
  useGetProblemsCount,
  useGetSubmissionsCount,
  useGetUsersCount,
} from "../../querys/admin/useAdminQuery";

function useGetAllCounts() {
  const { data: userData } = useGetUsersCount();
  const { data: problemData } = useGetProblemsCount();
  const { data: playlistData } = useGetPlaylistsCount();
  const { data: submissionData } = useGetSubmissionsCount();

  return {
    usersCount: userData?.count,
    problemsCount: problemData?.count,
    playlistsCount: playlistData?.count,
    submissionsCount: submissionData?.count,
  };
}

export default function AdminDashboard() {
  const { usersCount, problemsCount, playlistsCount, submissionsCount } =
    useGetAllCounts();
  // Mock stats data
  const stats = [
    {
      title: "Total Users",
      value: usersCount,
      description: "+15% from last month",
      icon: <Users size={24} className="text-primary" />,
      color: "primary",
      link: "/admin/users",
    },
    {
      title: "Total Problems",
      value: problemsCount,
      description: "+23 added this month",
      icon: <Code size={24} className="text-secondary" />,
      color: "secondary",
      link: "/admin/problems",
    },
    {
      title: "Playlists",
      value: playlistsCount,
      description: "543 public playlists",
      icon: <ListTodo size={24} className="text-accent" />,
      color: "accent",
      link: "/admin/playlists",
    },
    {
      title: "Submissions",
      value: submissionsCount,
      description: "72% acceptance rate",
      icon: <FileText size={24} className="text-success" />,
      color: "success",
      link: "/admin/submissions",
    },
  ];

  // Mock recent activity data
  const recentActivity = [
    {
      id: 1,
      type: "user_join",
      user: "Sarah Chen",
      timestamp: "2 hours ago",
      message: "New user registered",
    },
    {
      id: 2,
      type: "problem_added",
      user: "Admin",
      timestamp: "5 hours ago",
      message: "New problem added: 'Binary Tree Maximum Path Sum'",
    },
    {
      id: 3,
      type: "report",
      user: "Michael Rodriguez",
      timestamp: "1 day ago",
      message: "Reported issue with problem #456",
    },
    {
      id: 4,
      type: "achievement",
      user: "Alex Johnson",
      timestamp: "1 day ago",
      message: "Achieved 100-day streak",
    },
    {
      id: 5,
      type: "user_join",
      user: "Emma Wilson",
      timestamp: "2 days ago",
      message: "New user registered",
    },
  ];

  // Mock recent problems data
  const recentProblems = [
    {
      id: 1,
      title: "LRU Cache",
      difficulty: "Hard",
      category: "Data Structures",
      submissions: 145,
      acceptance: "42%",
      added: "2 days ago",
    },
    {
      id: 2,
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      category: "Linked List",
      submissions: 87,
      acceptance: "38%",
      added: "3 days ago",
    },
    {
      id: 3,
      title: "Word Search II",
      difficulty: "Hard",
      category: "Trie",
      submissions: 65,
      acceptance: "29%",
      added: "4 days ago",
    },
    {
      id: 4,
      title: "Find Median from Data Stream",
      difficulty: "Hard",
      category: "Heap",
      submissions: 103,
      acceptance: "45%",
      added: "5 days ago",
    },
  ];

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-base-content opacity-70">
            Welcome to the HypeCoding admin panel. Here's an overview of our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Link
              href={stat.link}
              key={index}
              className="transition-transform hover:scale-[1.02]"
            >
              <StatsCard
                title={stat.title}
                value={stat.value}
                description={stat.description}
                icon={stat.icon}
                color={stat.color}
              />
            </Link>
          ))}
        </div>

        <div className="mb-8">
          <ActivityChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="card bg-base-100 shadow-lg lg:col-span-1">
            <div className="card-body">
              <h2 className="card-title flex justify-between items-center">
                Recent Activity
                <span className="badge badge-primary">New</span>
              </h2>
              <div className="divide-y">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="py-3 flex items-start gap-3"
                  >
                    <div
                      className={`
                    p-2 rounded-full flex-shrink-0 mt-1
                    ${
                      activity.type === "user_join"
                        ? "bg-primary bg-opacity-10"
                        : ""
                    }
                    ${
                      activity.type === "problem_added"
                        ? "bg-secondary bg-opacity-10"
                        : ""
                    }
                    ${
                      activity.type === "report" ? "bg-error bg-opacity-10" : ""
                    }
                    ${
                      activity.type === "achievement"
                        ? "bg-warning bg-opacity-10"
                        : ""
                    }
                  `}
                    >
                      {activity.type === "user_join" && (
                        <Users size={16} className="text-primary" />
                      )}
                      {activity.type === "problem_added" && (
                        <Code size={16} className="text-secondary" />
                      )}
                      {activity.type === "report" && (
                        <AlertTriangle size={16} className="text-error" />
                      )}
                      {activity.type === "achievement" && (
                        <Activity size={16} className="text-warning" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.message}</p>
                      <div className="flex justify-between mt-1 text-xs opacity-70">
                        <span>{activity.user}</span>
                        <span>{activity.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-sm btn-ghost">
                  View All Activity
                </button>
              </div>
            </div>
          </div>

          {/* Recent Problems */}
          <div className="card bg-base-100 shadow-lg lg:col-span-2">
            <div className="card-body">
              <h2 className="card-title">Recently Added Problems</h2>
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Difficulty</th>
                      <th className="hidden md:table-cell">Category</th>
                      <th className="hidden md:table-cell">Submissions</th>
                      <th>Acceptance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProblems.map((problem) => (
                      <tr key={problem.id}>
                        <td>
                          <a
                            href={`/admin/problems/${problem.id}`}
                            className="link link-hover link-primary"
                          >
                            {problem.title}
                          </a>
                          <div className="text-xs opacity-70 md:hidden">
                            {problem.category}
                          </div>
                        </td>
                        <td>
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
                        </td>
                        <td className="hidden md:table-cell">
                          {problem.category}
                        </td>
                        <td className="hidden md:table-cell">
                          {problem.submissions}
                        </td>
                        <td>{problem.acceptance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link
                  href="/admin/create-problem"
                  className="btn btn-primary btn-sm"
                >
                  <FilePlus size={16} className="mr-1" />
                  Add New Problem
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
