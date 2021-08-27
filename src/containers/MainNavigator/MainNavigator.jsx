import React from "react";
import App from "../../App";
import { useLogin } from "../../context/LoginProvider";
import { Login } from "../../Login/Login";

export const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  let setup = sessionStorage.getItem("setIsLoggedin");
  return isLoggedIn ? <App /> : <Login />;
};
