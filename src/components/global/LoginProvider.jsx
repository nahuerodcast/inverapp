import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { LoggedContainer } from "../../containers/LoggedContainer";
import { UnloggedContainer } from "../../containers/UnloggedContainer";
import { useAuth } from "../../contexts/AuthContext";

export const LoginProvider = () => {
  const { currentUser, homeLoading } = useAuth();

  return homeLoading ? (
    <Flex w="100vw" h="100vh" justifyContent={"center"} alignItems="center">
      <Spinner />
    </Flex>
  ) : !currentUser ? (
    <UnloggedContainer />
  ) : (
    <LoggedContainer />
  );
};
