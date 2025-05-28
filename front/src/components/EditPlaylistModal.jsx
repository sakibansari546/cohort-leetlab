import React, { useEffect } from "react";
import { useEditPlaylistMutation } from "../querys/usePlaylistQuery";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createPlaylistSchema } from "../utils/zod-schema";
import { Loader2 } from "lucide-react";

const EditPlaylistModal = ({ playlist }) => {
  const mutation = useEditPlaylistMutation(playlist.id);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createPlaylistSchema),
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  useEffect(() => {
    if (mutation.isSuccess) {
      document.getElementById("edit_playlist_modal").close();
    }
  }, [mutation.isSuccess, reset]);

  return (
    <dialog id="edit_playlist_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Update Playlist</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="form-control mb-4">
            <label htmlFor="playlist-name" className="label">
              <span className="label-text mb-2">Name</span>
            </label>
            <input
              defaultValue={playlist?.name}
              {...register("name")}
              id="playlist-name"
              type="text"
              name="name"
              placeholder="Enter playlist name"
              className="input input-bordered w-full"
              maxLength={30}
              required
            />
          </div>
          <div className="form-control mb-4">
            <label htmlFor="playlist-desc" className="label">
              <span className="label-text mb-2">Description</span>
            </label>
            <div className="w-full">
              <textarea
                defaultValue={playlist?.description}
                {...register("description")}
                id="playlist-desc"
                name="description"
                className="textarea w-full"
                placeholder="Enter playlist description"
              ></textarea>
            </div>
          </div>
          {errors && (
            <div>
              <p className="text-red-500 w-[80%]">
                {errors?.name
                  ? errors.name?.message
                  : errors.description && errors.description?.message}
                {mutation.isError && mutation.error?.response?.data?.message}
              </p>
            </div>
          )}
          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() =>
                document.getElementById("edit_playlist_modal").close()
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
                "Update"
              )}
            </button>
            <button
              onClick={() =>
                document.getElementById("edit_playlist_modal").close()
              }
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default EditPlaylistModal;
