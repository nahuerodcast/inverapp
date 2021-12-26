import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosCopy } from "react-icons/io";

export const AccountBalance = () => {
  const toast = useToast();
  return (
    <Flex
      h="100%"
      flexDir="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex>
        <Heading my={2}>Saldo actual:</Heading>
      </Flex>

      <Flex flexDir={"column"} alignItems={"center"}>
        <Divider />
        <Heading fontWeight={"semibold"} mt={4}>
          <p>
            Empezá a invertir <strong>ahora</strong>
          </p>
        </Heading>
        <Heading
          textAlign={"center"}
          fontSize={"sm"}
          fontWeight={"normal"}
          color={"GrayText"}
          mb={4}
        >
          <p>
            Para comenzar a invertir necesitas realizar una transferencia
            bancaria automática hacia nuestras cuentas bancarias.
          </p>
        </Heading>
        <Divider />
        <Flex>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            m={2}
          >
            <Heading textAlign={"center"} fontSize={"35px"}>
              <p> Cargá pesos argentinos</p>
            </Heading>
            <Text textAlign={"center"}>
              CBU: 1430001713000119250011
              <CopyToClipboard text="1430001713000119250011">
                <Button
                  onClick={() =>
                    toast({
                      title: "CBU en pesos copiado con éxito",
                      description: "Ya podes realizar tu transferencia",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    })
                  }
                  variant="ghost"
                  borderRadius="30px"
                  p="0"
                >
                  <IoIosCopy />
                </Button>
              </CopyToClipboard>
            </Text>
            <Text textAlign={"center"}>Alias: inverapp.pesos</Text>
          </Box>

          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            m={2}
          >
            <Heading textAlign={"center"} fontSize={"35px"}>
              <p> Cargá dólares americanos</p>
            </Heading>
            <Text textAlign={"center"}>
              CBU: 1430001714000119250029
              <CopyToClipboard text="1430001714000119250029">
                <Button
                  onClick={() =>
                    toast({
                      title: "CBU en dólares copiado con éxito",
                      description: "Ya podes realizar tu transferencia",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    })
                  }
                  variant="ghost"
                  borderRadius="30px"
                  p="0"
                >
                  <IoIosCopy />
                </Button>
              </CopyToClipboard>
            </Text>

            <Text textAlign={"center"}>Alias: inverapp.pesos</Text>
          </Box>
        </Flex>

        <Divider />
        <Heading fontWeight={"semibold"} mt={8}>
          <p> Retirá tu saldo</p>
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
        <Flex>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            m={2}
          >
            <Heading textAlign={"center"} fontSize={"35px"}>
              <p> Retirá pesos </p>
            </Heading>
            <Text textAlign={"center"}>
              Saldo:
            </Text>
            <Text textAlign={"center"}>Alias: inverapp.pesos</Text>
          </Box>

          <Box
          
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            m={2}
          >
            <Heading textAlign={"center"} fontSize={"35px"}>
              <p> Retirá dólares </p>
            </Heading>
            <Text textAlign={"center"}>
              CBU: 1430001714000119250029
              <CopyToClipboard text="1430001714000119250029">
                <Button
                  onClick={() =>
                    toast({
                      title: "CBU en dólares copiado con éxito",
                      description: "Ya podes realizar tu transferencia",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    })
                  }
                  variant="ghost"
                  borderRadius="30px"
                  p="0"
                >
                  <IoIosCopy />
                </Button>
              </CopyToClipboard>
            </Text>

            <Text textAlign={"center"}>Alias: inverapp.pesos</Text>
          </Box>
        </Flex>
        <Divider />
      </Flex>
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
          Las cuentas bancarias mencionadas no representan cuentas en entidades
          financieras ni reguladas, son meramente a modo de ejemplo para el
          proyecto final del curso de React en Coderhouse.
        </p>
      </Heading>
    </Flex>
  );
};
