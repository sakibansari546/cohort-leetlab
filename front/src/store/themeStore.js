import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("leetlab-theme") || "dark",
  setTheme: (theme) => {
    set({ theme: theme });
    localStorage.setItem("leetlab-theme", theme);
  },
}));
