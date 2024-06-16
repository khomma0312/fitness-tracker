import { Burger, Drawer, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { menuItems } from "@/services/utils/menuItems";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { HiOutlineViewList } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { SideBarItem } from "../SideBarItem";
import styles from "./styles.module.css";

const drawerItems = [
  { ...menuItems.dashboard, icon: <HiOutlineHome size={22} /> },
  { ...menuItems.workouts, icon: <HiOutlineSearch size={22} /> },
  { ...menuItems.addWorkouts, icon: <HiOutlineDocumentPlus size={22} /> },
  { ...menuItems.history, icon: <HiOutlineViewList size={22} /> },
  { ...menuItems.mypage, icon: <HiOutlineUserCircle size={22} /> },
];

export const BurgerMenu = () => {
  const [isMenuOpened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Burger color="brand-blue.7" opened={isMenuOpened} onClick={toggle} />
      <Drawer opened={isMenuOpened} onClose={close}>
        <ul>
          {drawerItems.map((item) => (
            <SideBarItem
              key={item.linkTo}
              icon={item.icon}
              title={item.title}
              linkTo={item.linkTo}
            />
          ))}
          <li>
            <UnstyledButton className={styles.logout}>
              ログアウト
            </UnstyledButton>
          </li>
        </ul>
      </Drawer>
    </>
  );
};
