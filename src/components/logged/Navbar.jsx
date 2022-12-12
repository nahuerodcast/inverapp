import React, { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { IoMdLogOut } from "react-icons/io";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  FaCog,
  FaEnvelope,
  FaFileAlt,
  FaMoneyBill,
  FaPlus,
  FaQuestionCircle,
  FaUserAlt,
} from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "@chakra-ui/avatar";
import { MdMenuBook } from "react-icons/md";
import { BsBank } from "react-icons/bs";

export const Navbar = () => {
  //Colors
  const { toggleColorMode } = useColorMode();

  const { currentUser } = useAuth();

  const { logout } = useAuth();

  return (
    <>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px={["10vw", "10vw", "15vw", "15vw"]}
        py={4}
        boxShadow="lg"
      >
        <Flex flexDir="row" alignItems="center" w="100%">
          <ReactLink to="/">
            <Heading
              as="h1"
              fontWeight="700"
              fontFamily="Playfair Display, serif"
              letterSpacing="tight"
              className={"animate__animated animate__fadeIn"}
            >
              Inverapp
            </Heading>
          </ReactLink>
        </Flex>
        <Flex alignItems="center">
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            m={0}
            mr={2}
            borderRadius={9999}
            color="gray.500"
            display={["none", "none", "inherit", "inherit"]}
            _focus={{ boxShadow: "rgb(248,236,212)" }}
          >
            <WiMoonAltWaningCrescent2 size={20} />
          </Button>
          <Menu>
            <Avatar
              name={
                currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email
              }
              src={currentUser.photoURL ? currentUser.photoURL : "./"}
              size="xs"
              mr={2}
            />
            <Box boxShadow={"md"} borderRadius={"lg"}>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                pl={4}
                p={"20px"}
                borderRadius={"lg"}
              >
                <Text
                  display={["none", "none", "unset", "unset"]}
                  fontFamily="Open Sans , sans-serif"
                >
                  ¡Hola,{" "}
                  {currentUser.displayName
                    ? currentUser.displayName
                    : currentUser.email}
                  !
                </Text>
                <Text display={["unset", "unset", "none", "none"]}>
                  Mi cuenta
                </Text>
              </MenuButton>
            </Box>
            <MenuList>
              <MenuGroup title="Perfil">
                <ReactLink to="/mi-cuenta">
                  <MenuItem icon={<FaUserAlt />}>Mi cuenta</MenuItem>
                </ReactLink>
                <ReactLink to="/">
                  <MenuItem icon={<FaFileAlt />}>Estado de cuenta </MenuItem>
                </ReactLink>
                <ReactLink to="/cuentas-bancarias">
                  <MenuItem icon={<BsBank />}>Cuentas bancarias</MenuItem>
                </ReactLink>
                <ReactLink to="/saldo-app">
                  <MenuItem icon={<FaMoneyBill />}>
                    Cargar/retirar saldo
                  </MenuItem>
                </ReactLink>
                <ReactLink to="/operar">
                  <MenuItem icon={<FaPlus />}>Operar</MenuItem>
                </ReactLink>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Ayuda">
                <ReactLink to="/faq">
                  <MenuItem icon={<FaQuestionCircle />}>FAQ</MenuItem>
                </ReactLink>
                {/* <ReactLink to="/aprender">
                  <MenuItem icon={<MdMenuBook />}>Aprender</MenuItem>
                </ReactLink> */}
                <ReactLink to="/mensajeria">
                  <MenuItem icon={<FaEnvelope />}>Mensajería</MenuItem>
                </ReactLink>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <ReactLink to="/configuracion">
                  <MenuItem icon={<FaCog />}>Configuración</MenuItem>
                </ReactLink>
                <ReactLink to="/logout">
                  <MenuItem
                    icon={<IoMdLogOut />}
                    onClick={async (e) => {
                      e.preventDefault();
                      logout();
                    }}
                  >
                    Cerrar sesión
                  </MenuItem>
                </ReactLink>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
};
