import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";

const runCode = async (data, problemId) => {
  const res = await axiosClient.post(`/code/run/${problemId}`, data);
  return res.data.data;
};

export const useRunCodeMutation = (problemId) => {
  return useMutation({
    mutationKey: ["execution", problemId],
    mutationFn: (data) => runCode(data, problemId),
  });
};
