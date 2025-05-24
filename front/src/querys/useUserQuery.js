import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

const signupAndLogin = async (body, type) => {
  const res = await axiosClient.post(`/auth/${type}`, body);
  return res.data.data;
};

export const useSignupAndLoginMutation = (type) => {
  return useMutation({
    mutationFn: (data) => signupAndLogin(data, type),
    onSuccess: () => {
      if (type === "login") {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
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

export const updateUserBasicInfo = async (body) => {
  const res = await axiosClient.patch(`/user/update/basic/info`, body);
  return res.data.data;
};

export const useUpdateUserBasicInfoMutation = () => {
  return useMutation({
    mutationFn: updateUserBasicInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const updateUserProfileImage = async (body) => {
  console.log(body);

  const res = await axiosClient.patch(`/user/update/profile-image`, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data.data;
};

export const useUpdateUserProfileImageMutation = () => {
  return useMutation({
    mutationFn: updateUserProfileImage,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(data.message || "Profile image updated successfully");
    },
  });
};
