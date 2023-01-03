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
  Select,
  Text,
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
  const [buttonValidation, setButtonValidation] = useState(false);

  const toast = useToast();
  const sendData = () => {
    setIsSubmitting(true);
    async function sendForm() {
      setIsSubmitting(true);
      try {
        const bankAccountsDoc = doc(db, "bankAccounts", currentUser.email);
        const newAccount = [{ name, bank, account, currency }];
        setDoc(bankAccountsDoc, {
          accounts: [...bankAccounts, ...newAccount],
        }).then(() => {
          onClose();
          toast({
            title: "CBU/CVU agregada con éxito!",
            description: "Ya podes realizar tu egreso de saldo",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setIsSubmitting(false);
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    sendForm();
  };

  const handleEsc = () => {
    setAccount("");
    setCurrency("");
    setBank("");
  };

  useEffect(() => {
    setButtonValidation(bank && account && currency);
  }, [bank, account, currency]);

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
      <Text fontSize={"sm"} mt="2">
        Las cuentas bancarias registradas en Inverapp son utilizadas únicamente
        en la aplicación como una simulación de operaciones financieras. No se
        pueden utilizar para realizar transacciones bancarias reales ni están
        sujetas a las regulaciones bancarias. Si necesita abrir una cuenta
        bancaria legal, deberá hacerlo a través de una institución financiera.
      </Text>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          handleEsc();
        }}
        size="lg"
        isCentered
        onEsc={handleEsc}
        onOverlayClick={handleEsc}
      >
        <ModalOverlay />
        <ModalContent mx={["10vw", "10vw", "15vw", "15vw"]}>
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
              value={bank}
              onChange={(e) => {
                setBank(e.target.value);
              }}
            />
            <Input
              type={"number"}
              placeholder="CBU/CVU"
              value={account}
              mb={2}
              maxLength={22}
              onChange={(e) => {
                setAccount(e.target.value);
              }}
            />

            <Select
              id="country"
              placeholder="Seleccione moneda"
              mb={2}
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option>Pesos 🇦🇷</option>
              <option>Dólares 🇺🇸</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost "
              mr={3}
              onClick={() => {
                onClose();
                handleEsc();
              }}
            >
              Cerrar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                sendData();
                handleEsc();
              }}
              isLoading={isSubmitting}
              isDisabled={!buttonValidation}
            >
              Agregar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
