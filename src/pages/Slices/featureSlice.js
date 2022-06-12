import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    statue: true,
    checkGener: "",
    LikedVideo: [],
    watchLaterVideo: [],
    History: [],
    playlist: [],
}


///// Like


export const likePost = createAsyncThunk("feature/likePost",
    async (video) => {
        try {
            const res = await axios.post("/api/user/likes", {
                video: video
            }, {
                headers: {
                    "authorization": localStorage.getItem("authToken")
                }
            })
        } catch (error) {
            console.log(error.msg)
        }
    })

export const deleteLiked = createAsyncThunk("feature/deleteLike",
    async (video) => {
        try {
            const res = await axios.delete(`/api/user/likes/${video.id}`, {
                headers: {
                    "authorization": localStorage.getItem("authToken")
                }
            })
            const data = res.data.likes;
            console.log(data, "dtat")
            return data
        } catch (error) {
            console.log(error.msg);
        }
    }
)

export const likeGet = createAsyncThunk("features/likeGet",
    async () => {
        try {
            const res = await axios({
                url: "/api/user/likes",
                method: "GET",
                headers: {
                    authorization: localStorage.getItem("authToken")
                },
            })

            const data = res.data.likes;
            return data
        } catch (error) {
            console.log(error.msg)
        }
    })


///// Watchlist

export const watchLaterPost = createAsyncThunk("features/watchLaterPost",
    async (video) => {

        try {
            const res = await axios.post("/api/user/watchlater", {
                video: video
            }, {
                headers: {
                    "authorization": localStorage.getItem("authToken")
                }
            })
        } catch (error) {
            console.log(error)
        }

    })


export const watchlaterGet = createAsyncThunk("features/watchLaterGet",
    async () => {
        try {
            const res = await axios({
                url: "/api/user/watchlater",
                method: "GET",
                headers: {
                    authorization: localStorage.getItem("authToken")
                },
            })

            const data = res.data.watchlater;
            return data
        } catch (error) {
            console.log(error.msg)
        }
    })


export const deletedWatchLater = createAsyncThunk("feature/deletedWatchLater",
    async (video) => {
        try {
            const res = await axios.delete(`/api/user/watchlater/${video.id}`, {
                headers: {
                    "authorization": localStorage.getItem("authToken")
                }
            })
            const data = res.data.watchlater;
            return data
        } catch (error) {
            console.log(error.msg);
        }
    }
)



///// History

export const HistoryPost = createAsyncThunk("features/HistoryPost",
    async (video) => {

        try {
            const res = await axios.post("/api/user/history", {
                video: video
            }, {
                headers: {
                    "authorization": localStorage.getItem("authToken")
                }
            })
        } catch (error) {
            console.log(error.msg)
        }

    })

export const HistoryGet = createAsyncThunk("features/HistoryGet",
    async () => {
        try {
            const res = await axios({
                url: "/api/user/history",
                method: "GET",
                headers: {
                    authorization: localStorage.getItem("authToken")
                },
            })

            const data = res.data.history;
            return data
        } catch (error) {
            console.log(error.msg)
        }
    })


