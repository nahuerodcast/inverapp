import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { useAuth } from "../../contexts/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

export const Login = ({ ...props }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signInWithGoogle, currentUser } = useAuth();
  const { colorMode } = useColorMode();

  useEffect(() => {
    currentUser && setIsSubmitting(false);
  }, [currentUser]);

  return (
    <>
      <Button
        rightIcon={<FaGoogle />}
        color={"white"}
        // color={"white"}
        colorScheme={"blackAlpha"}
        bg={"#11151c"}
        // _hover={{ bg: "#8c9455", color: "#f4f6e4" }}
        // color={"black"}
        p={"20px"}
        // variant="outline"
        borderRadius={"lg"}
        fontWeight={600}
        isLoading={isSubmitting}
        w="100%"
        onClick={() => {
          setIsSubmitting(true);
          signInWithGoogle();
        }}
        {...props}
      >
        Ingresar
      </Button>
    </>
  );
};
