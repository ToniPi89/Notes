import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://1354f8da-69a1-4ede-8e23-3ca811b076b7-dev.e1-eu-north-azure.choreoapis.dev/notes/backend/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
