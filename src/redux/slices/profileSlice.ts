import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

// --- Interfaces ---

export interface IdentitySlot {
    _id: string;
    title: string;
    description: string;
    status: "Verified" | "Processing" | "Failed";
    anchorPhotoUrl: string;
    lastUpdated: string;
}

export interface Subscription {
    plan: "Starter" | "Pro" | "Elite";
    maxIdentitySlots: number;
    stripeCustomerId?: string;
}

export interface ProfileData {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    avatarUrl?: string;
    neuralStats: {
        fidelity: number;
        storageUsedBytes: number;
        storageLimitBytes: number;
    };
    storagePercentage: number;
    identitySlots: IdentitySlot[];
    security: {
        twoFactorEnabled: boolean;
        biometricAuthLinked: boolean;
    };
    subscription: Subscription;
}

interface ProfileState {
    data: ProfileData | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProfileState = {
    data: null,
    loading: false,
    error: null,
};

// --- Async Thunks ---

export const fetchProfile = createAsyncThunk(
    "profile/fetch",
    async (_, { rejectWithValue }) => {
        console.log("📡 [Redux] Profile fetch initiated...");
        try {
            const response = await axiosInstance.get("/profile");
            console.log("✅ [Redux] Profile fetch success:", response.data);
            return response.data;
        } catch (err: any) {
            console.error("❌ [Redux] Profile fetch failed:", {
                status: err.response?.status,
                message: err.response?.data?.msg || err.message,
            });
            return rejectWithValue(err.response?.data?.msg || "Failed to load profile");
        }
    }
);

export const updateProfile = createAsyncThunk(
    "profile/update",
    async (profileData: Partial<ProfileData>, { rejectWithValue }) => {
        console.log("📡 [Redux] Initiating Profile Update...", profileData);
        try {
            const response = await axiosInstance.put("/profile/update", profileData);
            console.log("✅ [Redux] Profile Update Success:", response.data);
            return response.data;
        } catch (err: any) {
            console.error("❌ [Redux] Profile Update Failed:", err.response?.data);
            return rejectWithValue(err.response?.data?.msg || "Failed to sync profile");
        }
    }
);

export const updateSecurity = createAsyncThunk(
    "profile/updateSecurity",
    async (securityData: { twoFactorEnabled?: boolean; biometricAuthLinked?: boolean }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.put("/profile/security", securityData);
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.msg || "Security update failed");
        }
    }
);

export const purgeNeuralDNA = createAsyncThunk(
    "profile/purge",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.delete("/profile/purge");
            return response.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.msg || "Purge failed");
        }
    }
);

// --- Slice Definition ---

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        clearProfile: (state) => {
            state.data = null;
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Profile
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            // Update Profile (General)
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.loading = false;
                if (state.data) {
                    state.data = { ...state.data, ...action.payload };
                } else {
                    state.data = action.payload;
                }
            })

            // Update Security
            .addCase(updateSecurity.fulfilled, (state, action) => {
                state.loading = false;
                if (state.data) {
                    state.data.security = action.payload;
                }
            })

            // Purge Neural DNA
            .addCase(purgeNeuralDNA.fulfilled, (state) => {
                state.loading = false;
                if (state.data) {
                    state.data.identitySlots = [];
                    state.data.neuralStats.storageUsedBytes = 0;
                    state.data.storagePercentage = 0;
                }
            })

            // Global Matchers for Loading/Error states
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action: any) => {
                    state.loading = false;
                    state.error = action.payload || "Neural engine error";
                }
            );
    },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;