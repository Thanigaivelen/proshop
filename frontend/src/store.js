// import { configureStore } from '@reduxjs/toolkit';


// const store = configureStore({
//   reducer: {},

// });

// export default store;


import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {apiSlice} from './slices/apiSlice'
 
const store=configureStore({
  reducer:{
   [apiSlice.reducerPath]:apiSlice.reducer, 
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:true,
})
export default store