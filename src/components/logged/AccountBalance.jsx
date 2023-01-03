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
                {stringARS}
              </Heading>
            </Flex>
            <Divider orientation="vertical" />
            <Flex justifyContent={"center"} w={"100%"} alignItems={"center"}>
              <Heading w={"400px"} textAlign={"center"}>
                {stringUSD}
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
        <Heading fontWeight={"semibold"} mt={12}>
          ATENCIÓN
        </Heading>
        <Heading
          maxW={"4xl"}
          textAlign={"center"}
          fontSize={"sm"}
          fontWeight={"normal"}
          color={"GrayText"}
          my={4}
        >
          
            Las cuentas bancarias mencionadas no son cuentas reales en entidades
            financieras ni están sujetas a regulaciones bancarias. Son
            utilizadas únicamente en el simulador de inversiones "Inverapp" como
            un ejemplo para mostrar cómo se llevarían a cabo las operaciones
            financieras dentro de la plataforma. No se pueden utilizar para
            realizar transacciones bancarias reales ni están asociadas a ninguna
            institución financiera. Si necesitás abrir una cuenta bancaria
            legal, deberás hacerlo a través de una entidad financiera.
          
        </Heading>
      </Flex>
    </Stack>
  );
};
