import { Menu } from "@mantine/core";
import styles from "./styles.module.css";

export const MenuDropdownItems = () => {
  return (
    <>
      <Menu.Item>マイページ</Menu.Item>
      <Menu.Item>トレーニング履歴</Menu.Item>
      <Menu.Item className={styles.logout}>ログアウト</Menu.Item>
    </>
  );
};
