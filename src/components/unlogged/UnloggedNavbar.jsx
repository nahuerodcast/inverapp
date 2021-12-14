import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { OpenAccount } from "./OpenAccount";
import { Login } from "./Login";

export const UnloggedNavbar = () => {
  //Colors
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px="200px"
        py={2}
        boxShadow="lg"
      >
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            mr={10}
          >
            Inverapp
          </Heading>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<IoIosArrowDown />}
              color="gray.400"
            >
              Invertí
            </MenuButton>
            <MenuList>
              <MenuItem>Acciones</MenuItem>
              <MenuItem>Cedears</MenuItem>
              <MenuItem>Cripto</MenuItem>
              <MenuItem>Fondos comunes</MenuItem>
              <MenuItem>Comprá dólares</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<IoIosArrowDown />}
              color="gray.400"
            >
              Aprendé
            </MenuButton>
            <MenuList>
              <MenuItem>Guía de ayuda</MenuItem>
              <MenuItem>Tutoriales</MenuItem>
              <MenuItem>Cursos gratis</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<IoIosArrowDown />}
              color="gray.400"
            >
              FAQ
            </MenuButton>
            <MenuList>
              <MenuItem>¿Quienes somos?</MenuItem>
              <MenuItem>Comisiones</MenuItem>
              <MenuItem>Cargar y extraer saldo</MenuItem>
              <MenuItem>Asesoramiento</MenuItem>
              <MenuItem>Otras consultas</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex alignItems="center">
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            m={0}
            borderRadius={9999}
            color="gray.500"
          >
            <WiMoonAltWaningCrescent2 size={20} />
          </Button>
          <OpenAccount />
          <Login />
        </Flex>
      </Flex>
    </>
  );
};
