import { useColorMode } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, Heading } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import {
  Progress,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Text,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "@chakra-ui/avatar";
import { SmallCloseIcon } from "@chakra-ui/icons";

export const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { currentUser } = useAuth();

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

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
                mr={2}
                mt={8}
              />
              <Heading as="p" fontSize="md" fontWeight="medium" mt={1} mb={8}>
                {currentUser.displayName}
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
                <Button
                  variant="link"
                  fontSize="x-small"
                  onClick={() => setIsOpen(true)}
                >
                  Restablecé tu contraseña
                </Button>

                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Restablecer contraseña
                      </AlertDialogHeader>
                      <AlertDialogBody>
                        Enviaremos a tu correo electrónico un link para que
                        puedas cambiar tu clave.
                      </AlertDialogBody>
                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancelar
                        </Button>
                        <Button colorScheme="blue" onClick={onClose} ml={3}>
                          Restablecer
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
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
          <TabPanel>cuentas</TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
