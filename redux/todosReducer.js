import { addTask, deleteTask, isAcheived } from "./actionsTypes";
import { createReducer } from "@reduxjs/toolkit";

const initialState = { todos: [], isAcheived: false };

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask.type, (state, action) => {
      state.todos.push(action.payload);
    })
    .addCase(deleteTask.type, (state, action) => {
      const taskId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== taskId);
      return state;
    })
    .addCase(isAcheived.type, (state) => {
      return state;
    });
});
export default todoReducer;
