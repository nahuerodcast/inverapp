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
    <Flex flexDir="row" mt={10} justifyContent="center">
      <Tabs variant="enclosed" w="50%">
        <TabList>
          <Tab>Mi perfil</Tab>
          <Tab>Preferencias</Tab>
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
                size="lg"
                mr={2}
              />
              <Heading as="p" fontSize="sm" fontWeight="medium" mt={1}>
                {currentUser.displayName}
              </Heading>
            </Flex>
            <Flex justifyContent="space-between">
              <Heading as="p" fontSize="sm">
                E-mail: {currentUser.email}
              </Heading>
              <Flex flexDir="column" alignItems="center">
                <Heading as="p" fontSize="sm">
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
            Estado
            <Progress value={80} />
          </TabPanel>
          <TabPanel>
            <Flex justifyContent="space-between" mt={5}>
              <FormControl w="100%">
                <FormLabel mb="0">
                  Habilitar modo {colorMode === "light" ? "oscuro" : "claro"}
                </FormLabel>
                <FormLabel mb="0">
                  adasdasdasdasdasdasdasdasd modo{" "}
                  {colorMode === "light" ? "oscuro" : "claro"}
                </FormLabel>
                <FormLabel mb="0">
                  holaohla modo {colorMode === "light" ? "oscuro" : "claro"}
                </FormLabel>
                <FormLabel mb="0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis,
                  {colorMode === "light" ? "oscuro" : "claro"}
                </FormLabel>
                <FormLabel mb="0">
                  Habilitar modo {colorMode === "light" ? "oscuro" : "claro"}
                </FormLabel>
              </FormControl>
              <Flex flexDir="column">
                <Switch />
                <Switch />
                <Switch />
                <Switch />
                <Switch
                  onChange={toggleColorMode}
                  isChecked={colorMode === "dark" ? true : false}
                />
              </Flex>
            </Flex>
            <Button
              colorScheme="red"
              variant="outline"
              leftIcon={<SmallCloseIcon />}
            >
              Dar de baja
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
