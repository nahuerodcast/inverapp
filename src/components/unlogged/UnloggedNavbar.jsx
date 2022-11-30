import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { Login } from "./Login";

export const UnloggedNavbar = () => {
  //Colors
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      boxShadow={
        colorMode === "light"
          ? "10px 10px 40px 6px rgba(0,0,0,0.06)"
          : "10px 10px 40px 6px rgba(0,0,0,0.4)"
      }
      width={"100%"}
      bg={colorMode === "light" ? "#fffefc" : "#151a23"}
      px={["10vw", "10vw", "16vw", "16vw"]}
      py={4}
      mb={16}
      zIndex={10}
    >
      <Flex flexDir="row" alignItems="center" justifyContent="space-between">
        <Heading
          as="h1"
          fontWeight="700"
          fontFamily="Playfair Display, serif"
          letterSpacing="tight"
          className={"animate__animated animate__fadeInLeft"}
        >
          Inverapp
        </Heading>
        <Flex
          alignItems="center"
          className={"animate__animated animate__fadeInRight"}
        >
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            m={0}
            borderRadius={9999}
            color="gray.500"
            mr={1}
            _focus={{ boxShadow: "rgb(248,236,212)" }}
          >
            <WiMoonAltWaningCrescent2 size={20} />
          </Button>
          <Login className={"animate__animated animate__fadeInRight"} />
        </Flex>
      </Flex>
    </Box>
  );
};
