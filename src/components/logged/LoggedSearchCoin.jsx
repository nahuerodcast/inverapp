import {
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const LoggedSearchCoin = ({
  id,
  image,
  name,
  price,
  priceChange,
  symbol,
}) => {
  const [quantity, setQuantity] = useState("0");
  const [currencySwitch, setCurrencySwitch] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initRef = React.useRef();

  const ars = 1000;
  const usd = 100;

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Heading mr={4} ml={1} fontSize={"lg"} fontWeight={"thin"} w={8}>
            <p>{id}</p>
          </Heading>
          <Img src={image} alt={name} w="40px" mr={4} />
          <Heading fontSize={"lg"} w={160} fontWeight={"normal"}>
            <p>{name}</p>
          </Heading>
          <Heading fontSize={"lg"} w={120} fontWeight={"normal"}>
            <p>${price.toLocaleString()}</p>
          </Heading>
          <Text fontSize={"lg"} w={120}>
            <p>
              {priceChange > 0 ? (
                <Stat>
                  <StatHelpText>
                    <StatArrow type="increase" />+{priceChange.toFixed(2)}%
                  </StatHelpText>
                </Stat>
              ) : (
                <Stat>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    {priceChange.toFixed(2)}%
                  </StatHelpText>
                </Stat>
              )}
            </p>
          </Text>
          <Text fontSize={"lg"} w={"60px"}>
            <p>{symbol.toUpperCase()}</p>
          </Text>
        </Flex>
        <Flex>
          <Button
            mr={4}
            onClick={() => {
              console.log(name);
              onOpen();
            }}
          >
            Seleccionar
          </Button>
          <Modal
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            initialFocusRef={initRef}
            size={"2xl"}
          >
            <ModalOverlay />
            <ModalContent ref={initRef}>
              <ModalHeader textAlign={"center"} mb={0}>
                Operar {name}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex
                  flexDir={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  w={"100%"}
                >
                  <Text
                    fontSize={"md"}
                    color={"GrayText"}
                    fontWeight={"normal"}
                    textAlign={"center"}
                  >
                    Saldo disponible
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={"GrayText"}
                    fontWeight={"normal"}
                    textAlign={"center"}
                  >
                    {!currencySwitch ? `ARS ${ars}` : `USD ${usd}`}
                  </Text>
                  <Text>Precio : ${price.toLocaleString()}</Text>
                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    h={"fit-content"}
                  >
                    <Text mr={4}>
                      Operar en {!currencySwitch ? "pesos" : "dólares"}
                    </Text>
                    <Switch
                      colorScheme="teal"
                      onChange={() => setCurrencySwitch(!currencySwitch)}
                    />
                  </Flex>
                  <NumberInput
                    my={2}
                    max={100}
                    keepWithinRange={false}
                    clampValueOnBlur={false}
                  >
                    <NumberInputField
                      placeholder="Cantidad"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Text
                      color={"red.700"}
                      textAlign={"center"}
                      fontSize={"sm"}
                      my={1}
                    >
                      {(ars >= quantity && !currencySwitch) ||
                      (usd >= quantity && currencySwitch)
                        ? ""
                        : "No posee suficiente saldo"}
                    </Text>
                  </NumberInput>
                  <Flex flexDir={"row"} w={"100%"} justifyContent={"center"}>
                    <Button mr={1}>Comprar</Button>
                    <Button ml={1}>Vender</Button>
                  </Flex>
                  <Text>Total:</Text>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
      <Divider my={2} />
    </>
  );
};
