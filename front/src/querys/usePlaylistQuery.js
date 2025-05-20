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
    select: (data) => ({
      ...data,
      playlists: data.playlists
        .slice() // clone original array
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
    }),
  });
};
const getPlaylistById = async (playlistId) => {
  const res = await axiosClient.get(`/playlist/${playlistId}`);
  return res.data.data;
};

export const useGetPlaylistByIdQuery = (playlistId) => {
  return useQuery({
    queryKey: ["playlists", playlistId],
    queryFn: () => getPlaylistById(playlistId),
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
  const res = await axiosClient.post(
    `/playlist/${body.playlistId}/add/problem`,
    {
      problemIds: body.problemIds,
    }
  );
  return res.data.data;
};

export const useAddProblemInPlaylistMutation = (playlistId) => {
  return useMutation({
    mutationFn: addProblemInPlaylist,
    onSuccess: () => {
      toast.success("Problem Add Successfully");
      document.getElementById("add_problem_in_playlist_modal").close();
      queryClient.invalidateQueries({ queryKey: ["playlists", playlistId] });
    },
  });
};

const removeProblemInPlaylist = async (body) => {
  console.log(body.problemIds);
  const res = await axiosClient.delete(
    `/playlist/${body.playlistId}/remove/problem`,
    {
      data: {
        problemIds: body.problemIds,
      },
    }
  );
  return res.data.data;
};

export const useRemoveProblemInPlaylistMutation = (playlistId) => {
  return useMutation({
    mutationFn: removeProblemInPlaylist,
    onSuccess: () => {
      toast.success("Problem remove Successfully");
      queryClient.invalidateQueries({ queryKey: ["playlists", playlistId] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong");
    },
  });
};

const editPlaylist = async (body, playlistId) => {
  const res = await axiosClient.put(`/playlist/${playlistId}/edit`, body);
  return res.data.data;
};

export const useEditPlaylistMutation = (playlistId) => {
  return useMutation({
    mutationFn: (data) => editPlaylist(data, playlistId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["playlists", playlistId] });
      toast.success(data?.message || "Playlist Edit successfully");
    },
  });
};

const deletePlaylist = async (playlistId) => {
  const res = await axiosClient.delete(`/playlist/${playlistId}/delete`);
  return res.data.data;
};

export const useDeletePlaylistMutation = (playlistId) => {
  return useMutation({
    mutationFn: () => deletePlaylist(playlistId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["playlists"] });
      toast.success(data?.message || "Playlist delete successfully");
    },
    onError: (error) => {
      toast.success(error?.response?.data?.message || "Something went wrong");
    },
  });
};
