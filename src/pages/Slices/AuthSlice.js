import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: true,
    token: localStorage.getItem("authToken") || null,
}

export const loginHandler = createAsyncThunk("login/loginHandler",async()=>{
    try {
        const {data} = await axios.post("/api/auth/login",{
            email: "adarshbalika@gmail.com",
            password: "adarshBalika123"
        });
        localStorage.setItem("authToken", data.encodedToken);
        return data
    } catch (error) {
        console.log(error.msg);
    }
})


const login = createSlice({
    name:"login",
    initialState,
    reducers:{},
    extraReducers:{
        [loginHandler.pending]:state=>{
            state.status = true;
        },
        [loginHandler.fulfilled]:(state,{payload}) =>{
            state.status=false;
            state.token = payload.encodedToken;
        },
        [loginHandler.rejected]:state=>{
            state.status = false;
        }

    }
})

export default login.reducer;

