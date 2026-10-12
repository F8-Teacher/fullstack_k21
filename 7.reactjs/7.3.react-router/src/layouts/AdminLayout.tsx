import NavAdmin from "@/components/NavAdmin";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex gap-3">
      <NavAdmin />
      <div className="flex-1 p-3">
        <Outlet />
      </div>
    </div>
  );
}
