import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    status: localStorage.getItem("status"),
    token: localStorage.getItem("authToken") || null,
    user: localStorage.getItem("user") || null,
    email :localStorage.getItem("email") || null
}

export const loginHandler = createAsyncThunk("login/loginHandler", async ({ email, password }) => {
    try {
        const { data } = await axios.post("/api/auth/login", {
            email,
            password
        });
        localStorage.setItem("authToken", data.encodedToken);
        localStorage.setItem("user", data.foundUser.firstName);
        localStorage.setItem("status", true);
        toast.success(`welcome back ${data.foundUser.firstName}`);
        return data
    } catch (error) {
        console.log(error.message);
    }
})

export const signUpHandler = createAsyncThunk("login/signUpHandler", async ({ firstName, lastName, email, password }) => {
    console.log(firstName, lastName, email, password, "sig2")

    try {
        const { data } = await axios.post("/api/auth/signup", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        toast.success(`welcome ${data.createdUser.firstName}`)
        return data
    } catch (error) {
        console.log(error)

    }

})


const login = createSlice({
    name: "login",
    initialState,
    reducers: {
        logoutHandler: (state, { payload }) => {
            state.token = localStorage.removeItem("authToken")
            state.user = localStorage.removeItem("user")
            localStorage.removeItem("status", false)
            localStorage.removeItem("email")
            state.status = false
            toast.info("Successfully logout")
        }
    },
    extraReducers: {


        /// Login 

        [loginHandler.pending]: state => {
            state.status = true;
        },
        [loginHandler.fulfilled]: (state, { payload }) => {
            // state.status = false;
            state.user = payload.foundUser.firstName
            state.token = payload.encodedToken;
            localStorage.setItem("email",payload.foundUser.email)
        },
        [loginHandler.rejected]: state => {
            state.status = false;
        },


        /// SignUp

        [signUpHandler.pending]: state => {
            state.status = true
        },
        [signUpHandler.fulfilled]: (state, { payload }) => {
            // state.status = false;
            state.token = payload.encodedToken;
            state.user = payload.createdUser.firstName;
            localStorage.setItem("email",payload.createdUser.email)
        },
        [signUpHandler.rejected]: (state) => {
            state.status = false;
            toast.error("invalid Email or Password")

        }

    }
})

export const { logoutHandler } = login.actions

export default login.reducer;

