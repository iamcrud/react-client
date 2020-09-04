import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { List, ListModel, ListMode } from "./list";
import { NoListFound } from "../no-list-found/no-list-found";

type ListContainerMethods = {
  saveList: (list: ListModel) => void;
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

export function ListContainer({ lists, methods }: ListContainerProps) {
  const [state, setState] = useState<ListContainerState>({
    mode: "read",
  });

  const { id } = useParams();
  const history = useHistory();

  const saveList = (list: ListModel) => {
    methods.saveList(list);
    setState({
      ...state,
      mode: "read",
    });
    history.push(`/${list.id}`);
  };

  const setMode = (mode: ListMode) => {
    setState((state) => ({
      ...state,
      mode: mode,
    }));
  };

  useEffect(() => {
    setMode(id === "new" ? "write" : "read");
  }, [id]);

  const selectedList =
    id === "new" ? newList() : lists.find((list) => list.id === id);

  return (
    <>
      {!selectedList && <NoListFound />}
      {selectedList && (
        <List
          selectedList={selectedList}
          saveList={saveList}
          mode={state.mode}
          setMode={setMode}
        />
      )}
    </>
  );
}
