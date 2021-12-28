import { Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const LoggedSearchCoin = ({
  image,
  name,
  price,
  priceChange,
  symbol,
  
}) => {
  const [setSymbol, setSetSymbol] = useState("");
  return (
    <Flex>
      <Img src={image} alt={name} h="40px" />
      <Heading fontSize={"lg"}>
        <p>{name}</p>
      </Heading>
      <Heading>
        <p>{price}</p>
      </Heading>
      <Text>
        <p>{priceChange}</p>
      </Text>
      <Text>
        <p>{symbol}</p>
      </Text>
      <Button onClick={() => console.log(name)}>seleccionar cripto</Button>
    </Flex>
  );
};
