import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../../utils/axios";
import { queryClient } from "../../main";

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
