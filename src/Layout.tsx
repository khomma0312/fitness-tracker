import { Outlet } from "react-router-dom";
import { Header } from "@/layouts/Header";
import { Sidebar } from "./layouts/Sidebar";
import { WhenVisible } from "./components/WhenVisible";
import { TopDrawer } from "./components/TopDrawer";

export const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <WhenVisible lg xl>
        <Sidebar />
      </WhenVisible>
      <WhenVisible sm md>
        <TopDrawer />
      </WhenVisible>
      <Outlet />
    </div>
  );
};
