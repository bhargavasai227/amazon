"use client"; 

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

export const { inserto } = counterSlice.actions

export default counterSlice.reducer;