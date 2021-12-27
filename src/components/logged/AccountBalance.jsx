import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosCopy } from "react-icons/io";
import { FcMoneyTransfer } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const AccountBalance = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return (
    <>
      <Button
        mt={4}
        onClick={() => navigate("/")}
        leftIcon={<FaArrowAltCircleLeft />}
        ml={"200px"}
      >
        Volver atrás
      </Button>
      <Flex
        h="100%"
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex mt={10} flexDir={"column"}>
          <Heading my={2}>
            <h1> Saldo actual:</h1>
          </Heading>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Divider />
          <Flex height="75px" w={"100%"} mt={4}>
            <Flex justifyContent={"center"} w={"100%"} alignItems={"center"}>
              <Heading w={"250px"} textAlign={"center"}>
                <p> ARS: 100</p>
              </Heading>
            </Flex>
            <Divider orientation="vertical" />
            <Flex justifyContent={"center"} w={"100%"} alignItems={"center"}>
              <Heading w={"250px"} textAlign={"center"}>
                <p> USD: 100</p>
              </Heading>
            </Flex>
          </Flex>
          <Divider />
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} my={4} mb={12}>
        <Button onClick={() => navigate("/saldo-app/cargar")} mx={2}>
          Cargar saldo
        </Button>
        <Button onClick={() => navigate("/saldo-app/retirar")} mx={2}>
          Retirar saldo
        </Button>
      </Flex>
      <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
        <Heading fontWeight={"semibold"} mt={4}>
          <p>ATENCIÓN</p>
        </Heading>
        <Heading
          maxW={"lg"}
          textAlign={"center"}
          fontSize={"sm"}
          fontWeight={"normal"}
          color={"GrayText"}
          mb={4}
        >
          <p>
            Las cuentas bancarias mencionadas no representan cuentas en
            entidades financieras ni reguladas, son meramente a modo de ejemplo
            para el proyecto final del curso de React en Coderhouse.
          </p>
        </Heading>
      </Flex>
    </>
  );
};
