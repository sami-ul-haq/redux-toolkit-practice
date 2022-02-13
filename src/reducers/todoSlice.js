import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: ["Buy Milk", "Go to Jym"],
};

export const todoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.todos = [
        state.todos.filter((i) => state.todos.i !== action.paylaod),
      ];
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
