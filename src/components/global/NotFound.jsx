import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="50vh"
    >
      <WarningIcon h={10} w={10} color="red.700" />
      <Heading fontWeight="extrabold"> Error 404 </Heading>
      <Heading as="p" fontWeight="medium">
        Disculpe las molestias
      </Heading>

      <Button mt={4} onClick={() => navigate("/")}>
        Volver a inicio
      </Button>
    </Flex>
  );
};
