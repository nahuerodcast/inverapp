import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

export const Home = () => {
  return (
    <Flex w="100vw" h="50vh" justifyContent="center" alignItems="center">
      <Heading as="h1">Bienvenido</Heading>
    </Flex>
  );
};
