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
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useEffect } from "react";

//
//
//
//
export const AuthContext = createContext();

const gProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const auth = getAuth(app);

const UserContex = ({ children }) => {
  //
  const [user, setUSer] = useState([]);
  const [loader, setLoader] = useState(true);

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
  // login gooogle
  const googleLogin = () => {
    return signInWithPopup(auth, gProvider);
  };
  //
  // github login
  const githubLogin = () => {
    return signInWithPopup(auth, gitProvider);
  };
  // crrent user track
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) => {
      setUSer(currentUSer);
      setLoader(false);
    });
    return () => unsubscribe();
    //
    //
  }, []);

  // logOut
  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    loader,
    googleLogin,
    user,
    logOut,
    Register,
    loginUser,
    updateName,
    githubLogin,
  };
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
