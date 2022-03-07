import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  NumberInput,
  NumberInputField,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FcInternal } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useBalance } from "../../contexts/BalanceContext";

export const Withdrawal = () => {
  const { stringARS, stringUSD, bankAccounts, ars, usd } = useBalance();

  const [arsWithdrawal, setArsWithdrawal] = useState("");
  const [usdWithdrawal, setUsdWithdrawal] = useState("");

  const navigate = useNavigate();

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
        ml={"200px"}
        w={"150px"}
      >
        Volver atrás
      </Button>
      <Flex
        maxW="2sm"
        h="100%"
        flexDir="column"
        justifyContent={"center"}
        alignItems={"center"}
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
        <Flex>
          <Box
            w="md"
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
                  placeholder={"Ingresar monto"}
                  onChange={(e) => setArsWithdrawal(e.target.value)}
                />
              </NumberInput>

              <Select
                placeholder="Seleccionar cuenta"
                w={"80%"}
                color={"gray"}
                mt={1}
              >
                {bankAccounts.map((data) => {
                  if (data.currency === "Pesos 🇦🇷") {
                    return (
                      <option value={`${data.account}`}>
                        {data.bank} - {data.currency} - {data.account}
                      </option>
                    );
                  }
                  return <></>;
                })}
              </Select>
              <Divider w={"80%"} mt={1} />
              <Button
                w={"80%"}
                size="sm"
                colorScheme={"teal"}
                mt={1}
                type="submit"
              >
                Retirar
              </Button>
            </Flex>
          </Box>

          <Box
            w="md"
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
              <NumberInput w={"80%"} isRequired={true} max={usd}>
                <NumberInputField
                  placeholder={"Ingresar monto"}
                  onChange={(e) => setUsdWithdrawal(e.target.value)}
                />
              </NumberInput>
              <Select
                placeholder="Seleccionar cuenta"
                w={"80%"}
                color={"gray"}
                mt={1}
              >
                {bankAccounts.map((data) => {
                  if (data.currency === "Dólares 🇺🇸") {
                    return (
                      <option value={`${data.account}`}>
                        {data.bank} - {data.currency} - {data.account}
                      </option>
                    );
                  }
                  return <></>;
                })}
              </Select>
              <Divider w={"80%"} mt={1} />
              <Button w={"80%"} size="sm" colorScheme={"teal"} mt={1}>
                Retirar
              </Button>
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
        <Box
          borderRadius="xl"
          overflow="hidden"
          p={6}
          boxShadow={"xl"}
          mb={12}
          w={"4xl"}
        >
          <Flex flexDir={"column"} alignItems={"center"}>
            <Heading fontSize={"4xl"} mb={4}>
              <p>Egresos realizados</p>
            </Heading>
            <Divider />
            <Flex
              color={"GrayText"}
              justifyContent={"space-between"}
              w={"100%"}
              my={1}
            >
              <Text>#</Text>
              <Text>Cantidad</Text>
              <Text>Fecha</Text>
              <Text>Moneda</Text>
              <Text>CBU/CVU</Text>
              <Text>Banco/Billetera virtual</Text>
            </Flex>
            <Divider />
            {false ? (
              ""
            ) : (
              <Text my={6} color={"red.700"}>
                No tenes movimientos realizados
              </Text>
            )}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
