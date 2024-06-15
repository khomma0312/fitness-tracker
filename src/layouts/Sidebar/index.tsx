import { SideBarItem } from "@/components/SideBarItem";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import styles from "./styles.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* TODO: パスはcontextとかで共通で持つようにして、そこから取得するようにする */}
      <SideBarItem
        icon={<HiOutlineHome size={22} />}
        title="ホーム"
        linkTo="/"
      />
      <SideBarItem
        icon={<HiOutlineSearch size={22} />}
        title="トレーニングを探す"
        linkTo="/workouts"
      />
      <SideBarItem
        icon={<HiOutlineViewList size={22} />}
        title="トレーニング履歴"
        linkTo="/history"
      />
      <SideBarItem
        icon={<HiOutlineUserCircle size={22} />}
        title="マイページ"
        linkTo="/mypage"
      />
    </div>
  );
};
