import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { IoIosArrowDown } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Login } from "./Login";

export const UnloggedNavbar = () => {
  //Colors
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        px={["10vw", "10vw", "15vw", "15vw"]}
        py={4}
        boxShadow="lg"
      >
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            mr={10}
          >
            Inverapp
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            m={0}
            borderRadius={9999}
            color="gray.500"
          >
            <WiMoonAltWaningCrescent2 size={20} />
          </Button>

          <Login />
        </Flex>
      </Flex>
    </>
  );
};
