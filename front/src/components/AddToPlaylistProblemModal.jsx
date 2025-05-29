import React, { useState } from "react";
import {
  useAddProblemInPlaylistMutation,
  useGetPlaylistsQuery,
} from "../querys/usePlaylistQuery";

const AddToPlaylistProblemModal = ({ problemId }) => {
  const { data } = useGetPlaylistsQuery();
  const playlists = data?.playlists;
  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");

  const mutation = useAddProblemInPlaylistMutation(selectedPlaylistId);

  const handleSelectChange = (e) => {
    setSelectedPlaylistId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ playlistId: selectedPlaylistId, problemIds: problemId });
  };

  return (
    <dialog id="add_problem_in_playlist_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Add problem in playlist</h3>
        <form method="dialog" className="space-y-8" onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <div className="w-full">
              <select
                value={selectedPlaylistId}
                onChange={handleSelectChange}
                className="select select-neutral w-full"
                disabled={mutation.isPending}
              >
                <option value="" disabled>
                  Select Playlist
                </option>
                {playlists?.map((playlist) => (
                  <option key={playlist.id} value={playlist.id}>
                    {playlist.name}
                  </option>
                ))}
              </select>
            </div>
            {mutation.isError && (
              <p className="py-2 text-error">
                {mutation.error?.response?.data?.message ||
                  "Something went wrong"}
              </p>
            )}
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() =>
                document.getElementById("add_problem_in_playlist_modal").close()
              }
              disabled={mutation.isPending}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={mutation.isPending || !selectedPlaylistId}
            >
              {mutation.isPending ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                "Add Problem"
              )}
            </button>
            <button
              onClick={() =>
                document.getElementById("add_problem_in_playlist_modal").close()
              }
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              disabled={mutation.isPending}
            >
              ✕
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default AddToPlaylistProblemModal;
