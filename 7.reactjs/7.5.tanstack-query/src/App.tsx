import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Order from "./pages/Order";
import AuthMiddleware from "./middlewares/AuthMiddleware";
export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AuthMiddleware />}>
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}
