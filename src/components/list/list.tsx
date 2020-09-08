import React, { useState, useEffect } from "react";
import { Button, TextField, Paper } from "@material-ui/core";
import { Add as AddIcon, Delete as DeleteIcon } from "@material-ui/icons";

import { ListProps } from "./list.model";
import styles from "./list.module.scss";

export function List({
  data: { list, mode },
  methods: { edit, updateTitle, createItem, updateItem, deleteItem, save },
}: ListProps) {
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
      <div className={styles.listHeader}>
        {mode === "write" && (
          <>
            <TextField
              label="Title"
              className={styles.listTitle}
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
            <h2 className={styles.listTitle}>{list.title}</h2>
            <Button variant="contained" onClick={edit}>
              Edit
            </Button>
          </>
        )}
      </div>
      {mode === "write" && (
        <div className={styles.newItem}>
          <TextField
            className={styles.newItemContent}
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
          <Button variant="contained" color="primary" onClick={createNewItem}>
            <AddIcon />
          </Button>
        </div>
      )}
      <ul className={styles.listContainer}>
        {list.items.map((item) => (
          <li key={item.id}>
            {mode === "read" && (
              <Paper className={styles.listItem}>{item.content}</Paper>
            )}
            {mode === "write" && (
              <div className={styles.listItem}>
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
