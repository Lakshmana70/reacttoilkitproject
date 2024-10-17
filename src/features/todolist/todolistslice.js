import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todosdata:['lakshmana']
}
export const todolistSlice=createSlice({
    name:'todolist',
        initialState,
      reducers:{
        addtodos:(state,action)=>{
            //  state.todosdata = [...state.todosdata,action.payload];
            state.todosdata.push(action.payload)
        },
        deletetodos:(state,action)=>{
            //  state.todosdata.filter((x)=>{return x!==action.payload})
            state.todosdata.splice(action.payload,1)
        }
      }
})
  export const {addtodos,deletetodos}=todolistSlice.actions
const todolistReduce=todolistSlice.reducer
export default todolistReduce