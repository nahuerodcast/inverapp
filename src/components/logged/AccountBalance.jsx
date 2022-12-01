import { Button, Divider, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { FcExternal, FcInternal } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useBalance } from "../../contexts/BalanceContext";

export const AccountBalance = () => {
  const { stringARS, stringUSD } = useBalance();

  const navigate = useNavigate();

  return (
    <Stack className="animate__animated animate__fadeIn">
      <Button
        mt={4}
        onClick={() => navigate("/")}
        leftIcon={<FaArrowAltCircleLeft />}
        ml={["10vw", "10vw", "15vw", "15vw"]}
        w={"150px"}
        p={"20px"}
        borderRadius={"lg"}
        _focus={{ boxShadow: "rgba(0,0,0,0)" }}
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
          <Heading mb={1}>
            <h1> Saldo actual:</h1>
          </Heading>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Divider />
          <Flex
            flexDir={["column", "column", "row", "row"]}
            height="65px"
            w={"100%"}
            my={4}
          >
            <Flex justifyContent={"center"} w={"100%"} alignItems={"center"}>
              <Heading w={"400px"} textAlign={"center"}>
                <p>{stringARS}</p>
              </Heading>
            </Flex>
            <Divider orientation="vertical" />
            <Flex justifyContent={"center"} w={"100%"} alignItems={"center"}>
              <Heading w={"400px"} textAlign={"center"}>
                <p>{stringUSD}</p>
              </Heading>
            </Flex>
          </Flex>
          <Divider />
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} my={4} mb={12}>
        <Button
          onClick={() => navigate("/saldo-app/cargar")}
          mx={2}
          leftIcon={<FcExternal />}
        >
          Cargar saldo
        </Button>
        <Button
          onClick={() => navigate("/saldo-app/retirar")}
          mx={2}
          leftIcon={<FcInternal />}
        >
          Retirar saldo
        </Button>
      </Flex>
      <Flex
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
        px={["10vw", "10vw", "15vw", "15vw"]}
      >
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
    </Stack>
  );
};
