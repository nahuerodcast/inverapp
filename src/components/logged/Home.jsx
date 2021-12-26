import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Divider } from "@chakra-ui/layout";
import React from "react";
import { CgTrending, CgTrendingDown } from "react-icons/cg";
import { BsArrowBarUp, BsArrowBarDown, BsBook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaMoneyBill, FaPlus } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Flex flexDir={"column"}>
      <Flex
        flexDir="column"
        w="100vw"
        justifyContent="center"
        alignItems="center"
        mt={20}
      >
        <Heading as="h1">Bienvenido,</Heading>
        <Heading as="h1">¿Que deseas hacer?</Heading>
        <Stack direction="row" mt={4}>
          <Button leftIcon={<FaPlus />} onClick={() => navigate("/operar")}>
            Operar
          </Button>

          <Button
            leftIcon={<FaMoneyBill />}
            onClick={() => navigate("/saldo-app")}
          >
            Cargar/retirar saldo
          </Button>
          <Button
            leftIcon={<MdMenuBook />}
            onClick={() => navigate("/aprender")}
          >
            Aprender
          </Button>
        </Stack>
      </Flex>
      <Flex flexDir={"column"} px="200px">
        <Divider />
        <Flex>Saldo actual</Flex>
        <Flex>Mis inversiones</Flex>
      </Flex>
    </Flex>
  );
};
