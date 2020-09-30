import React from "react";
import AppBar from "@material-ui/core/AppBar";
import styles from "./header.module.scss";

export type HeaderProps = {};

export const Header = () => (
  <div className={styles.header}>
    <AppBar position="sticky">
      <h1>IamCrud - React Client</h1>
    </AppBar>
  </div>
);
