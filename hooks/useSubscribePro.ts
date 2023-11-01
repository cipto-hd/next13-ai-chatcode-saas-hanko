import { create } from "zustand";

interface useSubscribeProStore {
  isPro: boolean;
  set: (value: boolean) => void;
}

export const useSubscribePro = create<useSubscribeProStore>((set) => ({
  isPro: false,
  set: (value) => set({ isPro: value }),
}));
