import { create } from 'zustand';
type ThemeStore = {
    theme: string;
    setTheme: (val: string) => void;
    toggleTheme: () => void;
}
export const useTheme = create<ThemeStore>((set, get) => {
    return {
        //Khai báo state
        theme: 'light',
        setTheme(val: string) {
            set({ theme: val })
        },
        toggleTheme() {
            const current = get().theme;
            set({
                theme: current === 'light' ? 'dark' : 'light'
            })
        }
    }
});