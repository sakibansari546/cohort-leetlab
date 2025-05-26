import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";

const getSubmissionsCount = async () => {
  const res = await axiosClient.get(`/submission/submissions/count`);
  return res.data.data;
};
export const useGetSubmissionsCountQuery = () => {
  return useQuery({
    queryKey: ["submissions-count"],
    queryFn: getSubmissionsCount,
  });
};

const getSubmissions = async () => {
  const res = await axiosClient.get(`/submission/submissions/all`);
  return res.data.data;
};

export const useGetSubmissionsQuery = () => {
  return useQuery({
    queryKey: ["submissions"],
    queryFn: getSubmissions,
    select: (data) => ({
      ...data,
      submissions: data.submissions
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
    }),
    staleTime: 5 * 60 * 1000,
  });
};

const getSubmissionsForProblem = async (problemId) => {
  const res = await axiosClient.get(
    `/submission/submissions/problem/${problemId}`
  );
  return res.data.data;
};

export const useGetSubmissionsForProblemQuery = (id) => {
  return useQuery({
    queryKey: ["submissions", id],
    queryFn: () => getSubmissionsForProblem(id),
    staleTime: 5 * 60 * 1000,
    select: (data) => ({
      ...data,
      submissions: data.submissions
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ),
    }),
  });
};

const createSubmission = async (data, problemId) => {
  const res = await axiosClient.post(`/code/submit/${problemId}`, data);
  return res.data.data;
};

export const useCreateSubmissionMutation = (problemId) => {
  return useMutation({
    mutationKey: ["submission", problemId],
    mutationFn: (data) => createSubmission(data, problemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions", problemId] });
      queryClient.invalidateQueries({ queryKey: ["problems"] });
    },
  });
};

const getSubmissionById = async (submissionId) => {
  const res = await axiosClient.get(`/submission/submissions/${submissionId}`);
  return res.data.data;
};

export const useGetSubmissionById = (id) => {
  return useQuery({
    queryKey: ["submissions", id],
    queryFn: () => getSubmissionById(id),
  });
};
