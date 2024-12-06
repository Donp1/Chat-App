import { create } from "zustand";

export const useStore = create((set) => ({
  user: {},
  setUser: (newUser) => set({ user: newUser }),
}));
