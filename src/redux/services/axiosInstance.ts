import axios, { type InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:9900/api/v1", // Base is already /api
    timeout: 15000000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    async (cfg: InternalAxiosRequestConfig) => {
        if (!navigator.onLine) {
            return Promise.reject(new Error("You are offline."));
        }

        const token = localStorage.getItem("auth_token");
        if (token) {
            cfg.headers.Authorization = `Bearer ${token}`;
        }

        return cfg;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;