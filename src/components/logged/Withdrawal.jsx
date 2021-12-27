import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FcInternal } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const Withdrawal = () => {
  const toast = useToast();
  const saldo = `Saldo disponible: ARS${100}`;
  const saldoUSD = `Saldo disponible: USD${100}`;

  const navigate = useNavigate();

  return (
    <>
      <Button
        mt={4}
        onClick={() => navigate("/saldo-app")}
        leftIcon={<FaArrowAltCircleLeft />}
        ml={"200px"}
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
          Podes egresar los fondos líquidos que tengas en tu cuenta de
          inversiones, hacia tu cuenta de banco o billetera virtual.
        </Heading>
        <Flex mb={20}>
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
              {saldo}
            </Text>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <InputGroup w={"80%"} isRequired={true}>
                <Input variant="flushed" placeholder={"Ingresar monto"} />
              </InputGroup>
              <Select
                placeholder="Seleccionar cuenta"
                w={"80%"}
                color={"gray"}
                mt={1}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
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
              {saldoUSD}
            </Text>

            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDir={"column"}
            >
              <InputGroup w={"80%"}>
                <Input variant="flushed" placeholder={"Ingresar monto"} />
              </InputGroup>
              <Select
                placeholder="Seleccionar cuenta"
                w={"80%"}
                color={"gray"}
                mt={1}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Divider w={"80%"} mt={1} />
              <Button w={"80%"} size="sm" colorScheme={"teal"} mt={1}>
                Retirar
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Divider />
      </Flex>
    </>
  );
};
