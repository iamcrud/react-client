import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import * as api from "lists/lists.api";
import { ListModel } from "lists/lists.model";
import { NoListFound } from "components/no-list-found/no-list-found";

import { Mode } from "./list.model";
import { List } from "./list";

type ListContainerMethods = {
  createList: (list: ListModel) => Promise<ListModel>;
  updateList: (id: ListModel["id"], list: ListModel) => Promise<ListModel>;
};

type ListContainerProps = {
  methods: ListContainerMethods;
};

const newList = () => ({
  id: uuid(),
  title: "",
  items: [],
});

export function ListContainer({
  methods: { createList, updateList },
}: ListContainerProps) {
  const { id } = useParams();
  const history = useHistory();
  const [mode, setMode] = useState<Mode>("read");
  const [list, setList] = useState<ListModel | null>();

  useEffect(() => {
    if (id === "new") {
      setMode("write");
      setList(newList());
      return;
    }

    setMode("read");
    api.readList(id).then(setList);
  }, [id]);

  const save = (list: ListModel) => {
    let promise: Promise<ListModel>;

    if (id === "new") {
      promise = createList(list);
    } else {
      promise = updateList(id, list);
    }

    promise.then((list) => {
      setMode("read");
      history.push(`/${list.id}`);
    });
  };

  const edit = () => {
    setMode("write");
  };

  return (
    <>
      {!list && <NoListFound />}
      {list && <List data={list} mode={mode} methods={{ edit, save }} />}
    </>
  );
}
