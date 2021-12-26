import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const AccountBalance = () => {
  return (
    <Flex
      h="100%"
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex>
        <Heading>Saldo actual:</Heading>
      </Flex>
      <Flex>
        <Heading>Cargar saldo</Heading>
      </Flex>
      <Flex>
        <Heading>Extraer saldo</Heading>
      </Flex>
    </Flex>
  );
};
