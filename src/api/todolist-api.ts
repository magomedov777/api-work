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
  getTasks(id: string) {
    // const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
    return instance.get<TasksResponseType>(`/todo-lists/${id}/tasks`)
    },
    createTasks(id: string, title: string) {
      // const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
      return instance.post<TasksResponseType>(`todo-lists/${id}/tasks`, { title })
    },
    deleteTask(id: string, taskId: string) {
      // const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
      return instance.delete<TasksResponseType>(`todo-lists/${id}/tasks/${taskId}`)
      },
      updateTask(id: string, taskId: string, title: string) {
        // const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
        return instance.put<TasksResponseType>(`todo-lists/${id}/tasks/${taskId}`, { title })
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

type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}

type TasksResponseType = {
  error: string | null
  totalCount: string
  items: TaskType[]
}

