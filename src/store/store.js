import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "../features/counter/counterSlice";
import todolistReduce from "../features/todolist/todolistslice";
export const store=configureStore({
         reducer:{
        count: counterReducer,
        todo:todolistReduce,
         }
})