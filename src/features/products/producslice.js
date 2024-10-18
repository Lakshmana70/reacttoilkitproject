import { configureStore, createSlice } from "@reduxjs/toolkit";
import productsdata from './Productsdata.json'
const initialState={
   products:productsdata,
   card:[],
   count:0

}
export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
      addtocard:((state,action)=>{
        state.card.push(action.payload)
        
        
      }),
      deletecard:((state,action)=>{
        state.card.splice(action.payload,1)
      })   
    }
})
export const{addtocard,deletecard}=productSlice.actions
const ProductReducer=productSlice.reducer
export default ProductReducer