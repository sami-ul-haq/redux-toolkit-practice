import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./reducers/postSlice";
import { counterReducer } from "./reducers/counterReducer";
import todoSlice from "./reducers/todoSlice";
import { usersApi } from "./reducers/usersApi";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    counter: counterReducer,
    todos: todoSlice,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
