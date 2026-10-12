import Nav from "@/components/Nav";
import { useTheme } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const { theme } = useTheme();
  useEffect(() => {
    const htmlEl = document.querySelector("html");
    htmlEl?.classList.add(theme);
    if (theme === "dark") {
      htmlEl?.classList.remove("light");
    } else {
      htmlEl?.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="flex gap-3">
      <Nav />
      <div className="flex-1 p-3">
        <Outlet />
      </div>
    </div>
  );
}
