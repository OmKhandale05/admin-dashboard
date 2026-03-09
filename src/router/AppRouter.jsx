import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import Users from "../pages/Users";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Sidebar />
        <div>
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
