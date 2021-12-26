import { useColorMode } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, Heading } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import { Progress, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "@chakra-ui/avatar";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { ResetPasswordButton } from "./ResetPasswordButton";
import { BankAccounts } from "./BankAccounts";

export const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { currentUser } = useAuth();

  return (
    <Flex flexDir="row" mt={10} justifyContent="center" h="60vh">
      <Tabs variant="enclosed" w="50%">
        <TabList>
          <Tab>Mi perfil</Tab>
          <Tab>Cuentas bancarias</Tab>
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
              <Heading as="p" fontSize="lg" fontWeight="medium" mt={1}>
                {currentUser.displayName}
              </Heading>
              <Heading
                fontSize="sm"
                fontWeight="medium"
                mb={8}
                color="gray.500"
              >
                Cuenta plus gold
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
                <FormLabel mb="0">Apalancamiento habilitado</FormLabel>
                <FormLabel mb="0">
                  Habilitar modo {colorMode === "light" ? "oscuro" : "claro"}
                </FormLabel>
              </FormControl>
              <Flex flexDir="column">
                <Switch />
                <Switch
                  onChange={toggleColorMode}
                  isChecked={colorMode === "dark" ? true : false}
                />
              </Flex>
            </Flex>
            <Text mt={10} mb={2}>
              Estado del perfil:
            </Text>
            <Progress value={100} />
            <Flex justifyContent="flex-end" mt={4}>
              <Button
                colorScheme="red"
                variant="outline"
                leftIcon={<SmallCloseIcon />}
              >
                Dar de baja
              </Button>
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
