import { useState, useEffect } from "react";

import { ListModel } from "./lists.model";
import * as api from "./lists.api";

export function useLists() {
  const [lists, setLists] = useState<ListModel[]>([]);

  useEffect(() => {
    api.getAllLists().then(setLists);
  }, []);

  const createList = (newList: ListModel) => {
    return api.createList(newList).then((list) => {
      setLists((lists) => [...lists, list]);
      return list;
    });
  };

  const updateList = (id: ListModel["id"], modifiedList: ListModel) => {
    return api.updateList(id, modifiedList).then((updatedList) => {
      setLists((lists) =>
        lists.map((list) => (list.id === id ? updatedList : list))
      );

      return updatedList;
    });
  };

  const deleteList = (id: ListModel["id"]) => {
    return api.deleteList(id).then(() => {
      setLists((lists) => lists.filter((list) => list.id !== id));
    });
  };

  return { lists, createList, updateList, deleteList };
}
