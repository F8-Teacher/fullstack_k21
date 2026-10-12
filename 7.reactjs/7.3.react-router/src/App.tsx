import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/admin/Dashboard";
import UserIndex from "./pages/admin/users/UserIndex";
import UserCreate from "./pages/admin/users/UserCreate";
import UserUpdate from "./pages/admin/users/UserUpdate";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AuthMiddleware from "./middleware/AuthMiddleware";
import Order from "./pages/Order";
import { AppContext } from "./components/AppContext";
import { lazy, Suspense, useState } from "react";

const About = lazy(() => import("./pages/About"));

export default function App() {
  const [isAuth, setAuth] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{
        isAuth,
        setAuth,
      }}
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":slug" element={<ProductDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/orders/:productId" element={<Order />} />
          </Route>
        </Route>
        <Route element={<AuthMiddleware />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users">
              <Route index element={<UserIndex />} />
              <Route path="create" element={<UserCreate />} />
              <Route path="edit/:id" element={<UserUpdate />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
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
