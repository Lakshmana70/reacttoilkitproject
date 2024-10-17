import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0,
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=initialState.count
        }
    }
})
export const {increment,decrement,reset}=counterSlice.actions
const counterReducer=counterSlice.reducer
export default counterReducer