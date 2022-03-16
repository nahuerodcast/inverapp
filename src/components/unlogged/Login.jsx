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
      <Button
        leftIcon={<FaGoogle />}
        colorScheme="red"
        variant="outline"
        isLoading={isSubmitting}
        w="100%"
        onClick={() => signInWithGoogle()}
      >
        Ingresar con Google
      </Button>
    </>
  );
};
