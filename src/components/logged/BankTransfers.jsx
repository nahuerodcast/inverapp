import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { FcIdea, FcCheckmark, FcBullish } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { BankTransfersDetails } from "./BankTransfersDetails";

export const BankTransfers = () => {
  // Hooks
  const toast = useToast();
  const navigate = useNavigate();

  //useState
  const [balanceData, setBalanceData] = useState([]);
  const [demoBalance, setDemoBalance] = useState(false);

  //Creating Firebase Data
  const { currentUser } = useAuth();
  const email = currentUser.email;
  const balanceRef = collection(db, "balance");
  const createBalance = async () => {
    await addDoc(balanceRef, {
      ars: 500000,
      usd: 5000,
      isGenerated: !demoBalance,
      email,
    });
  };

  // Reading Firebase Data
  useEffect(() => {
    const getBalanceData = async () => {
      const data = await getDocs(balanceRef);
      setBalanceData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBalanceData();
  }, []);

  const filteredEmail = balanceData.filter((a) =>
    a.email.includes(currentUser.email)
  );

  const validatedEmail = filteredEmail.map((a) => {
    return a.email === currentUser.email && a.isGenerated ? true : false;
  });

  return (
    <>
      <BankTransfersDetails />
      <Flex
        flexDir={"column"}
        minH={"100%"}
        className="animate__animated animate__fadeIn"
      >
        <Flex
          maxW="2sm"
          h="100%"
          flexDir="column"
          justifyContent={"center"}
          alignItems={"center"}
          mb={"10vh"}
        >
          <Flex flexDir={"column"} alignItems={"center"}>
            <Flex
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              mt={4}
            >
              <Text my={1}>o</Text>
              <Divider />
              <Heading fontWeight={"semibold"} mt={10}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <p>Simulá tu transferencia </p>
                  <FcIdea style={{ marginLeft: "10px" }} />
                </Flex>
              </Heading>
              <Heading
                textAlign={"center"}
                fontSize={"sm"}
                fontWeight={"normal"}
                color={"GrayText"}
                mb={4}
              >
                <p>
                  Podes simular tu transferencia con saldo falso, para que
                  puedas practicar en tu cuenta demo antes de invertir.
                </p>
              </Heading>

              <Flex flexDir={"column"} alignItems={"center"} w={"100%"}>
                <Divider />
                <Flex height="65px" my={4} w={"100%"}>
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"100%"}
                  >
                    <Heading textAlign={"center"}>
                      <p>
                        {validatedEmail[0] ? (
                          filteredEmail.map((a) => {
                            return (
                              <Flex>
                                ARS: $
                                {a.email === currentUser.email ? (
                                  <p>{a.ars.toLocaleString(4)}</p>
                                ) : (
                                  "false"
                                )}
                              </Flex>
                            );
                          })
                        ) : (
                          <Text color={demoBalance ? "black" : "lightgray"}>
                            ARS$500.000
                          </Text>
                        )}
                      </p>
                    </Heading>
                  </Flex>
                  <Divider orientation="vertical" />
                  <Flex
                    justifyContent={"center"}
                    w={"100%"}
                    alignItems={"center"}
                  >
                    <Heading textAlign={"center"}>
                      <p>
                        {validatedEmail[0] ? (
                          filteredEmail.map((a) => {
                            return (
                              <Flex>
                                USD: $
                                {a.email === currentUser.email ? (
                                  <p>{a.usd}</p>
                                ) : (
                                  "false"
                                )}
                              </Flex>
                            );
                          })
                        ) : (
                          <Text color={demoBalance ? "black" : "lightgray"}>
                            USD$5.000
                          </Text>
                        )}
                      </p>
                    </Heading>
                  </Flex>
                </Flex>
                <Divider />
              </Flex>

              <Box boxShadow={"lg"} mt={1} borderRadius={2}>
                {validatedEmail[0] ? (
                  <Button
                    mt={2}
                    onClick={() => {
                      navigate("/operar");
                    }}
                    leftIcon={<FcBullish />}
                  >
                    ¡Comenzar a invertir!
                  </Button>
                ) : (
                  <>
                    {demoBalance ? (
                      <Button
                        mt={2}
                        onClick={() => {
                          navigate("/operar");
                        }}
                        leftIcon={<FcBullish />}
                      >
                        ¡Comenzar a invertir!
                      </Button>
                    ) : (
                      <Button
                        mt={2}
                        onClick={() => {
                          setDemoBalance(!demoBalance);
                          toast({
                            title: "Saldo demo habilitado con éxito",
                            description: "Ya podes simular tus inversiones",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                            variant: "subtle",
                          });
                          createBalance();
                        }}
                        leftIcon={<FcCheckmark />}
                      >
                        Habilitar saldo demo
                      </Button>
                    )}
                  </>
                )}
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
