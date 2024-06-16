import { SideBarItem } from "@/components/SideBarItem";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import styles from "./styles.module.css";
import { menuItems } from "@/services/utils/menuItems";

const sidebarItems = [
  { ...menuItems.dashboard, icon: <HiOutlineHome size={22} /> },
  { ...menuItems.workouts, icon: <HiOutlineSearch size={22} /> },
  { ...menuItems.history, icon: <HiOutlineViewList size={22} /> },
  { ...menuItems.mypage, icon: <HiOutlineUserCircle size={22} /> },
];

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        {sidebarItems.map((item) => (
          <SideBarItem
            key={item.linkTo}
            icon={item.icon}
            title={item.title}
            linkTo={item.linkTo}
          />
        ))}
      </ul>
    </aside>
  );
};
