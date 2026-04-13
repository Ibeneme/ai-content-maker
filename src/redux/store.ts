import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import profileReducer from './slices/profileSlice'
import imagesReducer from './slices/generatedImage.slice'
import storyboardReducer from './slices/storyboardSlice'
import projectSlice from "./slices/projectSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        images: imagesReducer,
        storyboard: storyboardReducer,
        projects: projectSlice,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;