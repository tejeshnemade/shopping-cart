
import {configureStore} from '@reduxjs/toolkit';
import ItemSlice from './ItemSlice';


const Store = configureStore({
   reducer:{
     Item:ItemSlice
   }
})

export default Store
