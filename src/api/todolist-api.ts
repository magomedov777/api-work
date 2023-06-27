import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
});

export const TodolistApi = {
  getTodolists() {
    return instance.get<TodolistType[]>("todo-lists");
  },
  createTodolists(title: string) {
    return instance.post<ResponseType<{item: TodolistType}>>("todo-lists", { title });
  },
  deleteTodolists(id: string) {
    return instance.delete<ResponseType>(`todo-lists/${id}`);
  },
  updateTodolists(id: string, title: string) {
    return instance.put<ResponseType>(`todo-lists/${id}`, { title });
  },
};

type TodolistType = {
  id: string
  title: string
  addedDate: Date
  order: number
};

type ResponseType<T = {}> = {
  resultCode: number;
  fieldsError: []
  messages: string[]
  data: T
};

