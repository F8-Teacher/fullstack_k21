import { create } from "zustand";
type AuthStore = {
    isAuth: boolean;
    setAuth: () => void;
    setLogout: () => void;
}
export const useAuthStore = create<AuthStore>((set) => ({
    isAuth: false,
    setAuth() {
        set({ isAuth: true })
    },
    setLogout() {
        set({ isAuth: false })
    },
}))