import React from "react";
import { axiosClient } from "../../utils/axios";

import { toast } from "react-toastify";

import { setUser } from "../slices/auth";
import { useNavigate } from "react-router-dom";

const BASE_URL = `/api/v1/auth`;

export const handleSignupAndLogin = (body, type) => async (dispatch) => {
  //   const navigate = useNavigate();
  try {
    const res = await axiosClient.post(`${BASE_URL}/${type}`, body);
    console.log(res);
    if (res.data.success) {
      dispatch(
        setUser({ user: res.data.user, accessToken: res.data.accessToken })
      );
      toast.success(res.data.message);
      //   navigate("/");
    }
  } catch (error) {
    console.log(error);

    dispatch(setUser({ user: null, accessToken: "" }));
    toast.error(error.message || "Internal server error");
  }
};
