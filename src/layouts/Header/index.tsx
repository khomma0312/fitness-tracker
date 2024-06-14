import { Flex } from "@mantine/core";
import styles from "./styles.module.css";
import { IconMenu } from "@/components/IconMenu";

export const Header = () => {
  return (
    <Flex className={styles.header} justify={"space-between"} align={"center"}>
      <h1 className={styles.logo}>Fitness Pal</h1>
      <IconMenu />
    </Flex>
  );
};
