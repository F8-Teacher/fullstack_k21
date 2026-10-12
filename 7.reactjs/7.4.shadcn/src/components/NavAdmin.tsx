import { Link } from "react-router-dom";

export default function NavAdmin() {
  return (
    <div className="bg-gray-200 p-3 w-55 min-h-screen">
      <h3 className="mb-3 border-gray-100 border-b text-lg">Menu Admin</h3>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}
