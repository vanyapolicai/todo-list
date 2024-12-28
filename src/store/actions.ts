// import { Task } from "../types";

export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (title: string) => ({
  type: ADD_TASK,
  payload: { title },
});

export const toggleTask = (id: number) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const editTask = (id: number, title: string) => ({
  type: EDIT_TASK,
  payload: { id, title },
});

export const deleteTask = (id: number) => ({
  type: DELETE_TASK,
  payload: { id },
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: { filter },
});

