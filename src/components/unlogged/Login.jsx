import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { useAuth } from "../../contexts/AuthContext";
import { FaGoogle } from "react-icons/fa";

export const Login = ({ ...props }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <Button
        rightIcon={<FaGoogle />}
        // bg={"green.400"}
        // color={"white"}
        colorScheme={"green"}
        bg={"#ced886"}
        _hover={{ bg: "#8c9455", color: "#f4f6e4" }}
        color={"black"}
        p={"20px"}
        // variant="outline"
        borderRadius={"lg"}
        fontWeight={600}
        isLoading={isSubmitting}
        w="100%"
        onClick={() => signInWithGoogle()}
        {...props}
      >
        Ingresar
      </Button>
    </>
  );
};
