import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../videoSlice/VideoSlice"
import loginReducer  from "../Slices/AuthSlice";
import featureSlice from "../Slices/featureSlice";

export const store = configureStore({
    reducer : {
        video : videoReducer,
        login:loginReducer,
        features : featureSlice
        // loginSingup : authReducer

    },
})