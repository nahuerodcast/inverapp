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
  Select,
  NumberInputField,
  NumberInput,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBalance } from "../../contexts/BalanceContext";

export const NewBankAccount = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { currentUser } = useAuth();
  const name = currentUser.displayName
    ? currentUser.displayName
    : currentUser.email;
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [currency, setCurrency] = useState("");
  const { bankAccounts } = useBalance();

  const toast = useToast();
  const sendData = () => {
    setIsSubmitting(true);
    async function sendForm() {
      try {
        const bankAccountsDoc = doc(db, "bankAccounts", currentUser.email);
        const newAccount = [{ name, bank, account, currency }];
        setDoc(bankAccountsDoc, {
          accounts: [...bankAccounts, ...newAccount],
        });

        onClose();
        toast({
          title: "CBU/CVU agregada con éxito!",
          description: "Ya podes realizar tu egreso de saldo",
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

  return (
    <>
      <Button
        leftIcon={<FaPlus />}
        w="fit-content"
        px={10}
        colorScheme="green"
        onClick={onOpen}
      >
        Agregar CBU/CVU
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar CBU/CVU</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder={`Titular: ${
                currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email
              } `}
              mb={2}
              isDisabled
            />
            <Input
              placeholder="Banco/Billetera virtual"
              mb={2}
              onChange={(e) => {
                setBank(e.target.value);
              }}
            />
            <NumberInput>
              <NumberInputField
                placeholder="CBU/CVU"
                mb={2}
                onChange={(e) => {
                  setAccount(e.target.value);
                }}
              />
            </NumberInput>
            <Select
              id="country"
              placeholder="Seleccione moneda"
              mb={2}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option>Pesos 🇦🇷</option>
              <option>Dólares 🇺🇸</option>
            </Select>
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
              Agregar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
