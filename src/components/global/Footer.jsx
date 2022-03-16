import { Button } from "@chakra-ui/button";
import {
  Box,
  Flex,
  Heading,
  Kbd,
  List,
  ListItem,
  Divider,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";

export const Footer = () => {
  return (
    <Flex minH={"30vh"} flexDir={"column"}>
      <Divider />

      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent="center"
        w="100vw"
        mt="20px"
      >
        <Flex flexDir="row" justifyContent="center" alignItems="center">
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            mr={10}
          >
            Inverapp
          </Heading>
          <Flex flexDir="column">
            <Button
              leftIcon={<MdOutlineFacebook />}
              colorScheme="facebook"
              variant="ghost"
            >
              Facebook
            </Button>
            <Button
              leftIcon={<IoLogoInstagram />}
              colorScheme="telegram"
              variant="ghost"
            >
              Instagram
            </Button>
            <Button
              leftIcon={<IoLogoTwitter />}
              colorScheme="twitter"
              variant="ghost"
            >
              Twitter
            </Button>
          </Flex>
        </Flex>
        <Text w={4}></Text>
        <Flex>
          <Flex px={["10vw", "10vw", "0", "0"]}>
            <List m={4}>
              <ListItem>Acciones</ListItem>
              <ListItem>Cedears</ListItem>
              <ListItem>Cripto</ListItem>
              <ListItem>Fondos comunes</ListItem>
              <ListItem>Comprá dólares</ListItem>
            </List>
            <List m={4}>
              <ListItem>Guía de ayuda</ListItem>
              <ListItem>Tutoriales</ListItem>
              <ListItem>Cursos gratis</ListItem>
            </List>
            <List m={4}>
              <ListItem>¿Quienes somos?</ListItem>
              <ListItem>Comisiones</ListItem>
              <ListItem>Trabajá con nosotros</ListItem>
              <ListItem>Asesoramiento</ListItem>
              <ListItem>Otras consultas</ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="100vw"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
      >
        <Flex
          textAlign="center"
          fontSize="sm"
          w="70vw"
          mb={4}
          justifyContent="center"
        >
          Inverapp es una aplicación demo realizada para el proyecto final de
          React en Coderhouse. La misma no representa ninguna entidad
          financiera, bancaria o similar. Tampoco representa ninguna
          recomendación de inversión. Todos los derechos reservados.
        </Flex>
        <Box textAlign="center" fontSize="sm" w="70vw" mb={8}>
          Aplicación realizada en <Kbd>React JS</Kbd>
        </Box>
      </Flex>
    </Flex>
  );
};
