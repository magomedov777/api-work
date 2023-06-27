import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
});

export const TodolistApi = {
  
 
  
  
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

