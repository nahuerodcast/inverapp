import { Button } from "@chakra-ui/button";
import { Flex, Heading, Divider, Box } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FcBullish, FcCustomerSupport, FcMoneyTransfer } from "react-icons/fc";
import { Portfolio } from "./Portfolio";
import { HomeBalance } from "./HomeBalance";
import { useBalance } from "../../contexts/BalanceContext";

export const Home = () => {
  const navigate = useNavigate();
  const { portfolio } = useBalance();

  return (
    <>
      <Flex flexDir={"column"} className="animate__animated animate__fadeIn">
        <Flex
          flexDir="column"
          w="100%"
          justifyContent="center"
          alignItems="center"
          my={20}
          mb={6}
        >
          <Heading as="h1" letterSpacing="tight">
            Bienvenido,
          </Heading>
          <Heading as="h1" letterSpacing="tight">
            ¿Que deseas hacer?
          </Heading>

          <Flex
            flexDir="row"
            mt={4}
            flexWrap="wrap"
            justifyContent={"center"}
            w={"100%"}
            px={["10vw", "10vw", "15vw", "15vw"]}
          >
            <Button
              leftIcon={<FcBullish size={22} />}
              onClick={() => navigate("/operar")}
              m={1}
            >
              Comprar/vender
            </Button>
            <Button
              leftIcon={<FcCustomerSupport size={22} />}
              onClick={() => navigate("/mensajeria")}
              m={1}
            >
              Conversar
            </Button>{" "}
            <Button
              leftIcon={<FcMoneyTransfer size={22} />}
              onClick={() => navigate("/saldo-app")}
              m={1}
              mr={0}
            >
              Administrar saldo
            </Button>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} px={["10vw", "10vw", "15vw", "15vw"]}>
          <Box
            borderRadius="xl"
            overflow="hidden"
            p={6}
            boxShadow={"xl"}
            mb={12}
          >
            <HomeBalance />
          </Box>
          <Box
            borderRadius="xl"
            overflow="hidden"
            p={6}
            boxShadow={"xl"}
            mb={12}
          >
            <Portfolio arrayPortfolio={portfolio} />
          </Box>
          <Divider />
        </Flex>
      </Flex>
    </>
  );
};
