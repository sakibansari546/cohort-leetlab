import {
  Book,
  Dot,
  Edit,
  Ellipsis,
  EllipsisVertical,
  File,
  FileText,
  Filter,
  Loader,
  Loader2,
  Play,
  Plus,
  RefreshCcw,
  SortAsc,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useGetUserQuery } from "../querys/useUserQuery";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddToPlaylistProblemModal from "./AddToPlaylistProblemModal";
import {
  useDeletePlaylistMutation,
  useRemoveProblemInPlaylistMutation,
} from "../querys/usePlaylistQuery";
import EditPlaylistModal from "./EditPlaylistModal";
import AddProblemsInPlaylistModal from "./AddProblemsInPlaylistModal";

const PlaylistDetails = ({ playlist, isPending, isError, error }) => {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const { data } = useGetUserQuery();
  const problems = playlist?.problems;
  const [problemId, setProblemId] = useState([]);

  const removeProblemMutation = useRemoveProblemInPlaylistMutation(
    playlist?.id
  );

  const solvedProblemCount = problems?.reduce((count, problem) => {
    const isSolved = problem.problem.solvedBy?.some(
      (s) => s.userId === data?.user?.id
    );
    console.log(problem.problem);

    return isSolved ? count + 1 : count;
  }, 0);

  const deletePlaylistMutation = useDeletePlaylistMutation(playlist?.id);

  const handleAddProblemInPlaylist = (problemId) => {
    document.getElementById("add_problem_in_playlist_modal").showModal();
    setProblemId([problemId]);
  };
  const handleRemoveProblemInPlaylist = (selectedProblemId) => {
    setProblemId([selectedProblemId]);
    removeProblemMutation.mutate({
      playlistId: playlistId,
      problemIds: selectedProblemId ? [selectedProblemId] : [],
    });
  };

  const handleDeletePlaylist = () => {
    deletePlaylistMutation.mutate();
  };

  const difficultyCounts = problems?.reduce(
    (acc, curr) => {
      const diff = curr?.problem?.difficulty;
      if (diff) {
        acc[diff] = (acc[diff] || 0) + 1;
      }
      return acc;
    },
    { EASY: 0, MEDIUM: 0, HARD: 0 }
  );

  useEffect(() => {
    if (deletePlaylistMutation.isSuccess) navigate("/problems");
  }, [deletePlaylistMutation.isSuccess, navigate]);

  if (isPending) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <span className="loading loading-spinner text-4xl loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex items-center justify-center py-20">
        <span className="text-error text-lg">
          {error?.response?.data?.message ||
            "An error occurred while loading the playlist."}
        </span>
      </div>
    );
  }
  return (
    <div className="w-[100vw] overflow-x-auto ">
      <AddToPlaylistProblemModal problemId={problemId} />
      <EditPlaylistModal playlist={playlist} />
      <AddProblemsInPlaylistModal playlist={playlist} />

      <div className="w-full  py-8 px-14 flex gap-16">
        <div className="w-[400px] max-h-[600px] bg-base-content/10 py-3 px-4 rounded-lg">
          <div>
            <div>
              <FileText size="100" />
            </div>
            <div className="py-4 flex flex-col gap-3 px-3">
              <div>
                <h2 className="text-2xl font-bold">{playlist?.name}</h2>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-base-content/90">{data?.user?.fullname}</p>
                <p className="text-base-content/90">
                  · {problems?.length || 0} questions
                </p>
              </div>
              <div className="flex items-center gap-6 py-3 ">
                <Link
                  to={`/problems/${problems[0]?.problem?.id}`}
                  className="btn btn-primary"
                >
                  <Play size="18" /> Practice
                </Link>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      document
                        .getElementById("add_problems_in_playlist")
                        .showModal()
                    }
                    className="btn btn-circle"
                  >
                    <Plus size="18" />
                  </button>
                  <button className="btn btn-circle">
                    <Edit size="18" />
                  </button>
                  <div>
                    <div className="dropdown dropdown-center">
                      <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-circle"
                      >
                        <EllipsisVertical size="18" />
                      </button>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        <li>
                          <button
                            onClick={() => {
                              document
                                .getElementById("edit_playlist_modal")
                                .showModal();
                            }}
                          >
                            Edit playlist
                          </button>
                        </li>
                        <li>
                          <button
                            disabled={deletePlaylistMutation.isPending}
                            onClick={handleDeletePlaylist}
                          >
                            {deletePlaylistMutation.isPending
                              ? "Loading..."
                              : "Delete Playlist"}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-base-content/80">{playlist?.description}</p>
              </div>
            </div>
          </div>
          <div className="divider my-1"></div>
          <div>
            <div className="py-2 flex items-center justify-between pr-2">
              <p className="text-lg font-semibold">Progress</p>
              <button className="btn btn-circle btn-sm">
                <RefreshCcw size="16" />
              </button>
            </div>
            <div className="w-full flex items-center gap-2.5 pb-4">
              <div className="w-[60%] h-38 bg-base-200/40">
                <div className="bg-base-300 rounded-lg p-4 md:col-span-2 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <div className="text-4xl font-bold">
                        {solvedProblemCount || 0}
                        <span className="text-lg opacity-50">
                          /{problems?.length}
                        </span>
                      </div>
                      <div className="text-sm opacity-70">Solved</div>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-38 ">
                <div className="space-y-2">
                  <div className="bg-base-300 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-success text-sm">Easy</span>
                      <span className="text-sm">{difficultyCounts.EASY}</span>
                    </div>
                  </div>
                  <div className="bg-base-300 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-warning text-sm">Med.</span>
                      <span className="text-sm">{difficultyCounts.MEDIUM}</span>
                    </div>
                  </div>
                  <div className="bg-base-300 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-error text-sm">Hard</span>
                      <span className="text-sm"> {difficultyCounts.HARD}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8">
          {/* Search Bar */}
          <div className="w-full h-10 flex items-center justify-between ">
            <div>
              <label className="input rounded-4xl w-64">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn btn-circle">
                <SortAsc size="18" />
              </button>
              <button className="btn btn-circle">
                <Filter size="18" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 min-h-[80vh]">
            {/* All Problems */}
            <div className="">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  {problems.length === 0 || !problems ? (
                    <tr className="bg-base-200 text-center w-full">
                      <td className="text-lg font-semibold">
                        No Ptoblem to show
                      </td>
                    </tr>
                  ) : (
                    problems?.map(({ problem }, idx) => (
                      <tr
                        key={problem.id}
                        className={` ${
                          idx % 2 == 0 && "bg-base-200"
                        } rounded-xl`}
                      >
                        <td className="w-8">{idx + 1}</td>
                        <td className="font-medium ">
                          <Link
                            to={`/problems/${problem.id}`}
                            className="hover:underline"
                          >
                            <span className="line-clamp-2 break-words max-w-xs">
                              {problem.title}
                            </span>
                          </Link>
                        </td>
                        <td className="text-right">55.6%</td>
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
                        <td>
                          <div className="w-24 bg-base-200 rounded-full h-2">
                            <div
                              className="bg-success h-2 rounded-full"
                              style={{ width: "55%" }}
                            ></div>
                          </div>
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
                                <button
                                  disabled={removeProblemMutation.isPending}
                                  onClick={() =>
                                    handleRemoveProblemInPlaylist(problem.id)
                                  }
                                >
                                  {removeProblemMutation.isPending ? (
                                    <>
                                      <Loader2
                                        size="18"
                                        className="animate-spin"
                                      />
                                    </>
                                  ) : (
                                    "Remove from playlist"
                                  )}
                                </button>
                              </li>
                            </ul>
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
    </div>
  );
};

export default PlaylistDetails;
