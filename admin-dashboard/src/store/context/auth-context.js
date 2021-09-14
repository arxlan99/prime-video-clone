import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "../reducers/auth";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(authState.user));
  }, [authState.user]);

  const authCtx = {
    user: authState.user,
    isFetching: authState.isFetching,
    error: authState.error,
    dispatchAuth,
  };

  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
};
