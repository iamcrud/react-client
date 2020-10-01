import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import { ListModel } from "lists/lists.model";
import styles from "./lists-view.module.scss";
import { NewListButtonLink } from "components/buttons/new-list-button-link/new-list-button-link";

type ListsProps = {
  lists: ListModel[];
};

export function ListsView({ lists }: ListsProps) {
  return (
    <div className={styles.listsView}>
      <div className={styles.header}>
        <h2 className={styles.title}>Lists</h2>
        <NewListButtonLink to="/lists/new" />
      </div>
      <ul className={styles.container}>
        {lists.map((list) => (
          <li key={list.id}>
            <div className={styles.row}>
              <Link
                to={`/lists/${list.id}`}
                className={styles.listNameContainer}
              >
                <Paper className={styles.listName}>{list.title}</Paper>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
