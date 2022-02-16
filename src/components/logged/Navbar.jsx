import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Box } from "@chakra-ui/layout";
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
import { RiExchangeDollarLine } from "react-icons/ri";

export const Navbar = () => {
  //Colors
  const { toggleColorMode } = useColorMode();

  const { currentUser } = useAuth();

  const { logout } = useAuth();

  return (
    <div>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px="15vw"
        py={4}
        boxShadow="lg"
      >
        <Flex flexDir="row" alignItems="center" w="100%">
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            mr={10}
          >
            <ReactLink to="/">Inverapp</ReactLink>
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <Button
            variant="ghost"
            p={0}
            m={0}
            borderRadius={9999}
            color="gray.500"
          >
            <RiExchangeDollarLine size={20} />
          </Button>
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            m={0}
            mr={2}
            borderRadius={9999}
            color="gray.500"
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
            <Box boxShadow={"md"} borderRadius={4}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} pl={4}>
                ¡Hola,{" "}
                <strong>
                  {currentUser.displayName
                    ? currentUser.displayName
                    : currentUser.email}
                  !
                </strong>
              </MenuButton>
            </Box>
            <MenuList>
              <MenuGroup title="Perfil">
                <ReactLink to="/mi-cuenta">
                  <MenuItem icon={<FaUserAlt />}>Mi cuenta</MenuItem>
                </ReactLink>
                <ReactLink to="/estado-de-cuenta">
                  <MenuItem icon={<FaFileAlt />}>Estado de cuenta </MenuItem>
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
                <ReactLink to="/aprender">
                  <MenuItem icon={<MdMenuBook />}>Aprender</MenuItem>
                </ReactLink>
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
    </div>
  );
};
