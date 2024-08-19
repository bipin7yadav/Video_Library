import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../videoSlice/VideoSlice"
import loginReducer from "../Slices/AuthSlice";
import featureSlice from "../Slices/featureSlice";

export const store = configureStore({
    reducer: {
        video: videoReducer,
        login: loginReducer,
        features: featureSlice

    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch