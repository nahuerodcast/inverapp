import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      HOME
      <h1>{`jajajajajajaj el usuario es ${currentUser}`}</h1>
    </>
  );
};
