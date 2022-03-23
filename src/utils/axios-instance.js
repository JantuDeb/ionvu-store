import axios from "axios";

const defaultConfig = {
  
  baseURL:
    window.location.protocol === "http:"
    // eslint-disable-next-line no-undef
      ? process.env.REACT_APP_API_BASE_URL
      : "https://ionvu-api.herokuapp.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
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
