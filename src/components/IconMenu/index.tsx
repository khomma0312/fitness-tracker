import { Menu } from "@mantine/core";
import { UserCircleIcon } from "../UserCircleIcon";
import { useState } from "react";
import styles from "./styles.module.css";

export const IconMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const iconHandleOnClick = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <div>
      <Menu width={200} opened={isMenuOpened}>
        <Menu.Target>
          <UserCircleIcon isMenuOpened={isMenuOpened} handleOnClick={iconHandleOnClick} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>マイページ</Menu.Item>
          <Menu.Item>トレーニング履歴</Menu.Item>
          <Menu.Item className={styles.logout}>ログアウト</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};
