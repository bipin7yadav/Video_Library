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
        search:"",
        filter:"",
        watchLater:[],
        likedVideos:[],
        history:[],
        playList:[],
        addList:{},
        key:"",
        playKey:""

        
    },
    reducers: {
        addSearch: (state, action) => {
            state.search = action.payload
        },
        addFilter: (state, action) => {
            state.filter = action.payload
        },
        addWatch: (state, action) => {
            state.watchLater = [...state.watchLater, { ...action.payload }]
        },
        addLike: (state, action) => {
            state.likedVideos = [...state.likedVideos, { ...action.payload }]
        },
        addHistory: (state, action) => {
            state.history = [...state.history, { ...action.payload }]
        },
        deleteLike: (state, action) => {
            state.likedVideos = state.likedVideos.filter((a) => a.id !== action.payload.id)
        },
        deleteWatchLater: (state, action) => {
            state.watchLater = state.watchLater.filter((a) => a.id !== action.payload.id)
        },
        deleteHistory: (state, action) => {
            state.history = state.history.filter((a) => a.id !== action.payload.id)
        },
        addPlayList: (state, action) => {
            state.playList = [...state.playList, { ...action.payload }]
        },
        deletePlayListItem: (state, action) => {
            state.playList = state.playList.filter((a) => a.id !== action.payload.id)
        },
        addplayItem: (state, action) => {
            state.playList.forEach(element => {
                console.log(action.payload)
                if (element.id === state.key) {
                    element.list.push({ ...action.payload })
                }
            });
        },
        addKey:(state,action)=>{
            state.key = action.payload
        },
        add: (state, action) => {
            state.playKey = action.payload
        },

        


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


export const {addFilter, addSearch , addWatch, addHistory , addLike ,deleteWatchLater,deleteHistory,deleteLike
                ,addPlayList,deletePlayListItem,addplayItem,addKey ,add } = videoSlice.actions

export default videoSlice.reducer