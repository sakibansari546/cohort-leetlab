import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";

const getSubmissionsForProblem = async (problemId) => {
  const res = await axiosClient.get(`/submission/submissions/${problemId}`);
  return res.data.data;
};

export const useGetSubmissionsForProblemQuery = (id) => {
  return useQuery({
    queryKey: ["submissions", id],
    queryFn: () => getSubmissionsForProblem(id),
    staleTime: 5 * 60 * 1000,
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
    },
  });
};
