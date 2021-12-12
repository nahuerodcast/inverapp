import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { chakra } from "@chakra-ui/system";

export const MyAccount = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <chakra.pre>
        {`jajajajajajaj el usuario es ${JSON.stringify(currentUser, null, 2)}`}
      </chakra.pre>
    </>
  );
};
