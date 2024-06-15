import { Outlet } from "react-router-dom";
import { Header } from "@/layouts/Header";
import { Sidebar } from "./layouts/Sidebar";

export const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};
