import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApiSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth`,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => {
        return {
          url: "/signup",
          method: "POST",
          body: body,
          credentials: "include",
        };
      },
    }),
    login: builder.mutation({
      query: (body) => {
        console.log(" Calling");
        return {
          url: "/login",
          method: "POST",
          body: body,
          credentials: "include",
        };
      },
    }),
  }),
});
export const { useSignupMutation, useLoginMutation } = authApiSlice;
export default authApiSlice;
