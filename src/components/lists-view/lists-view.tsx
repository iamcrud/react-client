import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { ListModel } from "lists/lists.model";
import styles from "./lists-view.module.scss";

type ListsMethods = {
  deleteList: (id: string) => void;
};

type ListsProps = {
  lists: ListModel[];
  methods: ListsMethods;
};

export function ListsView({ lists, methods }: ListsProps) {
  const history = useHistory();
  const { id: paramId } = useParams<{ id: string }>();

  const deleteList = (id: string) => {
    methods.deleteList(id);

    if (paramId === id) {
      history.push("/");
    }
  };

  return (
    <div className={styles.listsView}>
      <Link to="/new">
        <Button variant="contained" color="primary">
          New list
        </Button>
      </Link>
      <div className={styles.lists}>
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
              <div className={styles.list}>
                <Link
                  to={`/lists/${list.id}`}
                  className={styles.listNameContainer}
                >
                  <Paper className={styles.listName}>{list.title}</Paper>
                </Link>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    deleteList(list.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
