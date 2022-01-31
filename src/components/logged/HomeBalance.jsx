import { Divider, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useBalance } from "../../contexts/BalanceContext";
import { InverappDate } from "../global/InverappDate";

export const HomeBalance = () => {
  const { ars, usd, positionArs, positionUsd } = useBalance();
  return (
    <Flex my={2} mb={6} flexDir={"column"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading fontSize={"2xl"}>
          <p> Saldo actual</p>
        </Heading>
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
      </Flex>

      <Divider mb={4} />
      <Flex justifyContent={"space-between"}>
        <Flex flexDir={"column"}>
          <Tooltip label="Total disponible para invertir">
            <Text>Total disponible</Text>
          </Tooltip>

          <Text>{ars}</Text>
          <Text>{usd}</Text>
        </Flex>
        <Flex flexDir={"column"} alignItems={"flex-end"}>
          <Tooltip label="Total disponible utilizado en tu cuenta">
            <Text>Total invertido</Text>
          </Tooltip>
          <Text>{positionArs}</Text>
          <Text>{positionUsd}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
