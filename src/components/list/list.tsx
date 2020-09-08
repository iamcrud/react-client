import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { v4 as uuid } from "uuid";

import { ListModel } from "lists/lists.model";

import styles from "./list.module.scss";

export type ListMode = "read" | "write";

type ListProps = {
  selectedList: ListModel;
  saveList: (list: ListModel) => void;
  mode: ListMode;
  setMode: (mode: ListMode) => void;
};

type ListState = {
  list: ListModel;
  newItem: string;
};

export function List({ selectedList, saveList, mode, setMode }: ListProps) {
  const [state, setState] = useState<ListState>({
    list: { ...selectedList },
    newItem: "",
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      newItem: "",
      list: { ...selectedList },
    }));
  }, [selectedList]);

  const addItem = (content: string) => {
    if (!content) {
      return;
    }

    setState({
      ...state,
      newItem: "",
      list: {
        ...state.list,
        items: [...state.list.items, { content: content, id: uuid() }],
      },
    });
  };

  const removeItem = (id: string) => {
    setState({
      ...state,
      list: {
        ...state.list,
        items: state.list.items.filter((item) => item.id !== id),
      },
    });
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
              value={state.list.title}
              onChange={(event) => {
                setState({
                  ...state,
                  list: {
                    ...state.list,
                    title: event.target.value,
                  },
                });
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                saveList(state.list);
              }}
            >
              Save
            </Button>
          </>
        )}
        {mode === "read" && (
          <>
            <h2 className={styles.listTitle}>{state.list.title}</h2>
            <Button
              variant="contained"
              onClick={() => {
                setMode("write");
              }}
            >
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
            value={state.newItem}
            onChange={(event) => {
              setState({ ...state, newItem: event.target.value });
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addItem(state.newItem);
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addItem(state.newItem);
            }}
          >
            <AddIcon />
          </Button>
        </div>
      )}
      <ul className={styles.listContainer}>
        {state.list.items.map((item) => (
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
                    setState({
                      ...state,
                      list: {
                        ...state.list,
                        items: state.list.items.map((listItem) =>
                          listItem.id === item.id
                            ? { ...listItem, content: event.target.value }
                            : listItem
                        ),
                      },
                    });
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    removeItem(item.id);
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
