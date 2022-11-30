import React from "react";
import {
  Flex,
  Heading,
  Image,
  Box,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Login } from "./Login";
import "animate.css";
import { Parallax } from "react-scroll-parallax";

export const UnloggedContent = () => {
  const { colorMode } = useColorMode();

  const boxesArray = [
    {
      id: 1,
      title: "¿Qué es Inverapp?",
      desc: "Inverapp es un simulador de inversiones en cripto, con un saldo demo.",
    },
    {
      id: 2,
      title: "¿Para qué sirve?",
      desc: "Para que no pierdas capital. Vas practicando y después te largas solo.",
    },
    {
      id: 3,
      title: "¿Me cobran algo?",
      desc: "Jamás. 0. Nuestra prioridad es que vos no arranqués perdiendo guita.",
    },
  ];

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: "absolute", top: "0" }}
        className={"animate__animated animate__fadeInDown"}
      >
        <path
          fill={colorMode === "light" ? "#faf7ee" : "#293345"}
          fill-opacity="1"
          d="M0,32L80,37.3C160,43,320,53,480,96C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      <Flex flexDir={"column"} px={["10vw", "10vw", "16vw", "16vw"]}>
        <Flex
          flexDir={"column"}
          className={"animate__animated animate__fadeInUp"}
        >
          <Flex justifyContent="space-between" alignItems="center" mb="90px">
            <Flex flexDir="column" w={"780px"}>
              <Heading
                fontWeight="700"
                fontFamily="Playfair Display, serif"
                letterSpacing="tight"
                fontSize={60}
                lineHeight="64px"
                color={colorMode === "light" ? "blackAlpha.800" : "#ebf0ca"}
                style={{
                  textDecoration: "underline",
                  textDecorationStyle: "solid",
                  textDecorationThickness: "1.3rem",
                  textUnderlineOffset: "-0.3em ",
                  textDecorationColor:
                    colorMode === "light" ? "#f8ecd4" : "black",
                  textDecorationSkipInk: "none",
                  textDecorationSkip: "none",
                }}
              >
                Simulá tu próxima inversión en criptomonedas.
              </Heading>

              <Heading
                as="h1"
                fontWeight="light"
                fontFamily="Open Sans , sans-serif"
                letterSpacing="tight"
                fontSize={30}
                mt={"10px"}
              >
                Inversiones demo en cripto para todo el mundo.
              </Heading>
              <Flex w="fit-content" mt={"24px"}>
                <Login />
              </Flex>
            </Flex>
            <Flex>
              <Image
                src="../bitcoin-animate.svg"
                w="450px"
                draggable={"false"}
              />
            </Flex>
          </Flex>
          <Parallax translateY={[50, -50]} speed={10}>
            <Flex
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
              mb={"60px"}
              color={colorMode === "light" ? "shades.80" : "tints.50"}
            >
              {boxesArray.map((box) => (
                <Box
                  boxShadow="xl"
                  rounded="xl"
                  mr={12}
                  bg={colorMode === "light" ? "#fffefc" : "shades.100"}
                  key={box.id}
                >
                  <Flex flexDir="column" alignItems="center" w={"380px"} p={8}>
                    <Heading
                      fontWeight="extrabold"
                      fontFamily="Playfair Display, serif"
                      letterSpacing="tight"
                      textAlign="center"
                    >
                      {box.title}
                    </Heading>
                    <Text
                      fontWeight="light"
                      fontFamily="Open Sans , sans-serif"
                      letterSpacing="tight"
                      fontSize={"18px"}
                      textAlign={"center"}
                      mt={"5px"}
                      color={colorMode === "light" ? "shades.80" : "white"}
                    >
                      {box.desc}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Parallax>
          <Parallax translateY={[50, -50]} speed={10}>
            <Flex justifyContent={"space-between"} alignItems="center">
              {" "}
              <Image
                src="../crypto-portfolio-animate.svg"
                w="450px"
                draggable={"false"}
              />
              <Heading
                fontWeight="bold"
                fontFamily="Playfair Display, serif"
                letterSpacing="tight"
                textAlign="center"
                fontSize={60}
                width={"800px"}
              >
                Nuestro objetivo es claro: Educación financiera
              </Heading>
            </Flex>
          </Parallax>
        </Flex>
      </Flex>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ marginTop: "-50px" }}
        className={"animate__animated animate__fadeInDown"}
      >
        <path
          fill={colorMode === "light" ? "#faf7ee" : "#293345"}
          fill-opacity="1"
          d="M0,96L80,122.7C160,149,320,203,480,218.7C640,235,800,213,960,224C1120,235,1280,277,1360,298.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
