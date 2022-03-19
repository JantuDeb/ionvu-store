import axios from "axios";

const defaultConfig = {
  // eslint-disable-next-line no-undef
  baseURL: location.protocol ==="http:"? process.env.REACT_APP_API_BASE_URL :"https://ionvu-api.herokuapp.com/api/v1/",
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
