import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

type featureState ={
    statue:Boolean,
    checkGener:String,
    LikedVideo:any [],
    watchLaterVideo:any [],
    History:any [],
    playlist:any []

}
const initialState:featureState = {
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
        } catch (error:any) {
            console.log(error.msg)
        }
    })

export const deleteLiked = createAsyncThunk("feature/deleteLike",
    async (video:{id:String}) => {
        try {
            const res = await axios.delete(`/api/user/likes/${video.id}`, {
                headers: {
                    "authorization": localStorage.getItem("authToken")
                }
            })
            const data = res.data.likes;
            return data
        } catch (error:any) {
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
        } catch (error:any) {
            console.log(error)
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
        } catch (error:any) {
            console.log(error)
        }
    })


export const deletedWatchLater = createAsyncThunk("feature/deletedWatchLater",
    async (video:{id:String}) => {
        try {
            const res = await axios.delete(`/api/user/watchlater/${video.id}`, {
                headers: {
                    "authorization": localStorage.getItem("authToken")
                }
            })
            const data = res.data.watchlater;5
            return data
        } catch (error:any) {
            console.log(error);
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
        } catch (error:any) {
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
        } catch (error:any) {
            console.log(error.msg)
        }
    })


export const removeHistory = createAsyncThunk("feature/removeHistory",
    async (video:{id:String}) => {
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
        } catch (error:any) {
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
        } catch (error:any) {
            console.log(error)
        }
    })


export const deletePlaylist = createAsyncThunk("feature/deletePlaylist",
    async (a:{_id:String}) => {
        try {
            const res = await axios.delete(`/api/user/playlists/${a._id}`, {
                headers: {
                    authorization: localStorage.getItem("authToken")
                }
            })
            toast.info("playlist deleted")
            const data = res.data.playlists;
            return data
        } catch (error) {
            console.log(error);
        }
    })



///// PlaylistVideo

type PostPlaylistVideoParams = {
    a: { _id: string };
    post: any; // Replace 'any' with the actual type of video if known
};

type DeletePlaylistVideoParams = {
    mapPlaylist: { _id: string };
    item: { src: string };
};
export const getPlaylistVideo = createAsyncThunk("features/getPlaylistVideo",
    async (playlistId:String) => {
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
            console.log(error)
        }
    })

