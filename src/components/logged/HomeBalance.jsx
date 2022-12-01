import { Divider, Flex, Heading, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useBalance } from "../../contexts/BalanceContext";
import { InverappDate } from "../global/InverappDate";
import { FcInfo } from "react-icons/fc";

export const HomeBalance = () => {
  const { stringARS, stringUSD, stringPositionARS, stringPositionUSD, dolar } =
    useBalance();

  return (
    <Flex my={2} mb={4} flexDir={"column"}>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading fontSize={"2xl"} letterSpacing="tight">
          Saldo actual
        </Heading>
        <Heading
          as="h4"
          fontWeight={"normal"}
          fontSize={"sm"}
          textAlign={"end"}
          color={"GrayText"}
          mb={1}
          display={["none", "none", "none", "inherit"]}
        >
          Estado de cuenta al <InverappDate />
        </Heading>
        Precio del dólar: ${dolar}
      </Flex>

      <Divider mb={4} />
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent="space-around"
        alignItems={"center"}
      >
        <Flex flexDir={"column"}>
          <Flex alignItems={"center"}>
            <Text mr={1} fontSize="lg">
              Total disponible
            </Text>
            <Tooltip label="Total disponible en tu cuenta">
              <Flex>
                <FcInfo />
              </Flex>
            </Tooltip>
          </Flex>
          <Text>{stringARS}</Text>
          <Text>{stringUSD}</Text>
        </Flex>
        <Flex flexDir={"column"} mt={[4, 4, 0, 0]}>
          <Flex alignItems={"center"}>
            <Text mr={1} fontSize="lg">
              Total invertido
            </Text>
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
