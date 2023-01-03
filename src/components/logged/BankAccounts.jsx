import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../utils/init-firebase";
import { NewBankAccount } from "./NewBankAccount";
import { AiFillDelete } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

export const BankAccounts = () => {
  const { currentUser } = useAuth();
  const [bankArray, setBankArray] = useState();

  const bankAccountsDoc = doc(db, "bankAccounts", currentUser.email);

  useEffect(() => {
    onSnapshot(bankAccountsDoc, (doc) => {
      setBankArray(doc.data().accounts);
    });
  }, [bankAccountsDoc]);

  return (
    <>
      <Flex flexDir={"column"} w="100%">
        <NewBankAccount />
        <Divider w={"100%"} my={4} />
        {bankArray !== undefined &&
          bankArray.map((data) => {
            const bankData = {
              bank: data.bank,
              account: data.account,
              currency: data.currency,
              name: data.name,
            };
            const updateData = async () => {
              await updateDoc(bankAccountsDoc, {
                accounts: arrayRemove(bankData),
              });
            };

            return (
              <Box
                borderRadius="xl"
                overflow="hidden"
                p={6}
                boxShadow={"xl"}
                mb={12}
              >
                <Flex justifyContent={"space-between"}>
                  <Flex flexDir={"column"}>
                    <Text fontSize={"xl"}>
                      Banco/Billetera Virtual: <strong>{data.bank}</strong>
                    </Text>{" "}
                    <Text>
                      CBU/CVU: <strong> {data.account}</strong>
                    </Text>
                    <Text>Moneda: {data.currency}</Text>
                    <Text color={"GrayText"}>Titular: {data.name}</Text>
                  </Flex>
                  <Flex>
                    <Popover>
                      <PopoverTrigger>
                        <Button variant="ghost" m={0} p={0} borderRadius={999}>
                          <AiFillDelete />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>
                          <strong>Cuenta de {data.bank}</strong>
                        </PopoverHeader>
                        <PopoverBody>
                          ¿Estas seguro que deseas eliminar la cuenta de{" "}
                          {data.bank} en {data.currency} ?
                          <Flex my={2} justifyContent="space-between">
                            <Button colorScheme={"blue"} w="100%" mr={1}>
                              Cancelar
                            </Button>

                            <Button
                              w="100%"
                              ml={1}
                              onClick={() => {
                                updateData();
                              }}
                            >
                              Confirmar
                            </Button>
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
      </Flex>
    </>
  );
};
