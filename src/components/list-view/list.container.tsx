import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { List } from "./list";

import { ListItemModel, ListModel } from "lists/lists.model";
import { ListContainerProps } from "./list.types";

export function ListContainer({
  methods: { createList, updateList, deleteList, setMode },
  id,
  list: listData,
  mode,
}: ListContainerProps) {
  const history = useHistory();
  const [list, setList] = useState<ListModel>(listData);

  const edit = () => {
    setMode("write");
  };

  const remove = () => {
    deleteList(list.id);
    history.push("/lists");
  };

  const save = () => {
    let promise: Promise<ListModel | void>;

    if (id === "new") {
      promise = createList(list).then((list) => {
        history.push(`/lists/${list.id}`);
      });
    } else {
      promise = updateList(id, list);
    }

    promise.then(() => {
      setMode("read");
    });
  };

  const updateTitle = (title: ListModel["title"]) => {
    setList((list) => ({
      ...list,
      title: title,
    }));
  };

  const createItem = (content: ListItemModel["content"]) => {
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
    <List
      data={{ list, mode }}
      methods={{
        edit,
        remove,
        save,
        updateTitle,
        createItem,
        updateItem,
        deleteItem,
      }}
    />
  );
}
