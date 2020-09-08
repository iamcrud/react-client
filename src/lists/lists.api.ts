import axios from "axios";
import { ListModel } from "./lists.model";

export function getAllLists(): Promise<ListModel[]> {
  return axios.get("/api/lists").then(({ data: lists }) => lists);
}

export function createList(list: ListModel): Promise<ListModel> {
  return axios.post("/api/lists", list).then(({ data: list }) => list);
}

export function updateList(
  id: ListModel["id"],
  list: ListModel
): Promise<ListModel> {
  return axios.put(`/api/list/${id}`, list).then(({ data: list }) => list);
}