export const postPlaylistVideo = createAsyncThunk("feature/postPlaylistVideo",
    async ({a,post}:PostPlaylistVideoParams) => {
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
    async ({mapPlaylist,item}:DeletePlaylistVideoParams) => {
        try {
            const res = await axios.delete(`/api/user/playlists/${mapPlaylist._id}/${item.src}`, {
                headers: {
                    authorization: localStorage.getItem("authToken")
                }
            })
            const data = res.data.playlists;
            toast.info("video deleted")
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
        suggestVideo: (state, { payload }: PayloadAction<string>) => {
            state.checkGener = payload;
        }
    },
    extraReducers: (builder) => {
        // Like Post
        builder
            .addCase(likePost.pending, (state) => {
                state.status = true;
            })
            .addCase(likePost.fulfilled, (state) => {
                state.status = false;
            })
            .addCase(likePost.rejected, (state) => {
                state.status = false;
            });

        // Like Get
        builder
            .addCase(likeGet.pending, (state) => {
                state.status = true;
            })
            .addCase(likeGet.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.LikedVideo = payload;
            })
            .addCase(likeGet.rejected, (state) => {
                state.status = false;
            });

        // Delete Like
        builder
            .addCase(deleteLiked.pending, (state) => {
                state.status = true;
            })
            .addCase(deleteLiked.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.LikedVideo = payload;
            })
            .addCase(deleteLiked.rejected, (state) => {
                state.status = true;
            });

        // Watch Later Post
        builder
            .addCase(watchLaterPost.pending, (state) => {
                state.status = true;
            })
            .addCase(watchLaterPost.fulfilled, (state) => {
                state.status = false;
            })
            .addCase(watchLaterPost.rejected, (state) => {
                state.status = false;
            });

        // Watch Later Get
        builder
            .addCase(watchlaterGet.pending, (state) => {
                state.status = true;
            })
            .addCase(watchlaterGet.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.watchLaterVideo = payload;
            })
            .addCase(watchlaterGet.rejected, (state) => {
                state.status = true;
            });

        // Delete Watch Later
        builder
            .addCase(deletedWatchLater.pending, (state) => {
                state.status = true;
            })
            .addCase(deletedWatchLater.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.watchLaterVideo = payload;
            })
            .addCase(deletedWatchLater.rejected, (state) => {
                state.status = true;
            });

        // Post History
        builder
            .addCase(HistoryPost.pending, (state) => {
                state.status = true;
            })
            .addCase(HistoryPost.fulfilled, (state) => {
                state.status = false;
            })
            .addCase(HistoryPost.rejected, (state) => {
                state.status = false;
            });

        // Get History
        builder
            .addCase(HistoryGet.pending, (state) => {
                state.status = true;
            })
            .addCase(HistoryGet.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.History = payload;
            })
            .addCase(HistoryGet.rejected, (state) => {
                state.status = true;
            });

        // Remove History
        builder
            .addCase(removeHistory.pending, (state) => {
                state.status = true;
            })
            .addCase(removeHistory.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.History = payload;
            })
            .addCase(removeHistory.rejected, (state) => {
                state.status = true;
            });

        // Clear History
        builder
            .addCase(clearHistory.pending, (state) => {
                state.status = true;
            })
            .addCase(clearHistory.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.History = payload;
            })
            .addCase(clearHistory.rejected, (state) => {
                state.status = true;
            });

        // Playlist Add
        builder
            .addCase(playListPost.pending, (state) => {
                state.status = true;
            })
            .addCase(playListPost.fulfilled, (state) => {
                state.status = false;
            })
            .addCase(playListPost.rejected, (state) => {
                state.status = true;
            });

        // Playlist Get
        builder
            .addCase(playListGet.pending, (state) => {
                state.status = true;
            })
            .addCase(playListGet.fulfilled, (state, { payload }: PayloadAction<{ playlists: any[] }>) => {
                state.status = false;
                state.playlist = payload.playlists;
            })
            .addCase(playListGet.rejected, (state) => {
                state.status = true;
            });

        // Remove Playlist
        builder
            .addCase(deletePlaylist.pending, (state) => {
                state.status = true;
            })
            .addCase(deletePlaylist.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.playlist = payload;
            })
            .addCase(deletePlaylist.rejected, (state) => {
                state.status = true;
            });

        // Playlist Video Add
        builder
            .addCase(postPlaylistVideo.pending, (state) => {
                state.status = true;
            })
            .addCase(postPlaylistVideo.fulfilled, (state) => {
                state.status = false;
            })
            .addCase(postPlaylistVideo.rejected, (state) => {
                state.status = true;
            });

        // Playlist Video Get
        builder
            .addCase(getPlaylistVideo.pending, (state) => {
                state.status = true;
            })
            .addCase(getPlaylistVideo.fulfilled, (state, { payload }: PayloadAction<{ playlists: any[] }>) => {
                state.status = false;
                state.playlist = payload.playlists;
            })
            .addCase(getPlaylistVideo.rejected, (state) => {
                state.status = true;
            });

        // Remove Playlist Video
        builder
            .addCase(deletePlaylistVideo.pending, (state) => {
                state.status = true;
            })
            .addCase(deletePlaylistVideo.fulfilled, (state, { payload }: PayloadAction<any[]>) => {
                state.status = false;
                state.playlist = payload;
            })
            .addCase(deletePlaylistVideo.rejected, (state) => {
                state.status = true;
            });
    },
})

export default featureSlice.reducer