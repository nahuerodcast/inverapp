import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Stat,
  StatArrow,
  StatHelpText,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { useToast } from "@chakra-ui/react";
import { CgTrendingDown, CgTrending } from "react-icons/cg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../utils/init-firebase";

export const LoggedSearchCoin = ({
  id,
  image,
  name,
  price,
  priceChange,
  symbol,
}) => {
  // Own useStates
  const [quantity, setQuantity] = useState(0);
  const [currencySwitch, setCurrencySwitch] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  // Chakra UI hooks & stuff
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initRef = React.useRef();
  const toast = useToast();

  // Fake balance
  const ars = 1000;
  const usd = 100;

  // Firebase functions
  const portfolioRef = collection(db, "portfolio");
  const createOrder = async () => {
    await addDoc(portfolioRef, { id, image, name, price, priceChange, symbol, quantity });
  };

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
            <ModalContent ref={initRef} minH={"50vh"}>
              <ModalHeader mb={0} mt={4} fontSize={35} fontWeight={"bold"}>
                <Center>
                  <Img src={image} alt={name} w="40px" mr={2} />
                  {name}
                </Center>

                <Text
                  fontSize={"md"}
                  color={"GrayText"}
                  fontWeight={"normal"}
                  textAlign={"center"}
                >
                  Precio: ${price.toLocaleString()}
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              {isSelected === false ? (
                <ModalBody>
                  <Flex
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    w={"100%"}
                  >
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      h={"fit-content"}
                      w={"50%"}
                    >
                      <Text mr={4}>
                        Operar en {!currencySwitch ? "pesos" : "dólares"}
                      </Text>
                      <Switch
                        colorScheme="teal"
                        onChange={() => setCurrencySwitch(!currencySwitch)}
                      />
                    </Flex>
                    <Flex
                      flexDir={"row"}
                      justifyContent={"space-between"}
                      w={"50%"}
                    >
                      <Text
                        fontSize={"md"}
                        fontWeight={"normal"}
                        textAlign={"center"}
                      >
                        Saldo disponible
                      </Text>
                      <Text
                        fontSize={"md"}
                        fontWeight={"normal"}
                        textAlign={"center"}
                      >
                        {!currencySwitch ? (
                          <strong>{`ARS $${ars}`}</strong>
                        ) : (
                          <strong>{`USD $${usd}`}</strong>
                        )}
                      </Text>
                    </Flex>
                    <Flex
                      flexDir={"row"}
                      justifyContent={"space-between"}
                      w={"50%"}
                    >
                      <Text>Total {symbol.toUpperCase()} a recibir: </Text>
                      <Text>
                        {(quantity / price).toFixed(4)} {symbol.toUpperCase()}
                      </Text>
                    </Flex>

                    <NumberInput
                      my={2}
                      mt={4}
                      keepWithinRange={false}
                      clampValueOnBlur={false}
                      w={"50%"}
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
                          : "No posee suficiente saldo 👎"}
                      </Text>
                    </NumberInput>
                    <Flex flexDir={"row"} w={"50%"} justifyContent={"center"}>
                      <Button
                        mr={1}
                        colorScheme={"green"}
                        w={"100%"}
                        onClick={() => {
                          setIsSelected(!isSelected);
                        }}
                        isDisabled={
                          (quantity !== 0 &&
                            quantity !== "0" &&
                            quantity !== "" &&
                            ars >= quantity &&
                            !currencySwitch) ||
                          (usd >= quantity && currencySwitch)
                            ? false
                            : true
                        }
                        leftIcon={<CgTrending />}
                      >
                        {console.log(quantity)}
                        Comprar
                      </Button>
                      <Button
                        ml={1}
                        colorScheme={"gray"}
                        w={"100%"}
                        onClick={() =>
                          alert(
                            "Por el momento no está habilitada la venta, disculpe las molestias."
                          )
                        }
                        leftIcon={<CgTrendingDown />}
                      >
                        Vender
                      </Button>
                    </Flex>
                  </Flex>
                </ModalBody>
              ) : (
                <ModalBody>
                  <Flex
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    w={"100%"}
                    h={"80%"}
                  >
                    <Flex
                      flexDir={"row"}
                      justifyContent={"space-between"}
                      w={"50%"}
                      alignItems={"center"}
                    >
                      <Text>Vas a pagar </Text>
                      <Text>
                        {!currencySwitch ? (
                          <strong>{`ARS $${quantity}`}</strong>
                        ) : (
                          <strong>{`USD $${quantity}`}</strong>
                        )}
                      </Text>
                    </Flex>
                    <Flex
                      flexDir={"row"}
                      justifyContent={"space-between"}
                      w={"50%"}
                      alignItems={"center"}
                      my={2}
                    >
                      <Text>Total {symbol.toUpperCase()} a recibir: </Text>
                      <Text>
                        {(quantity / price).toFixed(4)} {symbol.toUpperCase()}
                      </Text>
                    </Flex>

                    <Flex flexDir={"row"} w={"50%"} justifyContent={"center"}>
                      <Button
                        mr={1}
                        colorScheme={"blue"}
                        w={"100%"}
                        onClick={() => {
                          setIsSelected(!isSelected);
                          onClose();
                          toast({
                            title: `¡Bravo! Compra de ${name} exitosa`,
                            description: `Compraste ${(
                              quantity / price
                            ).toFixed(4)} ${symbol.toUpperCase()}`,
                            status: "success",
                            duration: 4000,
                            isClosable: true,
                          });
                          createOrder();
                        }}
                        rightIcon={<HiCheckCircle />}
                      >
                        Confirmar
                      </Button>
                    </Flex>
                  </Flex>
                </ModalBody>
              )}

              <ModalFooter>
                <Button onClick={onClose}>Cerrar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
      <Divider my={2} />
    </>
  );
};
