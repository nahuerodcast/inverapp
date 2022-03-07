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
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useBalance } from "../../contexts/BalanceContext";
import { FormattedArs, FormattedUsd } from "./FormattedNumbers";

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

  const validation = () => {
    return (
      (quantity !== 0 &&
        quantity !== "0" &&
        quantity !== "" &&
        ars >= quantity &&
        !currencySwitch) ||
      (quantity !== 0 &&
        quantity !== "0" &&
        quantity !== "" &&
        usd >= quantity &&
        currencySwitch)
    );
  };

  // Chakra UI hooks & stuff
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initRef = React.useRef();
  const toast = useToast();

  // Balance & current user
  const { currentUser } = useAuth();
  const {
    ars,
    usd,
    stringARS,
    stringUSD,
    positionArs,
    positionUsd,
    dolar,
    portfolio,
  } = useBalance();

  const arsCalc = Number(quantity / dolar / price);
  const usdCalc = Number(quantity / price);

  const newUsdOrder = [
    {
      id,
      image,
      name,
      price,
      priceChange,
      symbol,
      quantity: usdCalc,
      currencySwitch,
    },
  ];

  const newArsOrder = [
    {
      id,
      image,
      name,
      price,
      priceChange,
      symbol,
      quantity: arsCalc,
      currencySwitch,
    },
  ];

  // Firebase functions
  const portfolioRef = doc(db, "portfolio", currentUser.email);
  const createOrder = async () => {
    if (currencySwitch) {
      await setDoc(portfolioRef, {
        orders: [...portfolio, ...newUsdOrder],
      });
      setQuantity("");
    } else {
      await setDoc(portfolioRef, {
        orders: [...portfolio, ...newArsOrder],
      });
      setQuantity("");
    }
  };

  const updatePosition = !currencySwitch
    ? {
        ars: ars - quantity,
        positionArs: positionArs + quantity,
      }
    : {
        usd: usd - quantity,
        positionUsd: positionUsd + quantity,
      };

  const updateBalance = async () => {
    const userDoc = doc(db, "balance", currentUser.email);
    const newFields = updatePosition;
    await updateDoc(userDoc, newFields);
  };

  const currencyValidation = () =>
    !currencySwitch
      ? arsCalc.toFixed(4) + symbol.toUpperCase()
      : (quantity / price).toFixed(4) + symbol.toUpperCase();

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
                        Operar en {!currencySwitch ? "pesos 🇦🇷" : "dólares 🇺🇸"}
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
                          <strong>{stringARS}</strong>
                        ) : (
                          <strong>{stringUSD}</strong>
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
                        <strong>{currencyValidation()}</strong>
                      </Text>
                    </Flex>

                    <NumberInput
                      my={2}
                      mt={4}
                      keepWithinRange={false}
                      clampValueOnBlur={false}
                      w={"50%"}
                    >
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setIsSelected(!isSelected);
                        }}
                      >
                        <NumberInputField
                          placeholder="Cantidad"
                          onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <Text
                          color={"red.700"}
                          textAlign={"center"}
                          fontSize={"sm"}
                          my={1}
                        >
                          {(quantity !== "0" &&
                            ars >= quantity &&
                            !currencySwitch) ||
                          (quantity !== "0" &&
                            usd >= quantity &&
                            currencySwitch)
                            ? ""
                            : "No posee suficiente saldo 👎"}
                        </Text>
                      </form>
                    </NumberInput>

                    <Flex flexDir={"row"} w={"50%"} justifyContent={"center"}>
                      <Button
                        mr={1}
                        colorScheme={"green"}
                        w={"100%"}
                        onClick={() => {
                          setIsSelected(!isSelected);
                        }}
                        isDisabled={validation() ? false : true}
                        leftIcon={<CgTrending />}
                      >
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
                          <strong>
                            <FormattedArs ars={quantity} />
                          </strong>
                        ) : (
                          <strong>
                            <FormattedUsd usd={quantity} />
                          </strong>
                        )}
                      </Text>
                    </Flex>
                    <Flex
                      flexDir={"row"}
                      justifyContent={"space-between"}
                      w={"50%"}
                      alignItems={"center"}
                    >
                      <Text>Precio del dólar</Text>
                      <Text>
                        <strong>${dolar}</strong>
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
                        <strong>{currencyValidation()}</strong>
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
                            description: `Compraste ${currencyValidation()} ${symbol.toUpperCase()}`,
                            status: "success",
                            duration: 4000,
                            isClosable: true,
                          });
                          createOrder();
                          updateBalance();
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
