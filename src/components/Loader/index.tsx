import { Loader as MantineLoader } from "@mantine/core";
import styles from "./styles.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <MantineLoader color="cyan" size="lg" />
    </div>
  );
};
