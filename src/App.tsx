import Footer from "./component/Footer";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ECommerce from "./pages/ECommerce";
import User from "./pages/User";
import "./index.css";

export default function App() {
  return (
    <div className="flex w-full flex-row bg-gray-200 font-sans text-sm">
      <Sidebar />
      <div className="flex flex-col w-full p-8">
        <div className=" h-16 fixed-top">
          <Header />
        </div>

        <div className="flex-grow  w-full h-150 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </div>

        <div className=" w-full h-16 p-2 fixed-bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
}
