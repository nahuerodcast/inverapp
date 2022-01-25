import { Button, Divider, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Portfolio = ({ arrayPortfolio }) => {
  const navigate = useNavigate();
  return (
    <Flex my={1} flexDir={"column"}>
      <Heading fontSize={"2xl"}>
        <p> Mis inversiones</p>
      </Heading>
      <Divider />
      {arrayPortfolio.length === 0 ? (
        <Flex
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
          my={4}
        >
          <Text mb={1}>Aún no tenes inversiones</Text>
          <Button
            variant={"outline"}
            colorScheme={"blue"}
            onClick={() => navigate("/operar")}
          >
            Comenzar a invertir
          </Button>
        </Flex>
      ) : (
        <Flex justifyContent={"space-between"} mt={1}>
          <Text w={6}></Text>
          <Text w={16}>Nombre</Text>
          <Text w={20}>Cantidad</Text>
          <Text w={36}>Precio de compra</Text>
          <Text w={28}>Precio actual</Text>
          <Text w={36}>Ganancia/Pérdida</Text>
          <Text w={12}>Total</Text>
        </Flex>
      )}

      {arrayPortfolio.map((portfolio) => {
        return (
          <Flex justifyContent={"space-between"} alignItems={"center"} mt={2}>
            <Img w={6} src={portfolio.image}></Img>
            <Text w={16}>{portfolio.name}</Text>
            <Text w={20}>{portfolio.quantity}</Text>
            <Text w={36}>{portfolio.price}</Text>
            <Text w={28}>{portfolio.price}</Text>
            <Text color={"green"} w={36}>
              30%
            </Text>
            <Text color={"red"} w={12}>
              -3000
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
