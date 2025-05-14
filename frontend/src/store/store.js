import { configureStore } from "@reduxjs/toolkit";

// Reducers
import themeReducer from "./slices/theme";
import authReducer from "./slices/auth";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});
