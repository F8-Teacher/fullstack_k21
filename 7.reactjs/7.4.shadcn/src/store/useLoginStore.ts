import { create } from "zustand";
type LoginStore = {
    open: boolean;
    setOpen: () => void;
    setClose: () => void;
    toggle: () => void;
}
export const useLoginStore = create<LoginStore>((set, get) => ({
    open: false,
    setOpen() {
        set({ open: true })
    },
    setClose() {
        set({ open: false })
    },
    toggle() {
        set({ open: !get().open })
    },
}))