import axios from "axios";
import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk(
    'video/getPosts',
    async () => {
        try {
            const res = await axios.get("/api/videos");
            const data = res.data.videos;
            return data
        } catch {
            const data = "opps there is an error try again";
            return data
        }
    }
)


type Video = {
    id: string;
    title: string;
    url: string;
    // Add other properties as needed
};
type VideoState = {
    video: any[];      // Array to store video objects (can be more specific if you know the shape of the video objects)
    loading: boolean;  // Boolean to indicate if data is currently being loaded
    search: string;    // String to store the user's search query
    filter: string;    // String to store the filter criteria for videos
};

const initialState: VideoState = {
    video: [],
    loading: false,
    search: "",
    filter: "",
};

export const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        addSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload
        },
        addFilter: (state, action:PayloadAction<string>) => {
            state.filter = action.payload
        },
        

    },

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action: PayloadAction<Video[]>) => {
                state.video = action.payload;
                state.loading = false;
            })
            .addCase(getPosts.rejected, (state) => {
                state.loading = false;
            });
    },
})


export const {  addSearch, addFilter } = videoSlice.actions

export default videoSlice.reducer