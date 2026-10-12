import { useTheme } from "@/store/useThemeStore";
import { changeTheme } from "@/utils/utils";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <button onClick={toggleTheme}>Toggle theme: {theme}</button>
      <button onClick={changeTheme}>Click me</button>
    </div>
  );
}
