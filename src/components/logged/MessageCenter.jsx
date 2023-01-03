import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Badge, Divider, Flex, Heading, Text } from "@chakra-ui/layout";
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
  }, [newMessageDoc]);

  const filteredSearch = messageArray.filter(
    (message) =>
      message.message.toLowerCase().includes(messageSearch) &&
      message.subject.toLowerCase().includes(select)
  );

  return (
    <Flex justifyContent="center" minH="60vh">
      <Flex
        w="100%"
        flexDir="column"
        mt={10}
        px={["10vw", "10vw", "15vw", "15vw"]}
      >
        <Heading>Mensajes</Heading>
        <Heading fontSize="sm" fontWeight="normal" color="grayText" mt={1}>
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </Heading>
        <Divider mt={2} />
        <Flex
          mt={4}
          w="100%"
          justifyContent="space-between"
          flexDir={["column", "column", "row", "row"]}
        >
          <NewMessageModal
            messageArray={messageArray}
            newMessageDoc={newMessageDoc}
            mr={5}
          />
          <Input
            variant="outline"
            placeholder="Buscar mensajes"
            onChange={(e) => setMessageSearch(e.target.value)}
            w="80%"
          />
          <Flex ml={[0, 0, 5, 5]}>
            <FormControl>
              <Select
                placeholder="Filtrar por:"
                onChange={(e) => {
                  setSelect(e.target.value);
                }}
                w={["100%", "100%", "150px", "150px"]}
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
        <Text fontSize="sm" mt={2}>
          Este es un simulador de mensajería de Inverapp que solo se proporciona
          con fines de demostración. No se proporcionarán respuestas a ningún
          mensaje enviado a través de Inverapp. No utilice Inverapp para enviar
          mensajes importantes o confidenciales ya que no se garantiza la
          seguridad o la privacidad de los mensajes enviados.{" "}
        </Text>
        <Divider mt={4} mb={2} />
        <Messages
          messageArray={messageArray}
          messageSearch={messageSearch}
          filteredSearch={filteredSearch}
        />
        <Flex h="100%" mb={4} flexWrap="wrap" alignItems="center">
          <Heading fontSize="small" fontWeight="normal">
            Asuntos:
          </Heading>
          <Badge colorScheme="green" m={1}>
            Operaciones
          </Badge>
          <Badge colorScheme="blue" m={1}>
            Administrativo
          </Badge>
          <Badge colorScheme={"orange"} m={1}>
            Transferencias
          </Badge>
          <Badge colorScheme="red" m={1}>
            Asesoramiento
          </Badge>
          <Badge m={1}>Otros</Badge>
        </Flex>
      </Flex>
    </Flex>
  );
};
