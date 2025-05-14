import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";

const getUser = async () => {
  const res = await axiosClient.get(`/user/me`);
  return res.data.data;
};

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
};

const signupAndLogin = async (body) => {
  const res = await axiosClient.post(`/auth/${body.type}`, { ...body });
  return res.data.data;
};

export const useSignupAndLoginMutation = () => {
  return useMutation({
    mutationFn: signupAndLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

const logout = async () => {
  const res = await axiosClient.post(`/auth/logout`);
  return res.data.data;
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
