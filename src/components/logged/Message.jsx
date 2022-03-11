import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Message = ({ messageArray }) => {
  return (
    <Box
      borderRadius="xl"
      p={6}
      boxShadow={"xl"}
      mb={12}
      maxW={"50%"}
      h="fit-content"
    >
      <Flex justifyContent={"space-between"} alignItems="center">
        <Text color={"GrayText"}>{messageArray.inverappDate}</Text>

        {messageArray.subject === "operaciones" && (
          <Badge colorScheme="green" h={"fit-content"}>
            {" "}
            {messageArray.subject}{" "}
          </Badge>
        )}
        {messageArray.subject === "asesoramiento" && (
          <Badge colorScheme="red" h={"fit-content"}>
            {" "}
            {messageArray.subject}{" "}
          </Badge>
        )}
        {messageArray.subject === "administrativo" && (
          <Badge colorScheme="blue" h={"fit-content"}>
            {" "}
            {messageArray.subject}{" "}
          </Badge>
        )}
        {messageArray.subject === "transferencias" && (
          <Badge colorScheme="orange" h={"fit-content"}>
            {" "}
            {messageArray.subject}{" "}
          </Badge>
        )}
        {messageArray.subject === "otros" && (
          <Badge h={"fit-content"}> {messageArray.subject} </Badge>
        )}
        {messageArray.subject === "" && (
          <Badge h={"fit-content"}> {messageArray.subject} </Badge>
        )}
      </Flex>
      <Text>{messageArray.message}</Text>
    </Box>
  );
};
