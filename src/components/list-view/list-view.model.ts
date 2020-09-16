import { ListItemModel, ListModel } from "lists/lists.model";

export type Mode = "read" | "write";

export type ListData = {
  list: ListModel;
  mode: Mode;
};

export type ListViewMethods = {
  edit: () => void;
  remove: () => void;
  save: (list: ListModel) => void;
  updateTitle: (title: ListModel["title"]) => void;
  createItem: (content: ListItemModel["content"]) => void;
  updateItem: (id: ListItemModel["id"], content: ListItemModel["id"]) => void;
  deleteItem: (id: ListItemModel["id"]) => void;
};

export type ListViewProps = {
  data: ListData;
  methods: ListViewMethods;
};
