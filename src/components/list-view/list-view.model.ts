import { ListItemModel, ListModel } from "lists/lists.model";

export type Mode = "read" | "write";

export type ListData = {
  list: ListModel;
  mode: Mode;
};

export type ListViewMethods = {
  edit: () => void;
  updateTitle: (title: ListModel["title"]) => void;
  createItem: (content: ListItemModel["content"]) => void;
  updateItem: (id: ListItemModel["id"], content: ListItemModel["id"]) => void;
  deleteItem: (id: ListItemModel["id"]) => void;
  save: (list: ListModel) => void;
};

export type ListViewProps = {
  data: ListData;
  methods: ListViewMethods;
};
