import { createContext, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { axiosInstance, axioxPrivate } from "../../utils/axios-instance";
import {
  authReducer,
  initialAuthState,
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  LOADING,
} from "./auth-context";
import {
  addressReducer,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  GET_ADDRESSES,
} from "./address-reducer";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const [addressState, addressDispatch] = useReducer(addressReducer, {
    addresses: [],
  });
  const navigate = useNavigate();

  const signUp = async (user) => {
    try {
      const { data } = await axiosInstance.post("/signup", user);
      if (data.success) {
        authDispatch({ type: SIGNUP, payload: data.user });
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        navigate(-1);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logIn = async ({ email, password }) => {
    try {
      const { data } = await axiosInstance.post("/login", { email, password });
      if (data.success) {
        authDispatch({ type: LOGIN, payload: data.user });
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      const { data } = await axioxPrivate.get("/logout");
      if (data.success) {
        authDispatch({ type: LOGOUT });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const savePhoto = async ({ name, email, file }) => {
    if (!name || !email)
      return authDispatch({
        type: ERROR,
        payload: { error: "Name and email is required" },
      });
    authDispatch({ type: LOADING, payload: { loading: true } });
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    if (file) formData.append("photo", file);
    try {
      const { data } = await axiosInstance.post(
        "/user/update_user_details",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data.success) {
        authDispatch({ type: LOGIN, payload: { user: data.user } });
      }
    } catch (error) {
      authDispatch({ type: ERROR, payload: { error: error.message } });
    } finally {
      authDispatch({ type: LOADING, payload: { loading: false } });
    }
  };

  const getAddresses = async () => {
    try {
      const { data } = await axioxPrivate.get("/user/addresses");
      addressDispatch({
        type: GET_ADDRESSES,
        payload: {
          addresses: data.addresses,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addAddress = async (address) => {
    try {
      const { data } = await axioxPrivate.post("/user/addresses", address);
      if (data.success) {
        addressDispatch({
          type: ADD_ADDRESS,
          payload: {
            address: data.address,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAddress = async (_id) => {
    try {
      const { data } = await axioxPrivate.delete(
        "/user/addresses/" + _id
      );
      if (data.success) {
        addressDispatch({
          type: DELETE_ADDRESS,
          payload: {
            _id,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && authDispatch({ type: LOGIN, payload: user });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        logIn,
        logOut,
        signUp,
        savePhoto,
        authDispatch,
        addresses: addressState.addresses,
        getAddresses,
        addAddress,
        deleteAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
