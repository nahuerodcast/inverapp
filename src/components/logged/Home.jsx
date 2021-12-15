import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import React from "react";
import { CgTrending, CgTrendingDown } from "react-icons/cg";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";

export const Home = () => {
  return (
    <Flex
      flexDir="column"
      w="100vw"
      h="50vh"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1">Bienvenido,</Heading>
      <Heading as="h1">¿Que deseas hacer?</Heading>
      <Stack direction="row" mt={4}>
        <Button leftIcon={<CgTrending />}>Comprar</Button>
        <Button leftIcon={<CgTrendingDown />}>Vender</Button>
        <Button leftIcon={<BsArrowBarUp />}>Cargar saldo</Button>
        <Button leftIcon={<BsArrowBarDown />}>Retirar fondos</Button>
      </Stack>
    </Flex>
  );
};
