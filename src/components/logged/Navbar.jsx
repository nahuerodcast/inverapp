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
import { useBalance } from "../../contexts/BalanceContext";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { BsBank } from "react-icons/bs";

export const Navbar = () => {
  //Colors
  const { toggleColorMode } = useColorMode();
  const { currencySwitch } = useBalance();

  const { currentUser } = useAuth();
  const [currencyFlag, setCurrencyFlag] = useState(false);
  const [defaultCheck, setDefaultCheck] = useState(false);
  const fbdoc = doc(db, "settings", currentUser.email);

  useEffect(() => {
    onSnapshot(fbdoc, (doc) => {
      setDefaultCheck(doc.data().currencyFlag);
    });
  }, []);

  const settings = () => {
    setDoc(fbdoc, {
      isActive: true,
      currencyFlag: !currencyFlag,
    });
  };

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
            m={0}
            borderRadius={9999}
            onClick={() => {
              setCurrencyFlag(!currencyFlag);
              settings();
            }}
          >
            <Text mr={2}>
              {defaultCheck ? (
                <strong>USD 🇺🇸 </strong>
              ) : (
                <strong> ARS 🇦🇷 </strong>
              )}
            </Text>
            {currencySwitch()}
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
