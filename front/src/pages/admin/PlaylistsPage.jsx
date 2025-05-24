"use client";
import { Link } from "react-router-dom";
import DataTable from "../../components/admin/DataTable";
import {
  ListPlus,
  Upload,
  Download,
  Search,
  EllipsisVertical,
  Edit,
  Trash2,
  Ellipsis,
  Loader2,
} from "lucide-react";
import {
  useDeletePlaylistMutation,
  useGetPlaylistsQuery,
} from "../../querys/useAdminQuery";
import { formateDate } from "../../utils/date-formate";

export default function PlaylistsPage() {
  const { data, isPending, isError, error } = useGetPlaylistsQuery();
  const playlists = data?.playlists;

  const { mutateAsync, isPending: deleteIsPending } =
    useDeletePlaylistMutation();

  const handleDeletePlaylist = async (playlistId) => {
    await mutateAsync({ playlistId });
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
          <h1 className="text-3xl font-bold mb-2">Playlist Management</h1>
          <p className="text-base-content opacity-70">
            View, add, edit and manage problem playlists on HypeCoding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Playlists</div>
              <div className="stat-value">{playlists?.length}</div>
              <div className="stat-desc">
                {playlists?.reduce(
                  (accu, playlist) => (accu += playlist.isPrivate ? 1 : 0),
                  0
                )}{" "}
                Private,{" "}
                {playlists?.reduce(
                  (accu, playlist) =>
                    (accu += playlist.user?.role == "USER" ? 1 : 0),
                  0
                )}{" "}
                user-created
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Total Views</div>
              <div className="stat-value text-primary">56</div>
              <div className="stat-desc">All time</div>
            </div>
            <div className="stat">
              <div className="stat-title">Avg. Problems</div>
              <div className="stat-value">
                {Math.round(
                  playlists?.reduce(
                    (accu, playlist) =>
                      (accu += playlist.problems?.length ?? 0),
                    0
                  ) / playlists?.length
                )}
              </div>
              <div className="stat-desc">per playlist</div>
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
              <ListPlus size={16} className="mr-1" />
              Create Playlist
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 ">
          <h2 className="text-xl font-medium">Playlists</h2>
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
                <th>Name</th>
                <th>Creator</th>
                <th>Problems</th>
                <th>Last Updated</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isPending ? (
                <td className="absolute top-1/2 left-1/2">
                  <span className="loading text-lg"></span>
                </td>
              ) : playlists.lenght === 0 ? (
                <td className="absolute top-1/2 left-1/2">
                  <span className="text-lg">No Playlits found</span>
                </td>
              ) : (
                playlists?.map((playlist) => (
                  <tr key={playlist.id}>
                    <td className="font-medium ">
                      <Link
                        to={`/playlists/${playlist.id}`}
                        className="hover:underline text-primary"
                      >
                        <span className="line-clamp-2 break-words max-w-xs">
                          {playlist.name}
                        </span>
                      </Link>
                    </td>
                    <td>
                      {playlist.user?.role == "ADMIN"
                        ? "ADMIN"
                        : playlist.user?.fullname}
                    </td>
                    <td>{playlist.problems.length || 0}</td>
                    <td>{formateDate(playlist.updatedAt).split("-")[0]}</td>
                    <td>
                      <span className="badge badge-success">
                        {playlist.isPrivate ? "Private" : "Public"}
                      </span>
                    </td>
                    <td>
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
                                    handleDeletePlaylist(playlist.id)
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
