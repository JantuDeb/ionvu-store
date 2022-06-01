import axios from "axios";

const defaultConfig = {
  
  baseURL:
    window.location.protocol === "http:"
    // eslint-disable-next-line no-undef
      ? "http://localhost:4001/api/v1/"
      : "https://store.ionvu.online/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

// Create instance
let axioxPrivate = axios.create(defaultConfig);
let axiosInstance = axios.create(defaultConfig);

// Set the AUTH token for all request
axioxPrivate.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export  {axioxPrivate, axiosInstance};
