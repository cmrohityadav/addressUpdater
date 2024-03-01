import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allAddress:[],
    tempObject:null,
}

 const addressSlice=createSlice({
    name:"addressStore",
    initialState,
    reducers:{
        addAdressToStore:(state,action)=>{
            state.allAddress=action.payload

        },
        deleteAdressToStore:(state,action)=>{
            state.allAddress=state.allAddress.filter((eachAdress)=> (eachAdress.id!==action.payload))
        },
        editAdressToStore:(state,action)=>{
            state.tempObject=action.payload
        },


    }

})

export const {addAdressToStore,deleteAdressToStore,editAdressToStore}=addressSlice.actions;
export default addressSlice.reducer