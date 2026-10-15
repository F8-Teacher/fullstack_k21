import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function Nav() {
  const { user, isLoading, isAuthenticated, logout } = useUser();
  return (
    <nav className="mx-auto mb-3 py-3 border-gray-200 border-b max-w-300">
      <ul className="flex items-center gap-3">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <ul className="flex gap-3 ml-auto">
          {isLoading ? (
            <li>Loading...</li>
          ) : isAuthenticated ? (
            <>
              <li>Chào: {user.name}</li>
              <li
                className="text-red-600 cursor-pointer"
                onClick={() => logout("/login")}
              >
                Logout
              </li>
            </>
          ) : (
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </ul>
    </nav>
  );
}
