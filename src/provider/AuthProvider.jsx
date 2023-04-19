import React, { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  /* --------------  firebase auth info start-------------------*/
  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (user, name) => {
    return updateProfile(user, {
      displayName: name,
    });
  };

  /* --------------  firebase auth info end-------------------*/

  const info = {
    createUser,
    loginUser,
    updateUserProfile,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
