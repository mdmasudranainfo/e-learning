import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useEffect } from "react";

//
//
//
//
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContex = ({ children }) => {
  //
  const [user, setUSer] = useState([]);
  const [loader, setLoader] = useState();

  //
  //
  const Register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //
  const updateName = (prifile) => {
    return updateProfile(auth.currentUser, prifile);
  };
  //
  // singIn
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //
  // crrent user track
  useEffect(() => {
    onAuthStateChanged(auth, (currentUSer) => {
      setUSer(currentUSer);
    });
    //
    //
  }, []);

  // logOut
  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = { user, logOut, Register, loginUser, updateName };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>
        {/*  */}
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContex;
