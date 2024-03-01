import { configureStore } from "@reduxjs/toolkit";
import addressSliceStore from "./addressSlice.js"
const store=configureStore({
    reducer:{
        addressStore:addressSliceStore,
        
    }
})


export default store;