import { useMutation, useQuery } from "@tanstack/react-query";

import { axiosClient } from "../utils/axios";
import { queryClient } from "../main";
import { toast } from "react-toastify";

const getSheets = async () => {
  const res = await axiosClient.get("/sheet/all");
  return res.data.data;
};

export const useGetSheetsQUery = () => {
  return useQuery({
    queryKey: ["all-sheets"],
    queryFn: getSheets,
  });
};

const getSheetById = async (sheetId) => {
  const res = await axiosClient.get(`/sheet/${sheetId}`);
  return res.data.data;
};
export const useGetSheetByIdQuery = (id) => {
  return useQuery({
    queryKey: ["sheets", id],
    queryFn: () => getSheetById(id),
  });
};

const getSheetFreeDetailsById = async (sheetId) => {
  const res = await axiosClient.get(`/sheet/${sheetId}/free/details`);
  return res.data.data;
};
export const useGetSheetFreeDetailsByIdQuery = (id) => {
  return useQuery({
    queryKey: ["sheets-free", id],
    queryFn: () => getSheetFreeDetailsById(id),
  });
};

const getUserSheets = async () => {
  const res = await axiosClient.get("/sheet/sheets");
  return res.data.data;
};

export const useGetUserSheetsQuery = () => {
  return useQuery({
    queryKey: ["sheets"],
    queryFn: getUserSheets,
  });
};
