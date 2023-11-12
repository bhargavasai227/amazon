"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inserto:(state,action)=>{
     state.value=[...state.value,action.payload]
    },
    
  },
});

export const { increment, decrement, incrementByAmount,inserto } = counterSlice.actions

export default counterSlice.reducer;