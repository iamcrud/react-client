import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { v4 as uuid } from "uuid";

import { ListItemModel, ListModel } from "lists/lists.model";
import { Mode } from "./list.model";

import styles from "./list.module.scss";

type ListMethods = {
  save: (list: ListModel) => void;
  edit: () => void;
};

type ListProps = {
  data: ListModel;
  mode: Mode;
  methods: ListMethods;
};

export function List({ data, mode, methods: { save, edit } }: ListProps) {
  const [list, setList] = useState<ListModel>(data);
  const [newItem, setNewItem] = useState<string>("");

  useEffect(() => {
    setNewItem("");
    setList(data);
  }, [data]);

  const updateTitle = (title: ListModel["title"]) => {
    setList((list) => ({
      ...list,
      title: title,
    }));
  };

  const createItem = (content: ListItemModel["content"]) => {
    if (!content) {
      return;
    }

    setNewItem("");

    setList((list) => ({
      ...list,
      items: [...list.items, { id: uuid(), isNew: true, content: content }],
    }));
  };

  const updateItem = (
    id: ListItemModel["id"],
    content: ListItemModel["id"]
  ) => {
    setList((list) => ({
      ...list,
      items: list.items.map((item) =>
        item.id === id ? { ...item, content: content } : item
      ),
    }));
  };

  const deleteItem = (id: string) => {
    setList((list) => ({
      ...list,
      items: list.items.filter((item) => item.id !== id),
    }));
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
              if (event.key === "Enter") {
                createItem(newItem);
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              createItem(newItem);
            }}
          >
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
