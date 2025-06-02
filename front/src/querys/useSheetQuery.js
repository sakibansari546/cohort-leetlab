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
    queryKey: ["sheets"],
    queryFn: getSheets,
  });
};
