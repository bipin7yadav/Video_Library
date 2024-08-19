import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type AuthState = {
    status: string | null;
    token: string | null;
    user: string | null;
    email: string | null;
};

const initialState:AuthState = {
    status: localStorage.getItem("status"),
    token: localStorage.getItem("authToken") || null,
    user: localStorage.getItem("user") || null,
    email :localStorage.getItem("email") || null
}

export const loginHandler = createAsyncThunk("login/loginHandler", async ({ email, password }: { email: string; password: string }) => {
    try {
        const { data } = await axios.post("/api/auth/login", {
            email,
            password
        });
        localStorage.setItem("authToken", data.encodedToken);
        localStorage.setItem("user", data.foundUser.firstName);
        localStorage.setItem("status", "true");
        toast.success(`welcome back ${data.foundUser.firstName}`);
        return data
    } catch (error:any) {
        console.log(error.message);
    }
})

export const signUpHandler = createAsyncThunk("login/signUpHandler", async ({ firstName, lastName, email, password }:{ firstName: string; lastName: string; email: string; password: string }) => {
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
    } catch (error:any) {
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
            localStorage.removeItem("status")
            localStorage.removeItem("email")
            state.status = false
            toast.info("Successfully logout")
        }
    },
    extraReducers: (builder) => {
        // Handle login
        builder
            .addCase(loginHandler.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginHandler.fulfilled, (state, { payload }) => {
                state.status = "authenticated";
                state.user = payload.foundUser.firstName;
                state.token = payload.encodedToken;
                state.email = payload.foundUser.email;
            })
            .addCase(loginHandler.rejected, (state) => {
                state.status = "failed";
                toast.error("Login failed. Please check your credentials.");
            });

        // Handle signup
        builder
            .addCase(signUpHandler.pending, (state) => {
                state.status = "loading";
            })
            .addCase(signUpHandler.fulfilled, (state, { payload }) => {
                state.status = "authenticated";
                state.token = payload.encodedToken;
                state.user = payload.createdUser.firstName;
                state.email = payload.createdUser.email;
            })
            .addCase(signUpHandler.rejected, (state) => {
                state.status = "failed";
                toast.error("Signup failed. Please check your inputs.");
            });
    },
})

export const { logoutHandler } = login.actions

export default login.reducer;

