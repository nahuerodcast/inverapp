import React, { useState } from "react";
import { Divider, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { MdOutlineLogin } from "react-icons/md";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { LockIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/toast";
import { useAuth } from "../../contexts/AuthContext";
import { FaGoogle } from "react-icons/fa";
import useMounted from "../../hooks/useMounted";

export const Login = () => {
  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const { login, signInWithGoogle } = useAuth();

  const mounted = useMounted();

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            colorScheme="gray"
            variant="outline"
            fontFamily="Inter,sans-serif"
            m={1}
            rightIcon={<MdOutlineLogin />}
          >
            Ingresar
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email || !password) {
                toast({
                  description: "not ok",
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                });
              }
              setIsSubmitting(true);
              login(email, password)
                .then((response) => {
                  console.log(response);
                  toast({
                    description: "Sesión iniciada con éxito",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                  // navigate.push("/profile");
                })
                .catch((error) => {
                  console.log(error.message);
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
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader textAlign="center">¡Bienvenido!</PopoverHeader>
            <PopoverBody as="form">
              <FormControl my={2} isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  placeholder="Ingresá tu e-mail"
                  id="emailField"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl my={2} mb={4} isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  placeholder="Ingresá tu clave"
                  id="passwordField"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                leftIcon={<LockIcon />}
                colorScheme="teal"
                variant="solid"
                w="100%"
                isLoading={isSubmitting}
                type="submit"
              >
                Acceder
              </Button>
              <Flex justifyContent="center" alignItems="center" my={4}>
                <Divider m={2} />
                <p>o</p>
                <Divider m={2} />
              </Flex>
              <Button
                leftIcon={<FaGoogle />}
                colorScheme="red"
                variant="outline"
                isLoading={isSubmitting}
                w="100%"
                mb={4}
                onClick={() => signInWithGoogle()}
              >
                Iniciar sesión con Google
              </Button>
            </PopoverBody>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
