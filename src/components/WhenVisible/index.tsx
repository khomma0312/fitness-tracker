import styles from "./styles.module.css";
import type { PropsWithChildren } from "react";

type WhenVisibleProps = {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

export const WhenVisible = ({
  sm = false,
  md = false,
  lg = false,
  xl = false,
  children,
}: PropsWithChildren<WhenVisibleProps>) => {
  const classNames = [
    styles.container,
    sm ? styles.sm : "",
    md ? styles.md : "",
    lg ? styles.lg : "",
    xl ? styles.xl : "",
  ].join(" ");

  return <div className={classNames}>{children}</div>;
};
