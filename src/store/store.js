import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "../features/counter/counterSlice";
import todolistReduce from "../features/todolist/todolistslice";
import ProductReducer from "../features/products/producslice";
export const store=configureStore({
         reducer:{
        count: counterReducer,
        todo:todolistReduce,
         productsapp:ProductReducer
         }
})