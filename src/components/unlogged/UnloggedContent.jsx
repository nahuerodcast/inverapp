import React from "react";
import { Flex, Heading, Image, Button } from "@chakra-ui/react";
import { ImUserPlus } from "react-icons/im";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";

export const UnloggedContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <Flex
        w="100vw"
        height="70vh"
        justifyContent="center"
        alignItems="center"
        px="200px"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          w={550}
          textAlign="match-parent"
        >
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            fontSize={60}
          >
            Inversiones para todo el mundo.
          </Heading>
          <Heading
            as="h1"
            fontWeight="light"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            fontSize={30}
          >
            Invertí desde tu celular en todos los activos que quieras.
          </Heading>
          <Button
            colorScheme="dark"
            bgColor="gray.900"
            color="white"
            variant="solid"
            fontFamily="Inter,sans-serif"
            mt={4}
            rightIcon={<ImUserPlus />}
            w="fit-content"
            onClick={onOpen}
          >
            Abrir cuenta
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Creá tu cuenta</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Nombre"
                    isRequired={true}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>E-mail</FormLabel>
                  <Input placeholder="Ingresá tu e-mail" isRequired={true} />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    placeholder="Generá una contraseña segura"
                    type="password"
                    isRequired={true}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Guardar
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Flex>
          <Image src="../undrawWallet.png" h="250px" />
        </Flex>
      </Flex>
    </>
  );
};
