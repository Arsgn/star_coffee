import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/FIrebase";
import { Alert } from "@mui/material";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    case " ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const googleProvider = new GoogleAuthProvider();

  async function singInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      try {
        dispatch({
          type: "GET_USER",
          payload: user,
        });
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload: error.message,
        });
      }
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  function logOutUser() {
    signOut(auth)
      .then(() => {
        return <Alert severity="success"></Alert>;
      })
      .catch((error) => {
        return <Alert severity="error">{error.message}</Alert>;
      });
  }
  async function register(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }

  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  }

  const values = {
    singInWithGoogle,
    user: state.user,
    error: state.error,
    logOutUser,
    register,
    login,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
