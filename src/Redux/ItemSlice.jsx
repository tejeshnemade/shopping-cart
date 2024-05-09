
import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
   name: 'card',
   initialState:{
    value:[]
   },
   reducers:{
    AddVal:(state,action)=>{
       state.value = [...state.value, {products:action.payload, Qty:1}];    
    },
    incrementQty:(state,action)=>{
       const id = action.payload
       state.value = state.value.map(ob=>ob.products.id==id ? {...ob,Qty:ob.Qty+1}:ob) 
    }, 
   dicrementQty:(state,action)=>{
      const id = action.payload
      state.value = state.value.map(ob=>ob.products.id==id && ob.Qty>1 ? {...ob,Qty:ob.Qty-1}:ob) 
   },
   RemoveItem:(state,action)=>{
      const id = action.payload
      state.value = state.value.filter(ob=>ob.products.id!==id)
   }
   }
})
 
export default Slice.reducer
export const {AddVal,incrementQty,dicrementQty,RemoveItem } = Slice.actions;