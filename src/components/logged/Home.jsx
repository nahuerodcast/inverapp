import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Divider, Box } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { InverappDate } from "../global/InverappDate";
import { FcBullish, FcMoneyTransfer, FcReading } from "react-icons/fc";
import { Portfolio } from "./Portfolio";
import { db } from "../../utils/init-firebase";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { HomeBalance } from "./HomeBalance";

export const Home = () => {
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState([]);

  const portfolioRef = collection(db, "portfolio");

  useEffect(() => {
    const getPortfolio = async () => {
      const data = await getDocs(portfolioRef);
      setPortfolio(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPortfolio();
  }, []);



  return (
    <Flex flexDir={"column"} className="animate__animated animate__fadeIn">
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
      <Flex flexDir={"column"} px="350px">
        <Box
          borderWidth="1px"
          borderRadius="xl"
          overflow="hidden"
          p={6}
          boxShadow={"xl"}
          mb={12}
        >
          <HomeBalance />
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="xl"
          overflow="hidden"
          p={6}
          boxShadow={"xl"}
          mb={12}
        >
        <Portfolio arrayPortfolio={portfolio} />  </Box>
        <Flex my={1} mt={4}>
          <Heading fontSize={"2xl"}>
            <p> Últimos movimientos</p>
          </Heading>
        </Flex>
        <Divider />
      </Flex>
    </Flex>
  );
};
