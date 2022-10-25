import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.init";

//
//
//
//
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContex = ({ children }) => {
  const [user, setUSer] = useState([]);

  //
  //
  const LogIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //
  //
  //

  const userInfo = "hello world";
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
