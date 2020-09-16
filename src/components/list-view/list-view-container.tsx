import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import * as api from "lists/lists.api";
import { ListItemModel, ListModel } from "lists/lists.model";
import { NoListFound } from "components/no-list-found/no-list-found";

import { Mode } from "./list-view.model";
import { ListView } from "./list-view";

type ListContainerMethods = {
  createList: (list: ListModel) => Promise<ListModel>;
  updateList: (id: ListModel["id"], list: ListModel) => Promise<ListModel>;
  deleteList: (id: ListModel["id"]) => Promise<void>;
};

type ListContainerProps = {
  methods: ListContainerMethods;
};

const newList = () => ({
  id: uuid(),
  title: "",
  items: [],
});

export function ListViewContainer({
  methods: { createList, updateList, deleteList },
}: ListContainerProps) {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [mode, setMode] = useState<Mode>("read");
  const [list, setList] = useState<ListModel>(newList());

  useEffect(() => {
    if (id === "new") {
      setMode("write");
      setList(newList());
      return;
    }

    setMode("read");
    api.readList(id).then(setList);
  }, [id]);

  const remove = () => {
    deleteList(list.id);

    if (id === list.id) {
      history.push("/lists");
    }
  };

  const edit = () => {
    setMode("write");
  };

  const save = (list: ListModel) => {
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
    <>
      {!list && <NoListFound />}
      {list && (
        <ListView
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
      )}
    </>
  );
}
