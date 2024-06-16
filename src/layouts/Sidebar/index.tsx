import { SideBarItem } from "@/components/SideBarItem";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import styles from "./styles.module.css";
import { paths } from "@/services/utils/paths";

const sidebarItems = [
  {
    icon: <HiOutlineHome size={22} />,
    title: "ホーム",
    linkTo: paths.dashboard,
  },
  {
    icon: <HiOutlineSearch size={22} />,
    title: "トレーニングを探す",
    linkTo: paths.workouts,
  },
  {
    icon: <HiOutlineViewList size={22} />,
    title: "トレーニング履歴",
    linkTo: paths.history,
  },
  {
    icon: <HiOutlineUserCircle size={22} />,
    title: "マイページ",
    linkTo: paths.mypage,
  },
];

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {sidebarItems.map((item) => (
        <SideBarItem icon={item.icon} title={item.title} linkTo={item.linkTo} />
      ))}
    </aside>
  );
};
