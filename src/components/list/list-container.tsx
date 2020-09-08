import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { ListModel } from "lists/lists.model";
import { List, ListMode } from "./list";
import { NoListFound } from "../no-list-found/no-list-found";

type ListContainerMethods = {
  createList: (list: ListModel) => Promise<ListModel>;
  updateList: (id: ListModel["id"], list: ListModel) => Promise<ListModel>;
};

type ListContainerProps = {
  lists: ListModel[];
  methods: ListContainerMethods;
};

type ListContainerState = {
  mode: ListMode;
};

const newList = () => ({
  id: uuid(),
  title: "",
  items: [],
});

export function ListContainer({
  lists,
  methods: { createList, updateList },
}: ListContainerProps) {
  const [state, setState] = useState<ListContainerState>({
    mode: "read",
  });

  const { id } = useParams();
  const history = useHistory();

  const save = (list: ListModel) => {
    let promise: Promise<ListModel>;

    if (id === "new") {
      promise = createList(list);
    } else {
      promise = updateList(id, list);
    }

    promise.then((list) => {
      setState((state) => ({
        ...state,
        mode: "read",
      }));

      history.push(`/${list.id}`);
    });
  };

  const setMode = (mode: ListMode) => {
    setState((state) => ({
      ...state,
      mode: mode,
    }));
  };

  const edit = () => {
    setMode("write");
  };

  useEffect(() => {
    setMode(id === "new" ? "write" : "read");
  }, [id]);

  const list = id === "new" ? newList() : lists.find((list) => list.id === id);

  return (
    <>
      {!list && <NoListFound />}
      {list && <List data={list} mode={state.mode} methods={{ edit, save }} />}
    </>
  );
}
