import React, { useState, useEffect } from "react";
import { TextField, Paper } from "@material-ui/core";

import { ListProps } from "./list.types";
import styles from "./list.module.scss";
import { SaveButton } from "components/buttons/save-button/save-button";
import { AddButton } from "components/buttons/add-button/add-button";
import { DeleteButton } from "components/buttons/delete-button/delete-button";
import { EditButton } from "components/buttons/edit-button/edit-button";

export function List({
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
            <SaveButton
              onClick={() => {
                save(list);
                setNewItem("");
              }}
            />
          </>
        )}
        {mode === "read" && (
          <>
            <h2 className={styles.title}>{list.title}</h2>
            <DeleteButton onClick={remove} />
            <EditButton className={styles.action} onClick={edit} />
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
          <AddButton onClick={createNewItem} />
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
                <DeleteButton
                  showLabel={false}
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
