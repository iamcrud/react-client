import React from "react";
import AppBar from "@material-ui/core/AppBar";
import styles from "./header.module.scss";

export type HeaderProps = {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const Header = ({ className = "", ...props }: HeaderProps) => (
  <div className={`${className} ${styles.header}`} {...props}>
    <AppBar position="sticky">
      <h1>IamCrud - React Client</h1>
    </AppBar>
  </div>
);
