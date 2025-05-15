import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";
import { useNavigate } from "react-router-dom";

const getUser = async () => {
  const res = await axiosClient.get(`/user/me`);
  return res.data.data;
};

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 60 * 1000,
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
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/login", { replace: true });
    },
  });
};
