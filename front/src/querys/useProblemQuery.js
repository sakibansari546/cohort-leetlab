import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";
import { toast } from "react-toastify";

const getProblems = async (filters) => {
  const res = await axiosClient.get(
    `/problem/problems?search=${filters.search}&tags=${filters.tags}&difficulty=${filters.difficulty}&company=${filters.companies}`
  );
  return res.data.data;
};

export const useGetProblemsQuery = (filters) => {
  return useQuery({
    queryKey: ["problems", filters],
    queryFn: () => getProblems(filters),
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

const deleteProblem = async ({ problemId }) => {
  const res = await axiosClient.delete(`/problem/${problemId}/delete`);
  return res.data.data;
};

export const useDeleteProblemMutation = () => {
  return useMutation({
    mutationFn: deleteProblem,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["problems"] });
      toast.success(data.message || "Problem deleted successfully");
    },
    onError: (err) => {
      toast.success(err.response?.data?.message || "Something went wrong");
    },
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
