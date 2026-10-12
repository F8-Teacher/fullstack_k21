import { Link } from "react-router-dom";

export default function UserIndex() {
  return (
    <div>
      <h1 className="mb-3 text-3xl">Users</h1>
      <Link
        to="/admin/users/create"
        className="bg-green-600 mb-3 px-3 py-1 rounded-xl text-white cursor-pointer"
      >
        New
      </Link>
    </div>
  );
}
