import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";

export const UnloggedNavbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-around"
        w="100%"
        p={4}
        boxShadow="lg"
      >
        <Heading fontWeight="extrabold">Inverapp</Heading>
        <Button
          onClick={toggleColorMode}
          variant="ghost"
          p={0}
          borderRadius={9999}
        >
          <WiMoonAltWaningCrescent2 size={20} />
        </Button>
      </Flex>
    </div>
  );
};
