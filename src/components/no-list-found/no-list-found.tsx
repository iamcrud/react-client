import React from "react";
import styles from "./no-list-found.module.scss";

export function NoListFound() {
  return (
    <div className={styles.noListFound}>
      <p>No list found</p>
    </div>
  );
}
