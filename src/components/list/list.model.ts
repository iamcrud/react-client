import { ListItemModel, ListModel } from "lists/lists.model";

export type Mode = "read" | "write";

export type ListData = {
  list: ListModel;
  mode: Mode;
};

export type ListMethods = {
  edit: () => void;
  updateTitle: (title: ListModel["title"]) => void;
  createItem: (content: ListItemModel["content"]) => void;
  updateItem: (id: ListItemModel["id"], content: ListItemModel["id"]) => void;
  deleteItem: (id: ListItemModel["id"]) => void;
  save: (list: ListModel) => void;
};

export type ListProps = {
  data: ListData;
  methods: ListMethods;
};
