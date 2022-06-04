import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../videoSlice/VideoSlice"

export const store = configureStore({
    reducer : {
        video : videoReducer,
    
    },
})