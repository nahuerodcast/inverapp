import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Divider } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { InverappDate } from "../global/InverappDate";
import { FcBullish, FcMoneyTransfer, FcReading } from "react-icons/fc";

export const Home = () => {
  const navigate = useNavigate();

  var date = new Date(1640176492282);
  console.log(date.toUTCString());

  return (
    <Flex flexDir={"column"}>
      <Flex
        flexDir="column"
        w="100vw"
        justifyContent="center"
        alignItems="center"
        my={20}
        mb={6}
      >
        <Heading as="h1">
          <p> Bienvenido,</p>
        </Heading>
        <Heading as="h1">
          {" "}
          <p>¿Que deseas hacer?</p>{" "}
        </Heading>

        <Stack direction="row" mt={4}>
          <Button leftIcon={<FcBullish />} onClick={() => navigate("/operar")}>
            Operar
          </Button>

          <Button
            leftIcon={<FcMoneyTransfer />}
            onClick={() => navigate("/saldo-app")}
          >
            Cargar/retirar saldo
          </Button>
          <Button
            leftIcon={<FcReading />}
            onClick={() => navigate("/aprender")}
          >
            Aprender
          </Button>
        </Stack>
      </Flex>
      <Flex flexDir={"column"} px="200px">
        <Heading
          as="h4"
          fontWeight={"normal"}
          fontSize={"sm"}
          textAlign={"end"}
          color={"GrayText"}
          mb={1}
        >
          Estado de cuenta al <InverappDate />
        </Heading>

        <Flex my={1}>Saldo actual</Flex>
        <Divider />
        <Flex my={1}>Mis inversiones</Flex>
        <Divider />
        <Flex my={1}>Últimos movimientos</Flex>
        <Divider />
      </Flex>
    </Flex>
  );
};
