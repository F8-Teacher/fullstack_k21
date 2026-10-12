import { AppContext } from "@/components/AppContext";
import { use } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthMiddleware() {
  const { isAuth } = use(AppContext);
  const { pathname } = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?continue=${pathname}`} replace={true} />
  );
}
