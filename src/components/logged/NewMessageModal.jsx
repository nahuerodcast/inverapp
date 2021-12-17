import React from "react";
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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useToast } from "@chakra-ui/react";

export const NewMessageModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const nose = () => {
    setIsSubmitting(true);
    async function sendForm() {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          subject: subject,
          message: message,
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
        return docRef;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    sendForm();
  };

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
        <ModalContent>
          <ModalHeader>Nuevo mensaje</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Asunto"
              mb={2}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
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
            <Button colorScheme="blue" onClick={nose} isLoading={isSubmitting}>
              Enviar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
