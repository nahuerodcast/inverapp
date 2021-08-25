import React, { useState, useContext } from "react";
import { createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
