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
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useBalance } from "../../contexts/BalanceContext";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const BankTransfers = () => {
  // Hooks
  const toast = useToast();
  const navigate = useNavigate();

  //useState
  const [demoBalance, setDemoBalance] = useState(false);

  //Creating Firebase Data
  const { currentUser } = useAuth();

  const balanceRef = doc(db, "balance", currentUser.email);

  const createBalance = async () => {
    await setDoc(balanceRef, {
      ars: 500000,
      usd: 5000,
      positionArs: 0,
      positionUsd: 0,
      isGenerated: !demoBalance,
    });
  };

  const { stringARS, stringUSD, isGenerated } = useBalance();

  return (
    <>
      <Button
        mt={4}
        onClick={() => navigate("/saldo-app")}
        leftIcon={<FaArrowAltCircleLeft />}
        ml={["10vw", "10vw", "15vw", "15vw"]}
        w={"150px"}
        p={"20px"}
        borderRadius={"lg"}
        _focus={{ boxShadow: "rgba(0,0,0,0)" }}
      >
        Volver atrás
      </Button>
      <Flex
        flexDir={"column"}
        h={"60vh"}
        className="animate__animated animate__fadeIn"
      >
        <Flex
          maxW="2sm"
          h="100%"
          flexDir="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            h={"100%"}
          >
            <Flex
              w={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
              mt={4}
              px={["10vw", "10vw", "15vw", "15vw"]}
              h={"100%"}
            >
              <Heading fontWeight={"semibold"} mt={10}>
                <Flex
                  flexDir={["column", "column", "row", "row"]}
                  alignItems={"center"}
                  justifyContent={"center"}
                  textAlign="center"
                >
                Simulá tu transferencia 
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
              
                  Podes simular tu transferencia con saldo falso, para que
                  puedas practicar en tu cuenta demo antes de invertir.
                
              </Heading>

              <Flex flexDir={"column"} alignItems={"center"} w={"100%"}>
                <Divider />
                <Flex
                  height="65px"
                  my={4}
                  w={"100%"}
                  flexDir={["column", "column", "row", "row"]}
                >
                  <Flex
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={"100%"}
                  >
                    <Heading textAlign={"center"}>
                    {stringARS}
                    </Heading>
                  </Flex>
                  <Divider orientation="vertical" />
                  <Flex
                    justifyContent={"center"}
                    w={"100%"}
                    alignItems={"center"}
                  >
                    <Heading textAlign={"center"}>
                    {stringUSD}
                    </Heading>
                  </Flex>
                </Flex>
                <Divider />
              </Flex>

              <Box boxShadow={"lg"} mt={1} borderRadius={2}>
                {isGenerated ? (
                  // validatedEmail[0]
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
                    {isGenerated ? (
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
            <Text mt={16}></Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
