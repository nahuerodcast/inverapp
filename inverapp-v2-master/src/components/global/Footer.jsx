import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Kbd } from "@chakra-ui/layout";
import React from "react";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";

export const Footer = () => {
  return (
    <Flex
      h={"30vh"}
      flexDir={"column"}
      px={["10vw", "10vw", "16vw", "16vw"]}
      bg="#fffefc"
    >
      {/* <Divider /> */}
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent="space-between"
        mt="20px"
      >
        <Heading
          as="h1"
          fontWeight="extrabold"
          fontFamily="Open Sans , sans-serif"
          letterSpacing="tight"
          mr={10}
        >
          Inverapp
        </Heading>
        <Flex flexDir="column">
          <Button
            leftIcon={<MdOutlineFacebook />}
            colorScheme="facebook"
            variant="ghost"
          >
            Facebook
          </Button>
          <Button
            leftIcon={<IoLogoInstagram />}
            colorScheme="telegram"
            variant="ghost"
          >
            Instagram
          </Button>
          <Button
            leftIcon={<IoLogoTwitter />}
            colorScheme="twitter"
            variant="ghost"
          >
            Twitter
          </Button>
        </Flex>
      </Flex>

      <Flex justifyContent="center" flexDir="column" alignItems="center">
        <Flex textAlign="center" fontSize="sm" mb={4} justifyContent="center">
          Inverapp es una aplicación demo y su objetivo principal es brindarle a
          nuevos usuarios de criptomonedas una plataforma amigable para que
          puedan tener una primera experiencia antes de arriesgar dinero. La
          misma no representa ninguna entidad financiera, bancaria o similar.
          Tampoco representa ninguna recomendación de inversión. Todos los
          derechos reservados.
        </Flex>
        <Box textAlign="center" fontSize="sm" mb={8}>
          Aplicación realizada en <Kbd>React JS</Kbd>
        </Box>
      </Flex>
    </Flex>
  );
};
