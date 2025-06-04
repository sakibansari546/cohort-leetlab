import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";
import { toast } from "react-toastify";

const getUsersCount = async () => {
  const res = await axiosClient.get("/admin/users/count");
  return res.data.data;
};

export const useGetUsersCount = () => {
  return useQuery({
    queryKey: ["users", "count"],
    queryFn: getUsersCount,
    staleTime: Infinity,
  });
};
const getProblemsCount = async () => {
  const res = await axiosClient.get("/admin/problems/count");
  return res.data.data;
};

export const useGetProblemsCount = () => {
  return useQuery({
    queryKey: ["problems", "count"],
    queryFn: getProblemsCount,
    staleTime: Infinity,
  });
};
const getPlaylistsCount = async () => {
  const res = await axiosClient.get("/admin/playlists/count");
  return res.data.data;
};

export const useGetPlaylistsCount = () => {
  return useQuery({
    queryKey: ["playlists", "count"],
    queryFn: getPlaylistsCount,
    staleTime: Infinity,
  });
};
const getSubmissionsCount = async () => {
  const res = await axiosClient.get("/admin/submissions/count");
  return res.data.data;
};

export const useGetSubmissionsCount = () => {
  return useQuery({
    queryKey: ["submissions", "count"],
    queryFn: getSubmissionsCount,
    staleTime: Infinity,
  });
};

const getUsers = async () => {
  const res = await axiosClient.get("/admin/users");
  return res.data.data;
};

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

const deleteUser = async ({ userId }) => {
  const res = await axiosClient.delete(`/admin/user/${userId}/delete`);
  return res.data.data;
};

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationFn: (data) => deleteUser(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success(data.message || "User deleted successfully!");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
};

const getPlaylists = async () => {
  const res = await axiosClient.get("/admin/playlists");
  return res.data.data;
};

export const useGetPlaylistsQuery = () => {
  return useQuery({
    queryKey: ["playlists", "admin"],
    queryFn: getPlaylists,
  });
};

const deletePlaylist = async ({ playlistId }) => {
  const res = await axiosClient.delete(`/admin/playlist/${playlistId}/delete`);
  return res.data.data;
};

export const useDeletePlaylistMutation = () => {
  return useMutation({
    mutationFn: (data) => deletePlaylist(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["playlists", "admin"] });
      toast.success(data.message || "Playlist deleted successfully!");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "somehting went worng");
    },
  });
};

const getSubmissions = async () => {
  const res = await axiosClient.get("/admin/submissions");
  return res.data.data;
};

export const useGeSubmissionsQuery = () => {
  return useQuery({
    queryKey: ["submissions", "admin"],
    queryFn: getSubmissions,
  });
};

const deleteSubmission = async ({ submissionId }) => {
  const res = await axiosClient.delete(
    `/admin/submission/${submissionId}/delete`
  );
  return res.data.data;
};

export const useDeleteSubmissionMutation = () => {
  return useMutation({
    mutationFn: (data) => deleteSubmission(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["submissions", "admin"] });
      toast.success(data.message || "Submission deleted successfully!");
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "somehting went worng");
    },
  });
};

export const createProblem = async (body) => {
  const res = await axiosClient.post(`/problem/create`, body);
  return res.data.data;
};

export const useCreateProblemMutation = () => {
  return useMutation({
    mutationFn: createProblem,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: "problems" });
      toast.success(data.message || "Problem created successfully");
    },
  });
};

const createSheet = async (data) => {
  const res = await axiosClient.post(`/sheet/create`, data);
  return res.data.data;
};

export const useCreateSheetMutation = () => {
  return useMutation({
    mutationFn: createSheet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-sheets"] });
      toast.success("Sheet Created Successfully!");
    },
  });
};

const getAllSheets = async () => {
  const res = await axiosClient.get(`/sheet/all`);
  return res.data.data;
};

export const useGetAllSheetsQuery = () => {
  return useQuery({
    queryKey: ["all-sheets"],
    queryFn: getAllSheets,
  });
};

const deteleSheet = async ({ sheetId }) => {
  const res = await axiosClient.delete(`/sheet/${sheetId}/delete`);
  return res.data.data;
};

export const useDeleteSheetMuatation = () => {
  return useMutation({
    mutationFn: deteleSheet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-sheets"] });
      toast.success("Sheet deleted successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message || "Something went wrong");
    },
  });
};
