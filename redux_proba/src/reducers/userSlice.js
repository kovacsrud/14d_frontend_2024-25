import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers=createAsyncThunk('users/fetchusers',async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
})

const userSlice=createSlice({
    name:"users",
    initialState:{
        userList:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true,
            state.error=null
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false,
            state.userList=action.payload
        })
        .addCase(fetchUsers.rejected,(state)=>{
            state.loading=false,
            state.error="Hiba a letöltés során"
        })
    }
});

export default userSlice.reducer;