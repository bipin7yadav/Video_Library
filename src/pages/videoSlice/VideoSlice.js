import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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

export const videoSlice = createSlice({
    name: "video",
    initialState: {
        key: '',
        video: [],
        loading: false,
        history: [],
        search: "",
        filter: "",
        likedVideos: [],
        watchLater: [],
        playList: [],
        addList: {},
        playKey: ""
    },
    reducers: {
        addHistory: (state, action) => {
            state.history = [...state.history, { ...action.payload }]
        },
        addSearch: (state, action) => {
            state.search = action.payload
        },
        addFilter: (state, action) => {
            state.filter = action.payload
        },
        addVideo: (state, action) => {
            state.video = action.payload
        },
        addWatch: (state, action) => {
            state.watchLater = [...state.watchLater, { ...action.payload }]
        },
        addLike: (state, action) => {
            state.likedVideos = [...state.likedVideos, { ...action.payload }]
        },
        addPlayList: (state, action) => {
            state.playList = [...state.playList, { ...action.payload }]
        },
        deletePlayListItem: (state, action) => {
            state.playList = state.playList.filter((a) => a.id !== action.payload.id)
        },
        addKey: (state, action) => {
            state.key = action.payload
        },
        addplayItem: (state, action) => {
            state.playList.forEach(element => {
                console.log(action.payload)
                if (element.id === state.key) {
                    element.list.push({ ...action.payload })
                }
            });
        },
        add: (state, action) => {
            state.playKey = action.payload
        },
        deleteLike: (state, action) => {
            state.likedVideos = state.likedVideos.filter((a) => a.id !== action.payload.id)
        },
        deleteWatchLater: (state, action) => {
            state.watchLater = state.watchLater.filter((a) => a.id !== action.payload.id)
        },
        deleteHistory: (state, action) => {
            state.history = state.history.filter((a) => a.id !== action.payload.id)
        }

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


export const { screenPlay, addSearch, addFilter, addVideo, addHistory, addWatch, addLike, addPlayList, deletePlayListItem, addplayItem, addKey
    , add, deleteLike, deleteWatchLater, deleteHistory } = videoSlice.actions

export default videoSlice.reducer