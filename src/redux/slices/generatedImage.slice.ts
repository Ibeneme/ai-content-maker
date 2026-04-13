import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

// --- Interfaces ---

export interface GeneratedImage {
    _id: string;
    userId: string;
    url: string;
    prompt: string;
    modelUsed: string;
    generationType: "text-to-image" | "composition";
    inputImageCount: number;
    fileSize: number;
    generationTimeMs: number;
    createdAt: string;
}

interface ImageState {
    gallery: GeneratedImage[];
    isGenerating: boolean;
    loadingGallery: boolean;
    error: string | null;
}

const initialState: ImageState = {
    gallery: [],
    isGenerating: false,
    loadingGallery: false,
    error: null,
};

/**
 * Updated to use FormData
 * Payload now expects: { prompt: string; files: File[] }
 */
export const generateNewImage = createAsyncThunk(
    "images/generate",
    async (payload: { prompt: string; files?: File[] }, { rejectWithValue }) => {
        // 1. Initial Request Log
        console.log("🚀 [Redux] STARTING Image Generation...");
        console.log("📝 Prompt:", payload.prompt);

        try {
            const formData = new FormData();
            formData.append("prompt", payload.prompt);

            // 2. Log and Append Files
            if (payload.files && payload.files.length > 0) {
                console.log(`📂 [Redux] Detected ${payload.files.length} file(s) to upload.`);

                payload.files.forEach((file, index) => {
                    console.log(`📎 File [${index}]: name=${file.name}, size=${file.size} bytes, type=${file.type}`);
                    // Must match backend upload.array("files")
                    formData.append("files", file);
                });
            } else {
                console.log("ℹ️ [Redux] No files attached to this request (Text-only).");
            }

            // 3. Network Request Log
            console.log("📡 [Redux] Sending request to: /generate/generate-image");

            const response = await axiosInstance.post("/generate/generate-image", formData, {
                // Ensure headers are handled for multipart
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            // 4. Success Log
            const result = response.data.data;
            console.log("✅ [Redux] SUCCESS! Image received.");
            console.log("🔗 Result URL:", result.url);
            console.log("⏱️ Duration:", result.durationMs, "ms");

            return result;
        } catch (err: any) {
            // 5. Error Log
            const errorMessage = err.response?.data?.message || err.message;
            console.error("❌ [Redux] GENERATION FAILED!");
            console.error("📛 Error Details:", err.response?.data || err.message);

            return rejectWithValue(errorMessage || "Generation failed");
        }
    }
);

export const fetchUserGallery = createAsyncThunk(
    "images/fetchGallery",
    async (_, { rejectWithValue }) => {
        console.log("📂 [Redux] Fetching user gallery...");
        try {
            const response = await axiosInstance.get("/generate/my-generations");
            console.log(`✅ [Redux] Gallery retrieved. Total: ${response.data.count}`);
            return response.data.data;
        } catch (err: any) {
            console.error("❌ [Redux] Gallery fetch failed:", err.response?.data || err.message);
            return rejectWithValue(err.response?.data?.message || "Could not load gallery");
        }
    }
);

const imageSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        resetImageError: (state) => {
            state.error = null;
        },
        clearGallery: (state) => {
            state.gallery = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(generateNewImage.pending, (state) => {
            state.isGenerating = true;
            state.error = null;
        });
        builder.addCase(generateNewImage.fulfilled, (state, action) => {
            state.isGenerating = false;
            state.gallery.unshift(action.payload);
        });
        builder.addCase(generateNewImage.rejected, (state, action) => {
            state.isGenerating = false;
            state.error = action.payload as string;
        });

        builder.addCase(fetchUserGallery.pending, (state) => {
            state.loadingGallery = true;
            state.error = null;
        });
        builder.addCase(fetchUserGallery.fulfilled, (state, action) => {
            state.loadingGallery = false;
            state.gallery = action.payload;
        });
        builder.addCase(fetchUserGallery.rejected, (state, action) => {
            state.loadingGallery = false;
            state.error = action.payload as string;
        });
    },
});

export const { resetImageError, clearGallery } = imageSlice.actions;
export default imageSlice.reducer;