"use client";
import { useState } from "react";
import DataTable from "../../components/admin/DataTable";
import { UserPlus, Upload, Download } from "lucide-react";

export default function UsersPage() {
  // Mock users data
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      username: "alexcode",
      role: "user",
      problems_solved: 387,
      join_date: "2023-01-15",
      last_active: "2023-05-15",
      status: "active",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah.chen@example.com",
      username: "sarahc",
      role: "user",
      problems_solved: 215,
      join_date: "2023-02-20",
      last_active: "2023-05-14",
      status: "active",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      email: "michael.r@example.com",
      username: "mikerod",
      role: "user",
      problems_solved: 156,
      join_date: "2023-03-05",
      last_active: "2023-05-10",
      status: "active",
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      username: "emmaw",
      role: "admin",
      problems_solved: 412,
      join_date: "2022-11-12",
      last_active: "2023-05-15",
      status: "active",
    },
    {
      id: 5,
      name: "Daniel Lee",
      email: "daniel.lee@example.com",
      username: "danlee",
      role: "user",
      problems_solved: 89,
      join_date: "2023-04-10",
      last_active: "2023-05-01",
      status: "inactive",
    },
    {
      id: 6,
      name: "Olivia Taylor",
      email: "olivia.t@example.com",
      username: "oliviat",
      role: "moderator",
      problems_solved: 267,
      join_date: "2023-01-05",
      last_active: "2023-05-14",
      status: "active",
    },
    {
      id: 7,
      name: "James Brown",
      email: "james.b@example.com",
      username: "jamesb",
      role: "user",
      problems_solved: 134,
      join_date: "2023-03-22",
      last_active: "2023-05-12",
      status: "active",
    },
    {
      id: 8,
      name: "Sophia Martinez",
      email: "sophia.m@example.com",
      username: "sophiam",
      role: "user",
      problems_solved: 75,
      join_date: "2023-04-15",
      last_active: "2023-05-13",
      status: "active",
    },
    {
      id: 9,
      name: "William Garcia",
      email: "william.g@example.com",
      username: "williamg",
      role: "user",
      problems_solved: 42,
      join_date: "2023-04-30",
      last_active: "2023-05-10",
      status: "active",
    },
    {
      id: 10,
      name: "Ava Hernandez",
      email: "ava.h@example.com",
      username: "avah",
      role: "user",
      problems_solved: 18,
      join_date: "2023-05-05",
      last_active: "2023-05-15",
      status: "active",
    },
    {
      id: 11,
      name: "Ethan Smith",
      email: "ethan.s@example.com",
      username: "ethans",
      role: "user",
      problems_solved: 7,
      join_date: "2023-05-10",
      last_active: "2023-05-14",
      status: "active",
    },
    {
      id: 12,
      name: "Isabella Lopez",
      email: "isabella.l@example.com",
      username: "isabellal",
      role: "user",
      problems_solved: 0,
      join_date: "2023-05-14",
      last_active: "2023-05-14",
      status: "pending",
    },
  ];

  const [selectedUsers, setSelectedUsers] = useState([]);

  const columns = [
    {
      header: "Name",
      accessor: "name",
      render: (user) => (
        <div className="flex items-center gap-2">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-xs opacity-70">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      header: "Username",
      accessor: "username",
    },
    {
      header: "Role",
      accessor: "role",
      render: (user) => (
        <div className="badge badge-outline badge-sm">
          {user.role === "admin"
            ? "Admin"
            : user.role === "moderator"
            ? "Moderator"
            : "User"}
        </div>
      ),
    },
    {
      header: "Problems",
      accessor: "problems_solved",
    },
    {
      header: "Status",
      accessor: "status",
      render: (user) => (
        <div
          className={`badge badge-sm ${
            user.status === "active"
              ? "badge-success"
              : user.status === "inactive"
              ? "badge-warning"
              : "badge-info"
          }`}
        >
          {user.status}
        </div>
      ),
    },
    {
      header: "Joined",
      accessor: "join_date",
    },
  ];

  const handleEditUser = (user) => {
    console.log("Edit user:", user);
    // This would open a modal or navigate to an edit page
  };

  const handleDeleteUser = (user) => {
    if (confirm(`Are you sure you want to delete user ${user.name}?`)) {
      console.log("Delete user:", user);
      // This would call an API to delete the user
    }
  };

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">User Management</h1>
          <p className="text-base-content opacity-70">
            View, add, edit and manage user accounts on HypeCoding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Users</div>
              <div className="stat-value">{users.length}</div>
              <div className="stat-desc">
                {users.filter((u) => u.status === "active").length} active users
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">New Users</div>
              <div className="stat-value text-primary">+43</div>
              <div className="stat-desc">↗︎ Last 30 days</div>
            </div>
            <div className="stat">
              <div className="stat-title">Avg. Problems Solved</div>
              <div className="stat-value">
                {Math.round(
                  users.reduce((acc, user) => acc + user.problems_solved, 0) /
                    users.length
                )}
              </div>
              <div className="stat-desc">per user</div>
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
            <button className="btn btn-primary btn-sm">
              <UserPlus size={16} className="mr-1" />
              Add User
            </button>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={users}
          title="Users"
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      </div>
    </div>
  );
}
