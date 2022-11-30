import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { useAuth } from "../../contexts/AuthContext";
import { FaGoogle } from "react-icons/fa";

export const Login = ({ ...props }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signInWithGoogle, currentUser } = useAuth();

  useEffect(() => {
    currentUser && setIsSubmitting(false);
  }, [currentUser]);

  return (
    <Button
      rightIcon={<FaGoogle />}
      color={"white"}
      colorScheme={"blackAlpha"}
      bg={"#11151c"}
      p={"20px"}
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
  );
};
