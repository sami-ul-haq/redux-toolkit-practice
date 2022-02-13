import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Decrement,
  IncByValue,
  Increment,
  Reset,
} from "../reducers/counterReducer";

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Using createAction, createReducer</h3>
      <hr />
      <h1>{value}</h1>

      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
      <button onClick={() => dispatch(IncByValue(3))}>Inc By 3</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
};

export default Counter;
