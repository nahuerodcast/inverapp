import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoIosCopy } from "react-icons/io";
import { FcMoneyTransfer } from "react-icons/fc";

export const BankTransfersDetails = () => {
  const toast = useToast();

  return (
    <>
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
          px={["10vw", "10vw", "15vw", "15vw"]}
        >
          <Flex w={"100%"} flexDir={"column"} alignItems={"center"}>
            <Heading fontWeight={"semibold"}>
              <Flex
                flexDir={["column", "column", "row", "row"]}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <p>Empezá a invertir </p>
                <strong style={{ marginLeft: "10px" }}> ahora </strong>
                <FcMoneyTransfer style={{ marginLeft: "10px" }} />
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
                Para comenzar a invertir necesitas realizar una transferencia
                bancaria automática hacia nuestras cuentas bancarias.
              </p>
            </Heading>
            <Divider />
            <Flex flexWrap={"wrap"} w="100%" justifyContent={"center"}>
              <Box borderWidth="1px" borderRadius="lg" p={4} m={2}>
                <Heading
                  textAlign={"center"}
                  fontSize={"36px"}
                  w={["inherit", "inherit", "sm", "sm"]}
                >
                  <p>Cargá pesos argentinos</p>
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
                w="md"
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

                <Text textAlign={"center"}>Alias: inverapp.dólares</Text>
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
                La acreditación puede demorar como máximo 24 hs hábiles desde
                que la realizaste.
              </p>
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
