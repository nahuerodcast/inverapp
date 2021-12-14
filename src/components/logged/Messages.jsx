import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import {
  Badge,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";

export const Messages = () => {
  const { currentUser } = useAuth();
  const [newMessages, setnewMessages] = useState(false);
  return (
    <Flex justifyContent="center" minH="60vh">
      <Flex w="70%" flexDir="column" mt={10}>
        <Heading>Mensajes</Heading>
        <Heading fontSize="sm" fontWeight="normal" color="grayText" mt={1}>
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </Heading>
        <Divider mt={2} />
        <Flex mt={4} w="100%">
          <Button leftIcon={<FaPlus />} px={6} colorScheme="green">
            Nuevo mensaje
          </Button>
          <Flex w="100%" justifyContent="flex-end">
            <Flex>
              <InputGroup mr={2}>
                <Input variant="outline" placeholder="Buscar mensajes" />
                <InputRightElement p={2}>
                  <Button>
                    <Search2Icon />
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormControl w="40%">
                <Select placeholder="Filtrar por">
                  <option>Mas recientes</option>
                  <option>No leídos</option>
                  <option>Leídos</option>
                </Select>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
        <Divider mt={4} />
        {newMessages ? (
          "mensajes"
        ) : (
          <Center mt={4} color="red.600">
            No se encontraron mensajes
          </Center>
        )}
        <Flex h="100%" alignItems="flex-end">
          <Stack direction="row">
            <Heading fontSize="small" fontWeight="normal">
              Estados:
            </Heading>
            <Badge colorScheme="green">Nuevo</Badge>
            <Badge colorScheme="blue">No leído</Badge>
            <Badge>En curso</Badge>
            <Badge colorScheme="red">Cerrado</Badge>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};
