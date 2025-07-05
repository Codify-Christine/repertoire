import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => (
  <div className="flex">
    <Sidebar />
    <main className="ml-20 md:ml-60 p-6 flex-1 bg-[#F5F7FA] min-h-screen">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;

