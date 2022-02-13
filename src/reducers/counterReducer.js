import { createAction, createReducer } from "@reduxjs/toolkit";

export const Increment = createAction("counter/increment");
export const Decrement = createAction("counter/decrement");
export const IncByValue = createAction("counter/incByValue");
export const Reset = createAction("counter/reset");

const initialState = {
  value: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Increment, (state) => {
      state.value++;
    })
    .addCase(Decrement, (state) => {
      state.value--;
    })
    .addCase(IncByValue, (state, action) => {
      state.value += action.payload;
    })
    .addCase(Reset, (state) => {
      state.value = 0;
    });
});
