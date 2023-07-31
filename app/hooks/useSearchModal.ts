import { create } from "zustand";

interface SeacrhModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSearchModal = create<SeacrhModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
