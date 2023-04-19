import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  /* --------------  firebase auth info start-------------------*/
  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (user, name, imgUrl) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: imgUrl,
    });
  };

  // get user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // observer
    return () => unsubscribe();
  }, []);

  const singOutUser = () => {
    return signOut(auth);
  };

  /* --------------  firebase auth info end-------------------*/

  const info = {
    user,
    loading,
    createUser,
    loginUser,
    singOutUser,
    updateUserProfile,
  };
  console.log(loading);
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
