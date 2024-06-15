import { Flex } from "@mantine/core";
import { ReactNode } from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

type SideBarItemProps = {
  icon: ReactNode;
  title: string;
  linkTo: string;
};

export const SideBarItem = ({ icon, title, linkTo }: SideBarItemProps) => {
  return (
    <NavLink to={linkTo} className={styles.item}>
      <Flex gap={7} align={"center"}>
        {icon}
        <span>{title}</span>
      </Flex>
    </NavLink>
  );
};
