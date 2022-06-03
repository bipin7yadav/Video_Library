import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk(
    'video/getPosts',
    async () => {
        try {
            const res = await axios.get("api/videos");
            const data = res.data.videos;
            return data
        } catch {
            const data = "opps there is an error try again";
            
            return data
        }
    }
)

export const videoSlice = createSlice({
    name: "video",
    initialState: {
        
        video: [],
        loading: false,
    },
    reducers: {
        

    },

    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.video = action.payload
            state.loading = false
        },
        [getPosts.rejected]: (state) => {
            state.loading = false
        },
    },
})


export const {  } = videoSlice.actions

export default videoSlice.reducer