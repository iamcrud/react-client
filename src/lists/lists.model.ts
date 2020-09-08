export type ListItemModel = {
  content: string;
  id: string;
};

export type ListModel = {
  id: string;
  title: string;
  items: ListItemModel[];
};
