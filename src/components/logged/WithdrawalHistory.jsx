import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FormattedArs, FormattedUsd } from "./FormattedNumbers";

export const WithdrawalHistory = ({ withdrawal }) => {
  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      p={6}
      boxShadow={"xl"}
      mb={12}
      w={["100%", "100%", "4xl", "4xl"]}
    >
      <Flex flexDir={"column"} alignItems={"center"}>
        <Heading fontSize={"4xl"} mb={4}>
          Egresos realizados
        </Heading>
        <Divider />
        <Flex
          flexDir={["column", "column", "row", "row"]}
          color={"GrayText"}
          justifyContent={"space-between"}
          w={"100%"}
          my={1}
        >
          <Text w={20}>Fecha</Text>
          <Text w={40}>Cantidad</Text>
          <Text w={20}>Moneda</Text>
          <Text w={56}>CBU/CVU</Text>
          <Text w={44}>Banco/Billetera virtual</Text>
        </Flex>
        <Divider />
        {withdrawal.length !== 0 ? (
          withdrawal.map((w) => {
            return (
              <>
                <Flex
                  flexDir={["column", "column", "row", "row"]}
                  color={"GrayText"}
                  justifyContent={"space-between"}
                  w={"100%"}
                  my={2}
                >
                  <Text w={20} isTruncated>{w.inverappDate}</Text>
                  {w.currency === "Pesos 🇦🇷" ? (
                    <Text w={40}>
                      <FormattedArs ars={w.arsWithdrawal} />
                    </Text>
                  ) : (
                    <Text w={40}>
                      <FormattedUsd usd={w.usdWithdrawal} />
                    </Text>
                  )}
                  <Text w={20}>
                    {w.currency === "Pesos 🇦🇷" ? w.currency : w.currency}
                  </Text>
                  <Text w={56}>{w.account}</Text>
                  <Text w={44}>{w.bankName}</Text>
                </Flex>
                <Divider />
              </>
            );
          })
        ) : (
          <Text my={6} color={"red.700"}>
            No tenes movimientos realizados
          </Text>
        )}
      </Flex>
    </Box>
  );
};
