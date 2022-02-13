import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoSlice";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();

    if (!todo) {
      setError(true);
    }

    if (todo) {
      dispatch(addTodo(todo));
      setError(false);
      setTodo(" ");
    }
  };

  return (
    <div className="add-to-do">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Your Todo"
      />
      <button type="submit" onClick={submitTodo}>
        Add Todo
      </button>
      {error && <p>Please Enter Something...</p>}
    </div>
  );
};

export default AddToDo;
