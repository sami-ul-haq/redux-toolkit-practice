import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../reducers/todoSlice";
import AddToDo from "./AddToDo";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="todos-list">
      <h1>Todos</h1>
      <h3>Using createSlice Method</h3>
      <hr />
      <AddToDo />
      <h1>Following Are Your Todos</h1>
      <ul>
        {todos.map((item, i) => (
          <li key={i} onClick={() => dispatch(deleteTodo(i))}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
