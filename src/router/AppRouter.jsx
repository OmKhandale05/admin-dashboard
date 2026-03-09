import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import Users from "../pages/Users";

import "../styles/layout.css"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="layout-container">
        <Sidebar />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
