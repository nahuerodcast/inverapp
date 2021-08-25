import React from "react";
import App from "../../App";
import { useLogin } from "../../context/LoginProvider";
import { Login } from "../../Login/Login";

export const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <App /> : <Login />;
};
