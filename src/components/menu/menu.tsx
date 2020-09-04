import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { ListModel } from "../list/list";
import styles from "./menu.module.scss";

type MenuMethods = {
  removeList: (id: string) => void;
};

type MenuProps = {
  lists: ListModel[];
  methods: MenuMethods;
};

export function Menu({ lists, methods }: MenuProps) {
  const history = useHistory();
  const { id: paramId } = useParams();

  const removeList = (id: string) => {
    methods.removeList(id);

    if (paramId === id) {
      history.push("/");
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.newList}>
        <Link to="/new">
          <Button variant="contained" color="primary">
            New list
          </Button>
        </Link>
      </div>
      <div className={styles.lists}>
        <ul>
          {lists.map((list) => (
            <li key={list.id}>
              <div className={styles.list}>
                <Link to={list.id} className={styles.listNameContainer}>
                  <Paper className={styles.listName}>{list.title}</Paper>
                </Link>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    removeList(list.id);
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
