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
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      style={{
        background: colorMode === "light" ? "tints.10" : "shades.80",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "0",
          zIndex: "-1",
          width: "100%",
          height: "100%",
          paddingTop: "50px",
        }}
        className={"animate__animated animate__fadeInDown"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={colorMode === "light" ? "#fafbf2" : "#787f49"}
            fill-opacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,96C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Flex flexDir={"column"} px={["10vw", "10vw", "16vw", "16vw"]}>
        <Flex
          flexDir={"column"}
          className={"animate__animated animate__fadeInUp"}
        >
          <Flex justifyContent="space-between" alignItems="center" mb="90px">
            <Flex flexDir="column" w={"780px"}>
              <Heading
                // as="h1"
                fontWeight="700"
                // fontFamily="Arima, cursive"
                fontFamily="Playfair Display, serif"
                letterSpacing="tight"
                fontSize={60}
                color={"blackAlpha.800"}
                style={{
                  textDecoration: "underline",
                  textDecorationStyle: "solid",
                  textDecorationThickness: "1.3rem",
                  textUnderlineOffset: "-0.3em ",
                  textDecorationColor: "#ced88646",
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
              mb={"130px"}
              color="shades.80"
            >
              <Box
                boxShadow="xl"
                rounded="xl"
                mr={12}
                bg={"RGBA(255, 255, 255, 10)"}
              >
                <Flex flexDir="column" alignItems="center" w={"380px"} p={8}>
                  <Heading
                    fontWeight="extrabold"
                    fontFamily="Playfair Display, serif"
                    letterSpacing="tight"
                    textAlign="center"
                  >
                    ¿Qué es?
                    {/* <FaMoneyBillWave color="#8dd070" /> */}
                  </Heading>
                  <Text
                    fontWeight="light"
                    fontFamily="Open Sans , sans-serif"
                    letterSpacing="tight"
                    fontSize={"18px"}
                    textAlign={"center"}
                    mt={"5px"}
                  >
                    Inverapp es un simulador de inversiones en cripto, con un{" "}
                    <strong>saldo demo.</strong>
                  </Text>
                </Flex>
              </Box>

              <Box
                boxShadow="xl"
                rounded="xl"
                mr={12}
                bg={"RGBA(255, 255, 255, 10)"}
              >
                <Flex flexDir="column" alignItems="center" w={"380px"} p={8}>
                  <Heading
                    fontWeight="extrabold"
                    // fontFamily="Open Sans , sans-serif"
                    fontFamily="Playfair Display, serif"
                    letterSpacing="tight"
                    textAlign="center"
                  >
                    ¿Para qué sirve?
                    {/* <FaMoneyBillWave color="#8dd070" /> */}
                  </Heading>
                  <Text
                    fontWeight="light"
                    fontFamily="Open Sans , sans-serif"
                    letterSpacing="tight"
                    fontSize={"18px"}
                    textAlign={"center"}
                    mt={"5px"}
                  >
                    Para que no pierdas capital.{" "}
                    <strong>Vas practicando </strong> y después te largas solo.
                  </Text>
                </Flex>
              </Box>

              <Box
                boxShadow="xl"
                rounded="xl"
                mr={12}
                bg={"RGBA(255, 255, 255, 10)"}
              >
                <Flex flexDir="column" alignItems="center" w={"380px"} p={8}>
                  <Heading
                    fontWeight="extrabold"
                    fontFamily="Playfair Display, serif"
                    letterSpacing="tight"
                    textAlign="center"
                  >
                    ¿Me cobran algo?
                    {/* <FaMoneyBillWave color="#8dd070" /> */}
                  </Heading>
                  <Text
                    fontWeight="light"
                    fontFamily="Open Sans , sans-serif"
                    letterSpacing="tight"
                    fontSize={"18px"}
                    textAlign={"center"}
                    mt={"5px"}
                  >
                    Jamás. 0. Nuestra prioridad es que vos{" "}
                    <strong>no arranqués perdiendo guita.</strong>
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Parallax>
          <Parallax translateY={[50, -50]} speed={10}>
            <Flex>
              <Image
                src="../crypto-portfolio-animate.svg"
                w="450px"
                draggable={"false"}
              />
            </Flex>
          </Parallax>
        </Flex>
      </Flex>
    </div>
  );
};
