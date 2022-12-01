import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
} from "@chakra-ui/react";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FcInternal } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useBalance } from "../../contexts/BalanceContext";
import { db } from "../../utils/init-firebase";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { WithdrawalHistory } from "./WithdrawalHistory";

export const Withdrawal = () => {
  // Own hooks
  const { stringARS, stringUSD, bankAccounts, ars, usd } = useBalance();
  const { currentUser } = useAuth();

  const [arsWithdrawal, setArsWithdrawal] = useState("");
  const [usdWithdrawal, setUsdWithdrawal] = useState("");
  const [withdrawal, setWithdrawal] = useState([]);
  const [dataBank, setDataBank] = useState("");

  //ChakraUI + navigate hooks
  const navigate = useNavigate();
  const toast = useToast();

  //Getting data from firebase
  const withdrawalDoc = doc(db, "withdrawal", currentUser.email);
  useEffect(() => {
    onSnapshot(withdrawalDoc, (doc) => {
      if (doc.data() === undefined) {
        setDoc(withdrawalDoc, {
          history: [],
        });
      } else {
        setWithdrawal(doc.data().history);
      }
    });
  }, []);

  // Updating data to firebase and showing user succesful withdrawal
  const userDoc = doc(db, "balance", currentUser.email);

  let inverappDate = new Date().toLocaleDateString();

  const updateArsBalance = async () => {
    await updateDoc(userDoc, { ars: ars - arsWithdrawal });
    const newWithdrawal = [
      {
        arsWithdrawal,
        inverappDate,
        currency: dataBank.currency,
        account: dataBank.account,
        bankName: dataBank.bank,
      },
    ];
    await setDoc(withdrawalDoc, {
      history: [...withdrawal, ...newWithdrawal],
    });
    toast({
      title: "Egreso solicitado con éxito",
      description: `Egresaste $${arsWithdrawal} a tu cuenta`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const updateUsdBalance = async () => {
    await updateDoc(userDoc, { usd: usd - usdWithdrawal });
    const newWithdrawal = [
      {
        usdWithdrawal,
        inverappDate,
        currency: dataBank.currency,
        account: dataBank.account,
        bankName: dataBank.bank,
      },
    ];
    await setDoc(withdrawalDoc, {
      history: [...withdrawal, ...newWithdrawal],
    });
    toast({
      title: "Egreso solicitado con éxito",
      description: `Egresaste $${usdWithdrawal} a tu cuenta`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setUsdWithdrawal("");
  };

  return (
    <Flex
      flexDir={"column"}
      minH={"100%"}
      className="animate__animated animate__fadeIn"
    >
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
        maxW="2sm"
        h="100%"
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
        px={["10vw", "10vw", "15vw", "15vw"]}
      >
        <Heading fontWeight={"semibold"} mt={10}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <p> Retirá tu saldo</p>
            <FcInternal style={{ marginLeft: "10px" }} />
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
            Podes egresar los fondos líquidos que tengas en tu cuenta de
            inversiones, hacia tu cuenta de banco o billetera virtual.
          </p>
        </Heading>
        <Flex flexWrap={"wrap"} w="100%" justifyContent={"center"}>
          <Box
            w={["inherit", "inherit", "md", "md"]}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            m={2}
          >
            <Heading textAlign={"center"} fontSize={"35px"}>
              <p> Retirá pesos </p>
            </Heading>
            <Text color={"GrayText"} textAlign={"center"} mb={4}>
              {stringARS}
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <NumberInput w={"80%"} isRequired={true} max={ars}>
                <NumberInputField
                  value={arsWithdrawal}
                  placeholder={"Ingresar monto"}
                  onChange={(e) => {
                    setArsWithdrawal(e.target.value);
                  }}
                />
              </NumberInput>

              <Select
                placeholder="Seleccionar cuenta"
                w={"80%"}
                color={"gray"}
                mt={1}
                onChange={(e) => {
                  e.preventDefault();
                  e.target.value !== "" &&
                    setDataBank(JSON.parse(e.target.value));
                }}
              >
                {bankAccounts.map((data) => {
                  if (data.currency === "Pesos 🇦🇷") {
                    return (
                      <option value={JSON.stringify(data)}>
                        {data.bank} - {data.currency} - {data.account}
                      </option>
                    );
                  }
                  return <></>;
                })}
              </Select>
              <Divider w={"80%"} mt={1} />
              <Popover>
                <PopoverTrigger>
                  <Button w={"80%"} size="sm" colorScheme={"teal"} mt={1}>
                    Retirar
                  </Button>
                </PopoverTrigger>
                {arsWithdrawal !== "" && (
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Retirar pesos</PopoverHeader>
                    <PopoverBody>
                      Vas a retirar {arsWithdrawal} pesos
                      <Flex my={2} justifyContent="space-between">
                        <Button colorScheme={"blue"} w="100%" mr={1}>
                          Cancelar
                        </Button>

                        <Button
                          w="100%"
                          ml={1}
                          onClick={() => {
                            updateArsBalance();
                            setArsWithdrawal("");
                          }}
                        >
                          Confirmar
                        </Button>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                )}
              </Popover>
            </Flex>
          </Box>

          <Box
            w={["inherit", "inherit", "md", "md"]}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            m={2}
          >
            <Heading textAlign={"center"} fontSize={"35px"}>
              <p> Retirá dólares </p>
            </Heading>

            <Text color={"GrayText"} textAlign={"center"} mb={4}>
              {stringUSD}
            </Text>

            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <NumberInput
                w={"80%"}
                isRequired={true}
                max={usd}
                isInvalid={usdWithdrawal > usd}
              >
                <NumberInputField
                  value={usdWithdrawal}
                  placeholder={"Ingresar monto"}
                  onChange={(e) => setUsdWithdrawal(e.target.value)}
                />
              </NumberInput>
              <Select
                placeholder="Seleccionar cuenta"
                w={"80%"}
                color={"gray"}
                mt={1}
                onChange={(e) => {
                  e.preventDefault();
                  e.target.value !== "" &&
                    setDataBank(JSON.parse(e.target.value));
                }}
              >
                {bankAccounts.map((data) => {
                  if (data.currency === "Dólares 🇺🇸") {
                    return (
                      <option value={JSON.stringify(data)}>
                        {data.bank} - {data.currency} - {data.account}
                      </option>
                    );
                  }
                  return <></>;
                })}
              </Select>
              <Divider w={"80%"} mt={1} />
              <Popover>
                <PopoverTrigger>
                  <Button w={"80%"} size="sm" colorScheme={"teal"} mt={1}>
                    Retirar
                  </Button>
                </PopoverTrigger>
                {usdWithdrawal !== "" && (
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Retirar dólares</PopoverHeader>
                    <PopoverBody>
                      Vas a retirar {usdWithdrawal} dólares.
                      <Flex my={2} justifyContent="space-between">
                        <Button colorScheme={"blue"} w="100%" mr={1}>
                          Cancelar
                        </Button>

                        <Button
                          w="100%"
                          ml={1}
                          onClick={() => updateUsdBalance()}
                        >
                          Confirmar
                        </Button>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                )}
              </Popover>
            </Flex>
          </Box>
        </Flex>
        <Heading
          textAlign={"center"}
          fontSize={"sm"}
          fontWeight={"normal"}
          color={"GrayText"}
          mb={20}
        >
          <p>
            La acreditación puede demorar como máximo 24 hs hábiles desde que la
            realizaste.
          </p>
        </Heading>
        <WithdrawalHistory withdrawal={withdrawal} />
      </Flex>
    </Flex>
  );
};
