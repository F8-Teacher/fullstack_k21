import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="p-3 w-55">
      <h3 className="mb-3 border-gray-100 border-b text-lg">Menu</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
