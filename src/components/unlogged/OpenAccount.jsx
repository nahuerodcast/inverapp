import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { ImUserPlus } from "react-icons/im";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Checkbox } from "@chakra-ui/checkbox";
import { useToast } from "@chakra-ui/toast";
import { useAuth } from "../../contexts/AuthContext";
import useMounted from "../../hooks/useMounted";

export const OpenAccount = () => {
  //Colors

  //Modals
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const { register } = useAuth();

  const mounted = useMounted();

  return (
    <>
      <Button
        colorScheme="blackAlpha"
        variant="solid"
        fontFamily="Open Sans , sans-serif"
        m={2}
        rightIcon={<ImUserPlus />}
        onClick={onOpen}
        bgColor="gray.600"
        color="white"
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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email || !password) {
                toast({
                  description: "Error",
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                });
              }
              setIsSubmitting(true);
              register(email, password)
                .then((response) => {
                  toast({
                    description: "¡Cuenta creada con éxito!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                })
                .catch((error) => {
                  toast({
                    description: error.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  });
                })
                .finally(() => mounted.current && setIsSubmitting(false));
            }}
          >
            <ModalHeader>Creá tu cuenta</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input ref={initialRef} placeholder="Nombre" />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  placeholder="Ingresá tu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  placeholder="Generá una contraseña segura"
                  type="password"
                  isRequired={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>{" "}
              <Checkbox mt={2} isRequired={true}>
                Acepto términos y condiciones
              </Checkbox>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                isLoading={isSubmitting}
                type="submit"
              >
                ¡Empecemos!
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
