import { configureStore } from "@reduxjs/toolkit";

// Reducers
import themeReducer from "./slices/theme";
import authApiSlice from "./slices/apiSlice/authApiClice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});
