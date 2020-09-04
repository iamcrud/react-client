import React from "react";
import styles from "./no-list-selected.module.scss";

export function NoListSelected() {
  return (
    <div className={styles.notListSelected}>
      <p>No list selected</p>
    </div>
  );
}
