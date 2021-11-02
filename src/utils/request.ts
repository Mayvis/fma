import axios from "axios";

const service = axios.create({
  // https://vitejs.dev/guide/env-and-mode.html
  baseURL: import.meta.env.VITE_BASE_URL + "",
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default service;
