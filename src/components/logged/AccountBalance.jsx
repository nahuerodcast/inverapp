import { Button, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FcExternal, FcInternal } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useState } from "react";

export const AccountBalance = () => {
  //useState
  const [balanceData, setBalanceData] = useState([]);

  const { currentUser } = useAuth();
  const email = currentUser.email;
  const balanceRef = collection(db, "balance");

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

  const navigate = useNavigate();
  return (
    <Stack className="animate__animated animate__fadeIn">
      <Button
        mt={4}
        onClick={() => navigate("/")}
        leftIcon={<FaArrowAltCircleLeft />}
        ml={"200px"}
        w={"150px"}
      >
        Volver atrás
      </Button>
      <Flex
        h="100%"
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex mt={10} flexDir={"column"}>
          <Heading my={1}>
            <h1> Saldo actual:</h1>
          </Heading>
        </Flex>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Divider />
          <Flex height="65px" w={"100%"} my={4}>
            <Flex justifyContent={"center"} w={"100%"} alignItems={"center"}>
              <Heading w={"300px"} textAlign={"center"}>
                <p>
                  {validatedEmail[0] ? (
                    filteredEmail.map((a) => {
                      return (
                        <Flex justifyContent={"center"}>
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
                    <Text>ARS$500.000</Text>
                  )}
                </p>
              </Heading>
            </Flex>
            <Divider orientation="vertical" />
            <Flex justifyContent={"center"} w={"100%"} alignItems={"center"}>
            <Heading w={"300px"} textAlign={"center"}>
                <p>
                  {validatedEmail[0] ? (
                    filteredEmail.map((a) => {
                      return (
                        <Flex justifyContent={"center"}>
                          USD: $
                          {a.email === currentUser.email ? (
                            <p>{a.usd.toLocaleString(4)}</p>
                          ) : (
                            "false"
                          )}
                        </Flex>
                      );
                    })
                  ) : (
                    <Text>ARS$500.000</Text>
                  )}
                </p>
              </Heading>
            </Flex>
          </Flex>
          <Divider />
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} my={4} mb={12}>
        <Button
          onClick={() => navigate("/saldo-app/cargar")}
          mx={2}
          leftIcon={<FcExternal />}
        >
          Cargar saldo
        </Button>
        <Button
          onClick={() => navigate("/saldo-app/retirar")}
          mx={2}
          leftIcon={<FcInternal />}
        >
          Retirar saldo
        </Button>
      </Flex>
      <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
        <Heading fontWeight={"semibold"} mt={4}>
          <p>ATENCIÓN</p>
        </Heading>
        <Heading
          maxW={"lg"}
          textAlign={"center"}
          fontSize={"sm"}
          fontWeight={"normal"}
          color={"GrayText"}
          mb={4}
        >
          <p>
            Las cuentas bancarias mencionadas no representan cuentas en
            entidades financieras ni reguladas, son meramente a modo de ejemplo
            para el proyecto final del curso de React en Coderhouse.
          </p>
        </Heading>
      </Flex>
    </Stack>
  );
};
