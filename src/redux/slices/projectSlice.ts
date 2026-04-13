import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../services/axiosInstance";

// --- Interfaces ---

export interface GeneratedAsset {
    _id: string;
    url: string;
    prompt: string;
    modelUsed: string;
    generationType: "text-to-image" | "composition";
    fileSize?: number;
    generationTimeMs?: number;
    createdAt: string;
}

export interface Project {
    _id: string;
    userId: string;
    projectName: string;
    generatedAssets: GeneratedAsset[];
    createdAt: string;
    updatedAt: string;
}

interface ProjectState {
    projects: Project[];
    activeProject: Project | null;
    isGenerating: boolean;
    loadingProjects: boolean;
    error: string | null;
}

const initialState: ProjectState = {
    projects: [],
    activeProject: null,
    isGenerating: false,
    loadingProjects: false,
    error: null,
};

// --- Async Thunks ---

/**
 * Deletes a project from the database and local state.
 */
export const deleteProject = createAsyncThunk(
    "projects/delete",
    async (projectId: string, { rejectWithValue }) => {
        console.log(`🗑️ [Redux] Initiating deletion for Project: ${projectId}`);
        try {
            await axiosInstance.delete(`/project/project/${projectId}`);
            return projectId; // Return the ID so we know which one to remove from state
        } catch (err: any) {
            console.error("❌ [Redux] Deletion Failed:", err.response?.data || err.message);
            return rejectWithValue(err.response?.data?.message || "Deletion failed");
        }
    }
);

/**
 * Generates an image and syncs it to a project.
 */
export const generateProjectImage = createAsyncThunk(
    "projects/generateImage",
    async (payload: { prompt: string; files?: File[]; projectId?: string }, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append("prompt", payload.prompt);

            if (payload.projectId) {
                formData.append("projectId", payload.projectId);
            }

            if (payload.files && payload.files.length > 0) {
                payload.files.forEach((file) => formData.append("files", file));
            }

            const response = await axiosInstance.post("/project/generate-image", formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            return response.data.project;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Generation failed");
        }
    }
);

/**
 * Fetches all user projects
 */
export const fetchUserProjects = createAsyncThunk(
    "projects/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("/project/my-projects");
            return response.data.data;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Could not load projects");
        }
    }
);

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setActiveProject: (state, action: PayloadAction<Project | null>) => {
            state.activeProject = action.payload;
        },
        resetProjectError: (state) => {
            state.error = null;
        },
        clearProjects: (state) => {
            state.projects = [];
            state.activeProject = null;
        }
    },
    extraReducers: (builder) => {
        // --- Generation Logic ---
        builder.addCase(generateProjectImage.pending, (state) => {
            state.isGenerating = true;
            state.error = null;
        });
        builder.addCase(generateProjectImage.fulfilled, (state, action) => {
            state.isGenerating = false;
            const updatedProject = action.payload;
            const index = state.projects.findIndex(p => p._id === updatedProject._id);

            if (index !== -1) {
                state.projects[index] = updatedProject;
            } else {
                state.projects.unshift(updatedProject);
            }
            state.activeProject = updatedProject;
        });
        builder.addCase(generateProjectImage.rejected, (state, action) => {
            state.isGenerating = false;
            state.error = action.payload as string;
        });

        // --- Fetch Logic ---
        builder.addCase(fetchUserProjects.pending, (state) => {
            state.loadingProjects = true;
            state.error = null;
        });
        builder.addCase(fetchUserProjects.fulfilled, (state, action) => {
            state.loadingProjects = false;
            state.projects = action.payload;
        });
        builder.addCase(fetchUserProjects.rejected, (state, action) => {
            state.loadingProjects = false;
            state.error = action.payload as string;
        });

        // --- Delete Logic ---
        builder.addCase(deleteProject.fulfilled, (state, action) => {
            const deletedId = action.payload;
            // Remove from the project list
            state.projects = state.projects.filter(p => p._id !== deletedId);

            // If the deleted project was the active one, clear it
            if (state.activeProject?._id === deletedId) {
                state.activeProject = null;
            }
        });
        builder.addCase(deleteProject.rejected, (state, action) => {
            state.error = action.payload as string;
        });
    },
});

export const { setActiveProject, resetProjectError, clearProjects } = projectSlice.actions;
export default projectSlice.reducer;