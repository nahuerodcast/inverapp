import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Badge, Divider, Flex, Heading, Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { NewMessageModal } from "./NewMessageModal";
import { Messages } from "./Messages";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";

export const MessageCenter = () => {
  const { currentUser } = useAuth();

  const [messageSearch, setMessageSearch] = useState("");
  const [select, setSelect] = useState("");
  const [messageArray, setMessageArray] = useState([]);
  const newMessageDoc = doc(db, "messages", currentUser.email);
  useEffect(() => {
    onSnapshot(newMessageDoc, (doc) => {
      if (doc.data() === undefined) {
        setDoc(newMessageDoc, {
          messages: [],
        });
      } else {
        setMessageArray(doc.data().messages);
      }
    });
  }, []);

  const filteredSearch = messageArray.filter(
    (message) =>
      message.message.toLowerCase().includes(messageSearch) &&
      message.subject.toLowerCase().includes(select)
  );

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
        <Flex mt={4} w="100%" justifyContent="space-between">
          <NewMessageModal
            messageArray={messageArray}
            newMessageDoc={newMessageDoc}
          />
          <InputGroup mr={2} w="xl" ml={10}>
            <Input
              variant="outline"
              placeholder="Buscar mensajes"
              onChange={(e) => setMessageSearch(e.target.value)}
            />
            <InputRightElement p={2}>
              <Button>
                <Search2Icon />
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex>
            <Flex>
              <FormControl>
                <Select
                  placeholder="Filtrar por:"
                  onChange={(e) => {
                    setSelect(e.target.value);
                  }}
                >
                  <option value="operaciones">Operaciones</option>
                  <option value="administrativo">Administrativo</option>
                  <option value="transferencias">Transferencias</option>
                  <option value="asesoramiento">Asesoramiento</option>
                  <option value="otros">Otros</option>
                </Select>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>
        <Divider mt={4} mb={2} />
        <Messages
          messageArray={messageArray}
          messageSearch={messageSearch}
          filteredSearch={filteredSearch}
        />
        <Flex h="100%" alignItems="flex-end" mb={4}>
          <Stack direction="row">
            <Heading fontSize="small" fontWeight="normal">
              Asuntos:
            </Heading>
            <Badge colorScheme="green">Operaciones</Badge>
            <Badge colorScheme="blue">Administrativo</Badge>
            <Badge colorScheme={"orange"}>Transferencias</Badge>
            <Badge colorScheme="red">Asesoramiento</Badge>
            <Badge>Otros</Badge>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};
