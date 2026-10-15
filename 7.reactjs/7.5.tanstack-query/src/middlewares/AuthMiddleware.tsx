import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function AuthMiddleware() {
  const { isAuthenticated, isLoading } = useUser();
  if (isLoading) {
    return;
  }
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
}
