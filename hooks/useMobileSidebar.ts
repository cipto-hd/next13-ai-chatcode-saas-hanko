import { create } from "zustand";

interface useMobileSidebarStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useMobileSidebar = create<useMobileSidebarStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
}));
