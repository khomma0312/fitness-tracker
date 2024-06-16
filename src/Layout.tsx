import { Outlet } from "react-router-dom";
import { Header } from "@/layouts/Header";
import { Sidebar } from "./layouts/Sidebar";
import { WhenVisible } from "./components/WhenVisible";

export const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <WhenVisible lg xl>
        <Sidebar />
      </WhenVisible>
      <Outlet />
    </div>
  );
};
