import { getRequestFromServer } from "../requestFromServer";
import { Task } from "./types/task";

export const getTasks = async (): Promise<Task[]> => {
  const res = await getRequestFromServer<Task[]>("/tasks");
  return res.data;
};
