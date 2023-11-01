import { create } from "zustand";

interface useApiLimitStore {
  apiLimitCount: number;
  set: (value: number) => void;
}

export const useApiLimit = create<useApiLimitStore>((set) => ({
  apiLimitCount: 0,
  set: (value) => set({ apiLimitCount: value }),
}));
