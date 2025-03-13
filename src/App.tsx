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
    <div className="flex w-full flex-row bg-gray-200 font-sans text-sm mt-5">
      <Sidebar />
      <div className="flex flex-col w-full h-screen p-8 ml-60">
        <div className=" fixed top-0 left-64 right-0 h-16 ">
          <Header />
        </div>

        <div className="flex-grow left-64 right-0 h-100 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/users" element={<User />} />
          </Routes>
        </div>

        <div className="ml-60 h-16 p-2 fixed bottom-0 right-0 left-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
