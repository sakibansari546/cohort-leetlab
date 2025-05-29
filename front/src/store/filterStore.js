import { create } from "zustand";

export const useFilterStore = create((set) => ({
  problemsFilter: {},

  setProblemsFilter: (filter = {}) => {
    set({ problemsFilter: filter });
  },
}));
