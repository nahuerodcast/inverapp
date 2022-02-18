import { Divider, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useBalance } from "../../contexts/BalanceContext";
import { InverappDate } from "../global/InverappDate";
import { FcInfo } from "react-icons/fc";

export const HomeBalance = () => {
  const { stringARS, stringUSD, stringPositionARS, stringPositionUSD } =
    useBalance();
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
          <Flex alignItems={"center"}>
            <Text mr={1}>Total disponible</Text>
            <Tooltip label="Total disponible en tu cuenta">
              <Flex>
                <FcInfo />
              </Flex>
            </Tooltip>
          </Flex>
          <Text>{stringARS}</Text>
          <Text>{stringUSD}</Text>
        </Flex>
        <Flex flexDir={"column"} alignItems={"flex-end"}>
          <Flex alignItems={"center"}>
            <Text mr={1}>Total invertido</Text>
            <Tooltip label="Total ya invertido">
              <Flex>
                <FcInfo />
              </Flex>
            </Tooltip>
          </Flex>

          <Text>{stringPositionARS}</Text>
          <Text>{stringPositionUSD}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
