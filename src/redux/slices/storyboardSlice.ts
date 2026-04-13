import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

export interface StoryboardData {
    _id?: string;
    gender: string;
    age: string;
    race?: string;
    ethnicity?: string;
    hairStyle?: string;
    hairColor?: string;
    makeup?: string;
    nails?: string;
    category?: string;
    shoes?: string;
    bag?: string;
    outfitDetails?: string;
    location: string;
    lighting?: string;
    contentIdea: string;
    createdAt?: string;
}

interface StoryboardState {
    list: StoryboardData[];
    activeManifest: StoryboardData | null;
    loading: boolean;
    error: string | null;
}

const initialState: StoryboardState = {
    list: [],
    activeManifest: null,
    loading: false,
    error: null,
};

// --- Async Thunks ---

export const fetchStoryboards = createAsyncThunk(
    "storyboard/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("/storyboard");
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.msg || "Failed to load history");
        }
    }
);

export const createStoryboard = createAsyncThunk(
    "storyboard/create",
    async (data: StoryboardData, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/storyboard", data);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.msg || "Save failed");
        }
    }
);

export const updateStoryboard = createAsyncThunk(
    "storyboard/update",
    async (data: StoryboardData, { rejectWithValue }) => {
        try {
            // Assumes endpoint is /storyboard/:id
            const response = await axiosInstance.put(`/storyboard/${data._id}`, data);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.msg || "Update failed");
        }
    }
);

const storyboardSlice = createSlice({
    name: "storyboard",
    initialState,
    reducers: {
        resetActiveManifest: (state) => {
            state.activeManifest = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStoryboards.fulfilled, (state, action: PayloadAction<StoryboardData[]>) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(createStoryboard.fulfilled, (state, action: PayloadAction<StoryboardData>) => {
                state.loading = false;
                state.list.unshift(action.payload);
                state.activeManifest = action.payload;
            })
            .addCase(updateStoryboard.fulfilled, (state, action: PayloadAction<StoryboardData>) => {
                state.loading = false;
                const index = state.list.findIndex(item => item._id === action.payload._id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
                state.activeManifest = action.payload;
            })
            .addMatcher((action) => action.type.endsWith("/pending"), (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher((action) => action.type.endsWith("/rejected"), (state, action: any) => {
                state.loading = false;
                state.error = action.payload || "Operation failed";
            });
    },
});

export const { resetActiveManifest } = storyboardSlice.actions;
export default storyboardSlice.reducer;