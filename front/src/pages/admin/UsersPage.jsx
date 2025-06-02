"use client";
import {
  UserPlus,
  Upload,
  Download,
  Search,
  Edit,
  Trash2,
  EllipsisVertical,
  Loader2,
} from "lucide-react";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../querys/useAdminQuery";
import { formateDate } from "../../utils/date-formate";

export default function UsersPage() {
  const { data, isPending, isError, error } = useGetUsersQuery();
  const users = data?.users;

  const { mutateAsync, isPending: deleteIsPending } = useDeleteUserMutation();

  const handleUserDelete = async (userId) => {
    await mutateAsync({ userId: userId });
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
          <h1 className="text-3xl font-bold mb-2">User Management</h1>
          <p className="text-base-content opacity-70">
            View, add, edit and manage user accounts on HypeCoding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Users</div>
              <div className="stat-value">{users?.length}</div>
              <div className="stat-desc">active users</div>
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
                  users?.reduce(
                    (accu, user) =>
                      (accu +=
                        user.solvedProblems.length !== 0
                          ? user.solvedProblems.length
                          : 0),
                    0
                  ) / users?.length
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
      </div>

      <div className="flex items-center justify-between px-6 ">
        <h2 className="text-xl font-medium">Users</h2>
        <div>
          <label className="input w-68">
            <Search />
            <input type="text" placeholder="Search" id="" />
          </label>
        </div>
      </div>

      <div className="py-10">
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Solved Problems</th>
                  <th>Is Verified</th>
                  <th>Status</th>
                  <th>joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {isPending ? (
                  <div className="absolute top-1/2 left-1/2">
                    <div className="loading text-lg"></div>
                  </div>
                ) : users.lenght === 0 ? (
                  <div className="absolute top-1/2 left-1/2">
                    <div className="text-lg">No Users found</div>
                  </div>
                ) : (
                  users?.map((user) => (
                    <tr key={user.id}>
                      <th>
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src={user.profileImage}
                          alt=""
                        />
                      </th>
                      <td>
                        <p className="text-lg">{user.fullname}</p>
                        <p className="text-base-content/80">{user.email}</p>
                      </td>
                      <td>@{user.username || "username"}</td>
                      <td>
                        <span className="badge badge-ghost">{user.role}</span>
                      </td>
                      <td>{user.solvedProblems.length}</td>
                      <td>{user.isEmailVerified ? "True" : "False"}</td>
                      <td>
                        {user.isActive ? (
                          <span className="badge badge-success">Active</span>
                        ) : (
                          <span className="badge badge-error">InActive</span>
                        )}
                      </td>
                      <td>{formateDate(user.createdAt).split("-")[0]}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="dropdown dropdown-end">
                            <button
                              tabIndex={0}
                              role="button"
                              className="btn btn-sm"
                            >
                              <EllipsisVertical size="16" />
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
                                  onClick={() => handleUserDelete(user.id)}
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
