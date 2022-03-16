import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { onSnapshot, doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

export const NewMessageModal = ({ messageArray, newMessageDoc }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const sendData = () => {
    setIsSubmitting(true);
    async function sendForm() {
      try {
        const newMessage = [{ subject, message, inverappDate }];
        setDoc(newMessageDoc, {
          messages: [...messageArray, ...newMessage],
        });
        onClose();
        toast({
          title: "Mensaje enviado con éxito.",
          description: "Recibiras una respuesta a la brevedad",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setIsSubmitting(false);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    sendForm();
  };

  const date = new Date();
  const inverappDate = `${date.toLocaleDateString(
    "es-AR"
  )} -  ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

  return (
    <>
      <Button
        leftIcon={<FaPlus />}
        px={10}
        colorScheme="green"
        onClick={onOpen}
      >
        Nuevo mensaje
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent mx={["10vw", "10vw", "15vw", "15vw"]}>
          <ModalHeader>Nuevo mensaje</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input isDisabled placeholder={`Fecha: ${inverappDate}`} mb={2} />
            <Select
              placeholder="Asunto"
              mb={2}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            >
              <option value="operaciones">Operaciones</option>
              <option value="administrativo">Administrativo</option>
              <option value="transferencias">Transferencias</option>
              <option value="asesoramiento">Asesoramiento</option>
              <option value="otros">Otros</option>
            </Select>
            <Textarea
              h="200px"
              placeholder="Escriba su mensaje acá"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost " mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              colorScheme="blue"
              onClick={sendData}
              isLoading={isSubmitting}
            >
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
