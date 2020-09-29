import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { PageNotFound } from "components/page-not-found/page-not-found";
import { ListContainer } from "./list.container";

import * as api from "lists/lists.api";
import { Mode, ListViewProps } from "./list.types";
import { ListModel } from "lists/lists.model";

const newList = () => ({
  id: uuid(),
  title: "",
  items: [],
});

export function ListView({ methods }: ListViewProps) {
  const { id } = useParams<{ id: string }>();
  const [mode, setMode] = useState<Mode>("read");
  const [list, setList] = useState<ListModel>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id === "new") {
      setMode("write");
      setList(newList());
      return;
    }

    setMode("read");
    setLoading(true);

    api
      .readList(id)
      .then(setList)
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {!list && !loading && <PageNotFound />}
      {list && (
        <ListContainer
          methods={{ ...methods, setMode }}
          id={id}
          list={list}
          mode={mode}
        />
      )}
    </>
  );
}
