import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

/*
Fetch all tasks

*/
export const getTasks = (params?: any) => {
  return API.get("/tasks", { params });
};

/*
Create new task
*/
export const createTask = (data: any) => {
  return API.post("/tasks", data);
};

/*
Update task status
*/
export const updateTaskStatus = (id: string, status: string) => {
  return API.patch(`/tasks/${id}`, { status });
};

/*
Delete task
*/
export const deleteTask = (id: string) => {
  return API.delete(`/tasks/${id}`);
};


export const getTaskStats = () => {
  return API.get("/tasks/stats");
};