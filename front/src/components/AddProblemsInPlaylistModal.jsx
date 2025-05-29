import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProblemsQuery } from "../querys/useProblemQuery";
import { useAddProblemInPlaylistMutation } from "../querys/usePlaylistQuery";
import { Loader2 } from "lucide-react";
import { useFilterStore } from "../store/filterStore";

const AddProblemsInPlaylistModal = ({ playlist }) => {
  const { problemsFilter } = useFilterStore();

  const { data, isPending, isError, error } =
    useGetProblemsQuery(problemsFilter);
  const problems = data?.problems;

  const [problemIds, setProblemIds] = useState([]);

  const mutation = useAddProblemInPlaylistMutation(playlist.id);

  const handleInputChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setProblemIds((prev) => [...prev, value]);
    } else {
      setProblemIds((prev) => prev.filter((id) => id !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ playlistId: playlist?.id, problemIds });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      document.getElementById("add_problems_in_playlist").close();
      setProblemIds([]);
    }
  }, [mutation.isSuccess]);


  if (isError) {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full max-w-md text-center shadow">
          <strong className="font-bold">Error:</strong>{" "}
          <span>{error?.message || "Failed to load problems."}</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <dialog id="add_problems_in_playlist" className="modal">
        <div className="modal-box w-11/12 max-w-5xl h-[75vh]">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg mb-4">Add problems in playlist</h3>
            <button
              onClick={() =>
                document.getElementById("add_problems_in_playlist").close()
              }
              type="button"
              className="btn btn-sm btn-circle btn-ghost"
            >
              ✕
            </button>
          </div>
          {isPending ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="loading"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} method="dialog" className="space-y-8">
              <div className="w-full h-[55vh] overflow-y-auto py-2 px-2">
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        {/* <label>
                        <input type="checkbox" className="checkbox" />
                      </label> */}
                      </th>
                      <th>Title</th>
                      <th>Difficulty</th>
                      <th>Progress</th>
                    </tr>
                  </thead>

                  <tbody key="problem-tbody">
                    {isPending ? (
                      <>
                        <tr className="flex items-center justify-center w-full">
                          <td className="loading loading-ring loading-xl"></td>
                        </tr>
                      </>
                    ) : problems?.length === 0 ? (
                      <>
                        <tr>
                          <td>
                            <h1>No Problems Found!</h1>
                          </td>
                        </tr>
                      </>
                    ) : (
                      problems?.map((problem, idx) => (
                        <tr className="bg-base-200" key={problem.id || idx}>
                          <th>
                            <label>
                              <input
                                onChange={handleInputChange}
                                value={problem.id}
                                type="checkbox"
                                className="checkbox"
                              />
                            </label>
                          </th>
                          <td className="font-medium ">
                            <span className="line-clamp-2 break-words max-w-xs">
                              {problem.title}
                            </span>
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
                          <td className="text-">{problem.progress || "0%"}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {mutation.isError && (
                <div>
                  <p className="text-red-500 w-[80%]">
                    {mutation.error?.response?.data?.message}
                  </p>
                </div>
              )}
              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    document.getElementById("add_problems_in_playlist").close()
                  }
                >
                  Cancel
                </button>
                <button
                  disabled={mutation.isPending}
                  type="submit"
                  className="btn btn-primary"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 size="18" /> <span>Loading</span>
                    </>
                  ) : (
                    "Add Problems"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default AddProblemsInPlaylistModal;
