import {
  Button,
  Center,
  Flex,
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
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export const SelectedModal = ({
    id,
    image,
    name,
    price,
    priceChange,
    symbol,
  }) => {
  const [quantity, setQuantity] = useState("0");
  const [currencySwitch, setCurrencySwitch] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initRef = React.useRef();

  const ars = 1000;
  const usd = 100;

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      initialFocusRef={initRef}
      size={"2xl"}
    >
      <ModalOverlay />
      <ModalContent ref={initRef}>
        <ModalHeader mb={0} mt={4} fontSize={35} fontWeight={"bold"}>
          <Center>
              {id}
            <Img src={image} alt={name} w="40px" mr={2} />
            {name}
          </Center>

          <Text
            fontSize={"md"}
            color={"GrayText"}
            fontWeight={"normal"}
            textAlign={"center"}
          >
            Precio: ${price}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
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
              w={"40%"}
            >
              <Text mr={4}>
                Operar en {!currencySwitch ? "pesos" : "dólares"}
              </Text>
              <Switch
                colorScheme="teal"
                onChange={() => setCurrencySwitch(!currencySwitch)}
              />
            </Flex>
            <Flex flexDir={"row"} justifyContent={"space-between"} w={"40%"}>
              <Text fontSize={"md"} fontWeight={"normal"} textAlign={"center"}>
                Saldo disponible
              </Text>
              <Text fontSize={"md"} fontWeight={"normal"} textAlign={"center"}>
                {!currencySwitch ? (
                  <strong>{`ARS $${ars}`}</strong>
                ) : (
                  <strong>{`USD $${usd}`}</strong>
                )}
              </Text>
            </Flex>
            <Flex flexDir={"row"} justifyContent={"space-between"} w={"40%"}>
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
              w={"40%"}
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
            <Flex flexDir={"row"} w={"40%"} justifyContent={"center"}>
              <Button
                mr={1}
                colorScheme={"green"}
                w={"100%"}
                onClick={() => setIsSelected(true)}
              >
                Comprar
              </Button>
              <Button ml={1} colorScheme={"gray"} w={"100%"}>
                Vender
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Cerrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
