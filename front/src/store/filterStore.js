import { create } from "zustand";

export const useFilterStore = create((set) => ({
  problemsFilter: {
    search: "",
    tags: "",
    difficulty: "",
    companies: "",
  },


  setProblemsFilter: (filter = {}) => {
    set({ problemsFilter: filter });
  },
}));
