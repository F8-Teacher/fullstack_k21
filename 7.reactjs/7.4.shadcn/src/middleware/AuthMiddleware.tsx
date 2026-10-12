import { useAuthStore } from "@/store/useAuthStore";

import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthMiddleware() {
  const { isAuth } = useAuthStore();
  const { pathname } = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?continue=${pathname}`} replace={true} />
  );
}
