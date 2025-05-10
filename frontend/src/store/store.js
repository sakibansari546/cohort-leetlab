import { configureStore } from "@reduxjs/toolkit";

// Reducers
import themeReducer from "./slices/theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
