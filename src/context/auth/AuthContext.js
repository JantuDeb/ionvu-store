import { createContext, useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance, axioxPrivate } from "../../utils/axios-instance";
import {
  authReducer,
  initialAuthState,
  LOGIN,
  LOGOUT,
  SIGNUP,
} from "./auth-context";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const navigate = useNavigate();
  const signUp = async (user) => {
    try {
      const { data } = await axiosInstance.post("/signup", user);
      if (data.success) {
        authDispatch({ type: SIGNUP, payload: data.user });
        navigate("/", { replace: true });
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
        navigate("/", { replace: true });
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
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ authState, logIn, logOut, signUp, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };