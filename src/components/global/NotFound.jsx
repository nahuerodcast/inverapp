import React from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" my={150}>
      <WarningIcon h={16} w={16} color="blue.700" />
      <Heading fontWeight="extrabold" fontSize="xx-large" mt={2}>
        Sección en desarrollo
      </Heading>
      <Heading as="p" fontWeight="medium" fontSize="x-large">
        Disculpe las molestias
      </Heading>

      <Button
        mt={4}
        onClick={() => navigate("/")}
        leftIcon={<FaArrowAltCircleLeft />}
      >
        Volver a inicio
      </Button>
    </Flex>
  );
};
