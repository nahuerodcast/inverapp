import { useColorMode } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, Heading } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React,{useState} from "react";
import { Progress, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBalance } from "../../contexts/BalanceContext";
import { Avatar } from "@chakra-ui/avatar";
import { ResetPasswordButton } from "./ResetPasswordButton";
import { BankAccounts } from "./BankAccounts";
import { CgUser } from "react-icons/cg";
import { BsBank } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { Link as ReactLink } from "react-router-dom";



export const Settings = ({ defaultIndex }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth();
  const { defaultCheck, currencySwitch } = useBalance();
  const [loading, setLoading] = useState();

  return (
    <Flex flexDir="row" my={10} justifyContent="center" minH="60vh" >
      <Tabs
        variant="enclosed"
        w={["100%", "100%", "80%", "70%"]}
        px={["10vw", "10vw", "15vw", "15vw"]}
        defaultIndex={defaultIndex}
        isManual
      >
        <TabList>
          <Tab>
            {" "}
            <CgUser /> <Text ml={1} color="">Mi perfil</Text>
          </Tab>
          <Tab>
            {" "}
            <BsBank /> <Text ml={1}>Cuentas bancarias</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex flexDir="column" alignItems="center">
              <Avatar
                name={
                  currentUser.displayName
                    ? currentUser.displayName
                    : currentUser.email
                }
                src={
                  currentUser.photoURL
                    ? currentUser.photoURL
                    : "https://bit.ly/broken-link"
                }
                size="xl"
                mt={8}
              />
              <Heading as="p" fontSize="lg" fontWeight="semibold" mt={1}>
                 {currentUser.displayName}
              </Heading>
              <Heading
                fontSize="sm"
                fontWeight="medium"
                mb={8}
                color="gray.500"
              >
                 Cuenta demo
              </Heading>
            </Flex>
            <Flex justifyContent="space-between">
              <Heading as="p" fontSize="sm" fontWeight="medium">
                E-mail: {currentUser.email}
              </Heading>
              <Flex flexDir="column" alignItems="center">
                <Heading as="p" fontSize="sm" fontWeight="medium">
                  Contraseña: *********
                </Heading>
                <ResetPasswordButton />
              </Flex>
            </Flex>
            <Flex justifyContent="space-between" mt={5}>
              <FormControl w="100%">
                <FormLabel mb="0">
                  Visualizar saldos en
                  {defaultCheck ? (
                    <strong> Dólares</strong>
                  ) : (
                    <strong> Pesos </strong>
                  )}
                </FormLabel>
                <FormLabel mb="0">
                  Habilitar modo {colorMode === "light" ? "oscuro" : "claro"}
                </FormLabel>
              </FormControl>
              <Flex flexDir="column">
                {currencySwitch()}
                <Switch
                  onChange={toggleColorMode}
                  isChecked={colorMode === "dark" ? true : false}
                />
              </Flex>
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Text mt={10} mb={2}>
                Estado del perfil:
              </Text>
              <Text mt={10} mb={2} color="green.400">
                ¡Completo!
              </Text>
            </Flex>

            <Progress value={100} size="xs" colorScheme="blackAlpha"/>
            <Flex mt={6} w="100%" justifyContent="center">
                <ReactLink to="/">
              
              <Button
                leftIcon={<IoMdLogOut />}
                onClick={async (e) => {
                  setLoading(true)
                   e.preventDefault();
                   setTimeout(() => {
                      logout().then(()=>{
                      setLoading(false)
                   });
                    }, 1000);
                    }}
                   
                size="sm"
                p={"20px"}
                borderRadius={"lg"}
                isLoading={loading}
                  >
                    Cerrar sesión
              </Button>
                </ReactLink>
              
            </Flex>
          </TabPanel>
          <TabPanel>
            <BankAccounts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
