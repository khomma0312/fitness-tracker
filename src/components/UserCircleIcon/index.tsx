import { Avatar, Group, UnstyledButton } from "@mantine/core";
import { forwardRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./styles.module.css";

type UserCircleIconProps = {
  isMenuOpened: boolean;
  handleOnClick: () => void;
  size?: string;
};

export const UserCircleIcon = forwardRef<
  HTMLButtonElement,
  UserCircleIconProps
>(({ isMenuOpened, handleOnClick, size = "2.5rem", ...others }: UserCircleIconProps, ref) => {
  return (
    <UnstyledButton ref={ref} {...others} onClick={handleOnClick}>
      <Group gap={2}>
        <Avatar radius="xl" size={size} />
        {isMenuOpened ? <FiChevronUp className={styles.chevron} /> : <FiChevronDown className={styles.chevron} />}
      </Group>
    </UnstyledButton>
  );
});
