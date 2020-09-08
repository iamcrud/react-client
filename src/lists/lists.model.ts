export type ListItem = {
  content: string;
  id: string;
};

export type ListModel = {
  id: string;
  title: string;
  items: ListItem[];
};
