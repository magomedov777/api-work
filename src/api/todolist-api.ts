import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
});

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
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}

type UpdateTaskType = {
  description: string
  title: string
  status: number
  priority: number
  startDate: string
  deadline: string
}

type TasksResponseType = {
  error: string | null
  totalCount: string
  items: TaskType[]
}


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
    return instance.get<TasksResponseType>(`/todo-lists/${id}/tasks`)
    },
    
    deleteTask(id: string, taskId: string) {
      return instance.delete<TasksResponseType>(`todo-lists/${id}/tasks/${taskId}`)
      },
      updateTask(id: string, taskId: string, title: string) {
        return instance.put<UpdateTaskType>(`todo-lists/${id}/tasks/${taskId}`, { title })
        },
  
};

