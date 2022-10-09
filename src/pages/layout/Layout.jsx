import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
