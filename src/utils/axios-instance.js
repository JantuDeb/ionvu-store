import axios from "axios";

const defaultConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
let instance = axios.create(defaultConfig);

// Set the AUTH token for all request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
