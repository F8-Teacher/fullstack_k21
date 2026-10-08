import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <div className="flex gap-3">
      <Nav />
      <div className="flex-1 p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

// path / -> Home
// path /about -> About

//React Router dom:
// - Xây dựng layout (Outlet)
// - Protected Routes
// - Navigate -> Chuyển hướng

//Zustand

//Auth
