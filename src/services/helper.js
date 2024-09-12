import { getToken } from "@/auth";
import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      //console.log("config: ", config);
      //console.log("token: ", token);
    }

    return config;
  },
  (error) => Promise.reject(error)
);
