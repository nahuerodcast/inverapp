import { chakra } from "@chakra-ui/system";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      HOME
      <chakra.pre>
        {`jajajajajajaj el usuario es ${JSON.stringify(currentUser, null, 2)}`}
      </chakra.pre>
    </>
  );
};
