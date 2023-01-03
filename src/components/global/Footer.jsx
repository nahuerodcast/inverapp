import { Box, Flex, Heading } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      h={60}
      flexDir={"column"}
      px={["10vw", "10vw", "16vw", "16vw"]}
      color={colorMode === "light" ? "shades.80" : "tints.80"}
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        fontWeight="700"
        fontFamily="Playfair Display, serif"
        letterSpacing="tight"
        className={"animate__animated animate__fadeIn"}
      >
        Inverapp
      </Heading>

      <Flex justifyContent="center" flexDir="column" alignItems="center">
        <Heading
          mt={"10px"}
          as="h1"
          fontWeight="normal"
          fontFamily="Open Sans , sans-serif"
          letterSpacing="tight"
          fontSize="md"
          textAlign={"center"}
        >
          Inverapp es una aplicación demo y su objetivo principal es brindarle a
          nuevos usuarios de criptomonedas una plataforma amigable para que
          puedan tener una primera experiencia antes de arriesgar dinero. La
          misma no representa ninguna entidad financiera, bancaria o similar.
          Tampoco representa ninguna recomendación de inversión.{" "}
          <a
            href="https://storyset.com/technology"
            target={"_blank"}
            rel="noreferrer"
          >
            Ilustraciones por Storyset.
          </a>{" "}
          Todos los derechos reservados.
        </Heading>

        <Flex
          flexDir={"column"}
          textAlign="center"
          mb={4}
          justifyContent="center"
        >
          <Box
            as="h1"
            fontWeight="normal"
            fontFamily="Open Sans , sans-serif"
            letterSpacing="tight"
            fontSize="md"
            textAlign={"center"}
            my={2}
            mt={4}
          >
            Aplicación realizada por{" "}
            <a
              href="https://www.linkedin.com/in/nahuerodcast/"
              target={"_blank"}
              rel="noreferrer"
            >
              Nahuel Rodriguez
            </a>{" "}
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/in/nahuerodcast"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialLinkedin
                size="25px"
                color={`${colorMode === "dark" ? "white" : "black"}`}
              />
            </a>
            <a
              href="https://www.github.com/nahuerodcast"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                size="25px"
                color={`${colorMode === "dark" ? "white" : "black"}`}
              />
            </a>
            <a
              href="https://www.twitter.com/_nahuerod"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialTwitter
                size="25px"
                color={`${colorMode === "dark" ? "white" : "black"}`}
              />
            </a>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
