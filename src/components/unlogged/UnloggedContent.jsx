import React from "react";
import { Flex, Heading, Image, Box } from "@chakra-ui/react";
import { FaBitcoin, FaMoneyBillWave } from "react-icons/fa";
import { OpenAccount } from "./OpenAccount";

export const UnloggedContent = () => {
  return (
    <>
      <Flex
        w="100%"
        minH="70vh"
        justifyContent="center"
        alignItems="center"
        px={["10vw", "10vw", "15vw", "15vw"]}
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          w={550}
          textAlign="match-parent"
        >
          <Heading
            as="h1"
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            fontSize={60}
          >
            Inversiones para todo el mundo.
          </Heading>
          <Heading
            as="h1"
            fontWeight="light"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            fontSize={30}
          >
            Simulá tu próxima inversión en criptomonedas.
          </Heading>
          <Flex w="fit-content" p={0}>
            <OpenAccount />
          </Flex>
        </Flex>
        <Flex>
          <Image src="../undrawWallet.png" h="250px" />
        </Flex>
      </Flex>

      <Flex flexDir="row" justifyContent="center" alignItems="center">
        <Box boxShadow="2xl" rounded="xl" mx={12}>
          <Heading
            fontSize={"2xl"}
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            textAlign="center"
            p={8}
          >
            ¿Que es inverapp?
          </Heading>
        </Box>
        <Box boxShadow="2xl" rounded="xl" mx={12} w="250px">
          <Heading
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            textAlign="center"
            w="100%"
            p={8}
          >
            <Flex flexDir="column" alignItems="center">
              Cripto
              <FaBitcoin color="#ff9416" />
            </Flex>
          </Heading>
        </Box>
        <Box boxShadow="2xl" rounded="xl" mx={12} w="250px">
          <Heading
            fontWeight="extrabold"
            fontFamily="Inter,sans-serif"
            letterSpacing="tight"
            textAlign="center"
            p={8}
            m="auto"
          >
            <Flex flexDir="column" alignItems="center">
              Dólar MEP <FaMoneyBillWave color="#8dd070" />
            </Flex>
          </Heading>
        </Box>
      </Flex>
    </>
  );
};
