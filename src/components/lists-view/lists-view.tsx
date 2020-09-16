import React from "react";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

import { ListModel } from "lists/lists.model";
import styles from "./lists-view.module.scss";

type ListsProps = {
  lists: ListModel[];
};

export function ListsView({ lists }: ListsProps) {
  return (
    <div className={styles.listsView}>
      <div className={styles.header}>
        <h2 className={styles.title}>Lists</h2>
        <Link to="/lists/new">
          <Button
            variant="contained"
            color="primary"
            startIcon={<PlaylistAddIcon />}
          >
            New list
          </Button>
        </Link>
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
