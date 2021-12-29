import {
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Stat,
  StatArrow,
  StatHelpText,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const LoggedSearchCoin = ({
  id,
  image,
  name,
  price,
  priceChange,
  symbol,
}) => {
  const [setSymbol, setSetSymbol] = useState("");
    
  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Heading mr={4} ml={1} fontSize={"lg"} fontWeight={"thin"} w={8}>
            <p>{id}</p>
          </Heading>
          <Img src={image} alt={name} w="40px" mr={4} />
          <Heading fontSize={"lg"} w={160} fontWeight={"normal"}>
            <p>{name}</p>
          </Heading>
          <Heading fontSize={"lg"} w={120} fontWeight={"normal"}>
            <p>${price.toLocaleString()}</p>
          </Heading>
          <Text fontSize={"lg"} w={120}>
            <p>
              {priceChange > 0 ? (
                <Stat>
                  <StatHelpText>
                    <StatArrow type="increase" />+{priceChange.toFixed(2)}%
                  </StatHelpText>
                </Stat>
              ) : (
                <Stat>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    {priceChange.toFixed(2)}%
                  </StatHelpText>
                </Stat>
              )}
            </p>
          </Text>
          <Text fontSize={"lg"} w={"60px"}>
            <p>{symbol.toUpperCase()}</p>
          </Text>
        </Flex>
        <Flex>
          <Button mr={4} onClick={() => console.log(name)}>
            Seleccionar
          </Button>
        </Flex>
      </Flex>
      <Divider my={2} />
    </>
  );
};


