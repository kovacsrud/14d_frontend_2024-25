import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'szamlalo',
    initialState:{
        value:0
    },
    reducers:{
        novel:(state)=>{
            state.value+=1;
        },
        csokkent:(state)=>{
            state.value-=1;
        },
        novelErtekkel:(state,action)=>{
            state.value+=action.payload;
        }
    }
});

export const {novel,csokkent,novelErtekkel}=counterSlice.actions;

export default counterSlice.reducer