import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