export const removeHistory = createAsyncThunk("feature/removeHistory",
    async (video) => {
        try {
            const res = await axios.delete(`/api/user/history/${video.id}`, {
                headers: {
                    authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data.history;
            console.log(data, "wasdfg");
            return data
        } catch (error) {
            console.log(error.msg);
        }
    })

export const clearHistory = createAsyncThunk("feature/removeHistory",
    async (video) => {
        try {
            const res = await axios.delete(`/api/user/history/all`, {
                headers: {
                    authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data.history;
            console.log(data, "wasdfg");
            return data
        } catch (error) {
            console.log(error.msg);
        }
    }


)



///////    playlist 


export const playListPost = createAsyncThunk("features/playListPost",
async (body) => {
        try {
            const res = await axios.post(`/api/user/playlists`, {
                playlist: body,
            }, {
                headers: {
                    authorization : localStorage.getItem("authToken")
                }
            })
        } catch (error) {
            console.log(error.msg)
        }
    }
)

export const playListGet = createAsyncThunk("features/playListGet",
    async () => {
        try {
            const res = await axios.get(
                 "/api/user/playlists",
            {
                headers: { authorization: localStorage.getItem("authToken") },
            }
            )

            const data = res.data;
            return data
        } catch (error) {
            console.log(error)
        }
    })


export const deletePlaylist = createAsyncThunk("feature/deletePlaylist",
    async (a) => {
        try {
            const res = await axios.delete(`/api/user/playlists/${a._id}`, {
                headers: {
                    authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data.playlists;
            return data
        } catch (error) {
            console.log(error);
        }
    })



///// PlaylistVideo


export const getPlaylistVideo = createAsyncThunk("features/getPlaylistVideo",
    async () => {
        try {
            const res = await axios({
                url: `/api/user/playlists/${playlistId}`,
                method: "GET",
                headers: {
                    authorization: localStorage.getItem("authToken")
                },
            })

            const data = res.data.playlists;
            return data
        } catch (error) {
            console.log(error.msg)
        }
    })

export const postPlaylistVideo = createAsyncThunk("feature/postPlaylistVideo",
    async ({a,post}) => {
        try {
            const res = await axios.post(`/api/user/playlists/${a._id}`, {
                video: post
            }, {
                headers: {
                    authorization: localStorage.getItem("authToken")
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
)

export const deletePlaylistVideo = createAsyncThunk("feature/deletePlaylistVideo",
    async ({mapPlaylist,item}) => {
        console.log(mapPlaylist,"plid")
        console.log(item,"src");
        try {
            const res = await axios.delete(`/api/user/playlists/${mapPlaylist._id}/${item.src}`, {
                headers: {
                    authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data.playlists;
            console.log(res,"deltee____________pppp")
            return data
        } catch (error) {
            console.log(error.msg);
        }
    }


)

const featureSlice = createSlice({
    name: "features",
    initialState,
    reducers: {
        suggestVideo: (state, { payload }) => {
            state.checkGener = payload;
        }
    },
    extraReducers: {


        /// Like  Post
        [likePost.pending]: (state) => {
            state.status = true;
        },
        [likePost.fulfilled]: (state) => {
            state.status = false;
        },
        [likePost.rejected]: (state) => {
            state.status = false
        },



        ///Like Get

        [likeGet.pending]: (state) => {
            state.status = true;
        },
        [likeGet.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.LikedVideo = payload
        },
        [likeGet.rejected]: (state) => {
            state.status = false
        },

        /// Delete Like

        [deleteLiked.pending]: (state) => {
            state.status = true;
        },
        [deleteLiked.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.LikedVideo = payload
        },
        [deleteLiked.rejected]: (state, { payload }) => {
            state.status = true
        },


        //// watchlater Post

        [watchLaterPost.pending]: (state) => {
            state.status = true;
        },
        [watchLaterPost.fulfilled]: (state) => {
            state.status = false;
        },
        [watchLaterPost.rejected]: (state) => {
            state.status = false
        },


        // Watchlater Get

        [watchlaterGet.pending]: (state) => {
            state.status = true;
        },
        [watchlaterGet.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.watchLaterVideo = payload;
        },
        [watchlaterGet.pending]: (state) => {
            state.status = true
        },

        /// Delete WatchLater

        [deletedWatchLater.pending]: (state) => {
            state.status = true
        },
        [deletedWatchLater.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.watchLaterVideo = payload;
        },
        [deletedWatchLater.rejected]: (state) => {
            state.status = true
        },



        /// Post History

        [HistoryPost.pending]: (state) => {
            state.status = true;
        },
        [HistoryPost.fulfilled]: (state) => {
            state.status = false;
        },
        [HistoryPost.rejected]: (state) => {
            state.status = false
        },

        /// Get History 

        [HistoryGet.pending]: (state) => {
            state.status = true;
        },
        [HistoryGet.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.History = payload;
        },
        [HistoryGet.pending]: (state) => {
            state.status = true
        },

        /// Remove History 

        [removeHistory.pending]: (state) => {
            state.status = true;
        },
        [removeHistory.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.History = payload;
        },
        [removeHistory.pending]: (state) => {
            state.status = true
        },

        /// Clear History 

        [clearHistory.pending]: (state) => {
            state.status = true;
        },
        [clearHistory.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.History = payload;
        },
        [clearHistory.pending]: (state) => {
            state.status = true
        },


        /// playlist add 

        [playListPost.pending]:(state)=>{
            state.status = true;
        },
        [playListPost.fulfilled]:(state)=>{
            state.status = false;
        },
        [playListPost.rejected]:(state)=>{
            state.status = true
        },


        ///playlist get

        [playListGet.pending]: (state) => {
            state.status = true;
        },
        [playListGet.fulfilled]: (state, { payload }) => {
            state.status = false;
            console.log(payload,"====");
            state.playlist = payload.playlists;
        },
        [playListGet.pending]: (state) => {
            state.status = true
        },


        /// remove playlist 

        [deletePlaylist.pending]: (state) => {
            state.status = true;
        },
        [deletePlaylist.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.playlist = payload;
        },
        [deletePlaylist.pending]: (state) => {
            state.status = true
        },

        /// playlist Video add 

        [postPlaylistVideo.pending]:(state)=>{
            state.status = true;
        },
        [postPlaylistVideo.fulfilled]:(state)=>{
            state.status = false;
        },
        [postPlaylistVideo.rejected]:(state)=>{
            state.status = true
        },


        ///playlist video get

        [getPlaylistVideo.pending]: (state) => {
            state.status = true;
        },
        [getPlaylistVideo.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.playlist = payload.playlists;
        },
        [getPlaylistVideo.pending]: (state) => {
            state.status = true
        },


        /// remove playlist  video

        [deletePlaylistVideo.pending]: (state) => {
            state.status = true;
        },
        [deletePlaylistVideo.fulfilled]: (state, { payload }) => {
            state.status = false;
            state.playlist = payload;
        },
        [deletePlaylistVideo.pending]: (state) => {
            state.status = true
        },

    }
})

export default featureSlice.reducer