import React from "react";
import { LoggedContainer } from "../../containers/LoggedContainer";
import { UnloggedContainer } from "../../containers/UnloggedContainer";
import { useAuth } from "../../contexts/AuthContext";

export const LoginProvider = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  currentUser === undefined && alert("a")
  return <>{!currentUser ? <UnloggedContainer /> : <LoggedContainer />}</>;
};
