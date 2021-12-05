import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { IoIosArrowDown, IoMdLogOut } from "react-icons/io";
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
  FaInfoCircle,
  FaMoneyBill,
  FaPlus,
  FaQuestionCircle,
  FaUserAlt,
} from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";

export const Navbar = () => {
  //Colors
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);

  return (
    <div>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px="200px"
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
          <Flex justifyContent="flex-start">
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
                <ReactLink to="/acciones">
                  <MenuItem>Acciones</MenuItem>
                </ReactLink>
                <ReactLink to="/cedears">
                  <MenuItem>Cedears</MenuItem>
                </ReactLink>
                <ReactLink to="/cripto">
                  <MenuItem>Cripto</MenuItem>
                </ReactLink>
                <ReactLink to="/fci">
                  <MenuItem>Fondos comunes</MenuItem>
                </ReactLink>
                <ReactLink to="/usd">
                  <MenuItem>Comprá dólares</MenuItem>
                </ReactLink>
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
                <ReactLink to="/help">
                  <MenuItem>Guía de ayuda</MenuItem>
                </ReactLink>
                <ReactLink to="/tutoriales">
                  <MenuItem>Tutoriales</MenuItem>
                </ReactLink>
                <ReactLink to="/cursos-gratis">
                  <MenuItem>Cursos gratis</MenuItem>
                </ReactLink>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<IoIosArrowDown />}
                color="gray.400"
              >
                Herramientas
              </MenuButton>
              <MenuList>
                <ReactLink to="/cotizaciones">
                  <MenuItem>Cotizaciones</MenuItem>
                </ReactLink>
                <ReactLink to="/graficos">
                  <MenuItem>Gráficos</MenuItem>
                </ReactLink>
                <ReactLink to="/simulador">
                  <MenuItem>Simulador</MenuItem>
                </ReactLink>
                <ReactLink to="/test-inversor">
                  <MenuItem>Test del inversor</MenuItem>
                </ReactLink>
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
                <ReactLink to="/quienes-somos">
                  <MenuItem>¿Quienes somos?</MenuItem>
                </ReactLink>
                <ReactLink to="/comisiones">
                  <MenuItem>Comisiones</MenuItem>
                </ReactLink>
                <ReactLink to="/saldo">
                  <MenuItem>Cargar y extraer saldo</MenuItem>
                </ReactLink>
                <ReactLink to="/asesoramiento">
                  <MenuItem>Asesoramiento</MenuItem>
                </ReactLink>
                <ReactLink to="/otras-consultas">
                  <MenuItem>Otras consultas</MenuItem>
                </ReactLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            m={0}
            mr={1}
            borderRadius={9999}
            color="gray.500"
          >
            <WiMoonAltWaningCrescent2 size={20} />
          </Button>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              ¡Hola, <strong>Nahuel!</strong>
            </MenuButton>
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
                <ReactLink to="/otras-consultas">
                  <MenuItem icon={<FaInfoCircle />}>Otras consultas</MenuItem>
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
                  <MenuItem icon={<IoMdLogOut />}>Cerrar sesión</MenuItem>
                </ReactLink>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </div>
  );
};
