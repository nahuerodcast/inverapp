import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Divider, Text } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import { InverappDate } from "../global/InverappDate";
import { FcBullish, FcMoneyTransfer, FcReading } from "react-icons/fc";
import { Img } from "@chakra-ui/react";
import { Portfolio } from "./Portfolio";
import { db } from "../../utils/init-firebase";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export const Home = () => {
  const navigate = useNavigate();

  let date = new Date(1640176492282);
  console.log(date.toUTCString());

  const data = db;
  console.log(data);

  const [portfolio, setPortfolio] = useState([]);

  const portfolioRef = collection(db, "portfolio");

  useEffect(() => {
    const getPortfolio = async () => {
      const data = await getDocs(portfolioRef);
      setPortfolio(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPortfolio();
  }, []);

  const fakeData = [
    {
      id: 1,
      symbol: "Bitcoin",
    },
    {
      id: 2,
      symbol: "Ethreum",
    },
  ];

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
      <Flex flexDir={"column"} px="400px">
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
        <Portfolio arrayPortfolio={portfolio} />
        <Flex my={1}>Últimos movimientos</Flex>
        <Divider />
      </Flex>
    </Flex>
  );
};
