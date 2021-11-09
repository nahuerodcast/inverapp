import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";
import { IoIosArrowDown } from "react-icons/io";

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
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            mr={10}
          >
            Inverapp
          </Heading>
          <Heading
            as="h5"
            color="gray.400"
            fontWeight="medium"
            fontSize={20}
            pr={4}
          >
            <Flex
              flexDir="row"
              fontFamily="Inter,sans-serif"
              alignItems="center"
            >
              Invertí <IoIosArrowDown />
            </Flex>
          </Heading>
          <Heading
            as="h5"
            color="gray.400"
            fontWeight="medium"
            fontSize={20}
            pr={4}
          >
            <Flex
              flexDir="row"
              fontFamily="Inter,sans-serif"
              alignItems="center"
            >
              Nosotros <IoIosArrowDown />
            </Flex>
          </Heading>
          <Heading
            as="h5"
            color="gray.400"
            fontFamily="Inter,sans-serif"
            fontWeight="medium"
            fontSize={20}
            pr={4}
          >
            <Flex
              flexDir="row"
              fontFamily="Inter,sans-serif"
              alignItems="center"
            >
              Aranceles <IoIosArrowDown />
            </Flex>
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <Button
            onClick={toggleColorMode}
            variant="ghost"
            p={0}
            borderRadius={9999}
            color="gray.500"
          >
            <WiMoonAltWaningCrescent2 size={20} />
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            fontFamily="Inter,sans-serif"
            m={2}
          >
            Abrir cuenta
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            fontFamily="Inter,sans-serif"
            m={1}
          >
            Ingresar
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};
