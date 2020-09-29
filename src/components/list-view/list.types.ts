import { ListItemModel, ListModel } from "lists/lists.model";

export type Mode = "read" | "write";

export type ListData = {
  list: ListModel;
  mode: Mode;
};

export type ListMethods = {
  edit: () => void;
  remove: () => void;
  save: (list: ListModel) => void;
  updateTitle: (title: ListModel["title"]) => void;
  createItem: (content: ListItemModel["content"]) => void;
  updateItem: (id: ListItemModel["id"], content: ListItemModel["id"]) => void;
  deleteItem: (id: ListItemModel["id"]) => void;
};

export type ListProps = {
  data: ListData;
  methods: ListMethods;
};

export type ListContainerMethods = {
  createList: (list: ListModel) => Promise<ListModel>;
  updateList: (id: ListModel["id"], list: ListModel) => Promise<ListModel>;
  deleteList: (id: ListModel["id"]) => Promise<void>;
  setMode: (mode: Mode) => void;
};

export type ListContainerProps = {
  methods: ListContainerMethods;
  id: ListModel["id"];
  list: ListModel;
  mode: Mode;
};

export type ListViewMethods = {
  createList: (list: ListModel) => Promise<ListModel>;
  updateList: (id: ListModel["id"], list: ListModel) => Promise<ListModel>;
  deleteList: (id: ListModel["id"]) => Promise<void>;
};

export type ListViewProps = {
  methods: ListViewMethods;
};
