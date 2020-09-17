import React, { useState, useEffect } from "react";
import { Button, TextField, Paper } from "@material-ui/core";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@material-ui/icons";

import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import { ListViewProps } from "./list-view.model";
import styles from "./list-view.module.scss";

export function ListView({
  data: { list, mode },
  methods: {
    edit,
    remove,
    save,
    updateTitle,
    createItem,
    updateItem,
    deleteItem,
  },
}: ListViewProps) {
  const [newItem, setNewItem] = useState<string>("");

  useEffect(() => {
    setNewItem("");
  }, [list.id]);

  const createNewItem = () => {
    if (!newItem) {
      return;
    }

    setNewItem("");
    createItem(newItem);
  };

  return (
    <div className={`${styles.list} ${styles[mode]}`}>
      <div className={styles.header}>
        {mode === "write" && (
          <>
            <TextField
              label="Title"
              className={styles.title}
              variant="outlined"
              size="small"
              value={list.title}
              onChange={(event) => {
                updateTitle(event.target.value);
              }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlaylistAddCheckIcon />}
              onClick={() => {
                save(list);
                setNewItem("");
              }}
            >
              Save
            </Button>
          </>
        )}
        {mode === "read" && (
          <>
            <h2 className={styles.title}>{list.title}</h2>
            <Button
              variant="contained"
              color="secondary"
              onClick={remove}
              className={styles.action}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={edit}
              className={styles.action}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </>
        )}
      </div>
      {mode === "write" && (
        <div className={styles.newItem}>
          <TextField
            className={styles.content}
            label="New item"
            variant="outlined"
            size="small"
            value={newItem}
            onChange={(event) => {
              setNewItem(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key !== "Enter") {
                return;
              }

              createNewItem();
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={createNewItem}
          >
            Add
          </Button>
        </div>
      )}
      <ul className={styles.container}>
        {list.items.map((item) => (
          <li key={item.id}>
            {mode === "read" && (
              <Paper className={styles.row}>{item.content}</Paper>
            )}
            {mode === "write" && (
              <div className={styles.row}>
                <TextField
                  className={styles.listItemContent}
                  label="Item content"
                  variant="outlined"
                  size="small"
                  value={item.content}
                  onChange={(event) => {
                    updateItem(item.id, event.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  className={styles.iconButton}
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  <DeleteIcon />
                </Button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
