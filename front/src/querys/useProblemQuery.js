import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";

const getProblems = async () => {
  const res = await axiosClient.get(`/problem/problems`);
  return res.data.data;
};

export const useGetProblemsQuery = () => {
  return useQuery({
    queryKey: ["problems"],
    queryFn: getProblems,
    staleTime: 5 * 60 * 1000,
    select: (data) => ({
      ...data,
      problems: data.problems
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
    }),
  });
};

const getProblemById = async (id) => {
  const res = await axiosClient.get(`/problem/${id}`);
  return res.data.data;
};

export const useGetProblemByIdQuery = (id) => {
  return useQuery({
    queryKey: ["problem", id],
    queryFn: () => getProblemById(id),
    staleTime: 5 * 60 * 1000,
  });
};

const getSolvedProblems = async () => {
  const res = await axiosClient.get(`/problem/problems/solved`);
  return res.data.data;
};

export const useGetSolvedProblemsQuery = () => {
  return useQuery({
    queryKey: ["solved-problems"],
    queryFn: getSolvedProblems,
    staleTime: 5 * 60 * 1000,
  });
};

const getProblemsCount = async () => {
  const res = await axiosClient.get(`/problem/problems/count`);
  return res.data.data;
};
export const useGetProblemsCountQuery = () => {
  return useQuery({
    queryKey: ["problems-count"],
    queryFn: getProblemsCount,
    staleTime: 5 * 60 * 1000,
  });
};

const getSolvedProblemsCount = async () => {
  const res = await axiosClient.get(`/problem/problems/solved/count`);
  return res.data.data;
};

export const useGetSolvedProblemsCountQuery = () => {
  return useQuery({
    queryKey: ["solved-problems-count"],
    queryFn: getSolvedProblemsCount,
    staleTime: 5 * 60 * 1000,
  });
};
