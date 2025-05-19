import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";
import { toast } from "react-toastify";

const getPlaylists = async () => {
  const res = await axiosClient.get(`/playlist/playlists`);
  return res.data.data;
};

export const useGetPlaylistsQuery = () => {
  return useQuery({
    queryKey: ["playlists"],
    queryFn: getPlaylists,
    staleTime: 5 * 60 * 1000,
  });
};

const createPlaylist = async (body) => {
  const res = await axiosClient.post(`/playlist/create`, body);
  return res.data.data;
};

export const useCreatePlaylistMutation = () => {
  return useMutation({
    mutationFn: createPlaylist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["playlists"] });
      toast.success("Playlist created successfully");
    },
  });
};

const addProblemInPlaylist = async (body) => {
  console.log(body);

  const res = await axiosClient.post(
    `/playlist/${body.playlistId}/add/problem`,
    {
      problemIds: body.problemIds,
    }
  );
  return res.data.data;
};

export const useAddProblemInPlaylistMutation = () => {
  return useMutation({
    mutationFn: addProblemInPlaylist,
    onSuccess: () => {
      toast.success("Problem Add Successfully");
      document.getElementById("add_problem_in_playlist_modal").close();
    },
  });
};
