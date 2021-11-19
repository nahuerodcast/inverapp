import { Button, Divider, Flex } from "@chakra-ui/react";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Stat, StatArrow, StatHelpText } from "@chakra-ui/stat";
import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import "./Coin.css";
import { ImUserPlus } from "react-icons/im";
import { MdOutlineLogin } from "react-icons/md";

export const Coin = ({
  image,
  name,
  price,
  marketcap,
  priceChange,
  symbol,
  volume,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <>
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1 className="h1name">{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">${price}</p>
            <p className="coin-volume">${volume.toLocaleString()}</p>
            {priceChange > 0 ? (
              <Stat>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {priceChange.toFixed(2)}%
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
            <p className="coin-marketcap">
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
            <Button colorScheme="green" size="sm" ml={2} onClick={onOpen}>
              Comprar
            </Button>
            <Button colorScheme="red" size="sm" ml={1} onClick={onOpen}>
              Vender
            </Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size="md"
              motionPreset="slideInBottom"
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader textAlign="center">¡Bienvenido!</ModalHeader>
                <ModalCloseButton />
                <Flex
                  height="50px"
                  alignItems="center"
                  justifyContent="space-evenly"
                  mb={4}
                >
                  <Button
                    colorScheme="dark"
                    bgColor="gray.900"
                    color="white"
                    variant="solid"
                    fontFamily="Inter,sans-serif"
                    rightIcon={<ImUserPlus />}
                    w="fit-content"
                  >
                    Abrir cuenta
                  </Button>
                  <Divider orientation="vertical" />
                  <Button
                    colorScheme="gray"
                    variant="outline"
                    fontFamily="Inter,sans-serif"
                    m={1}
                    rightIcon={<MdOutlineLogin />}
                  >
                    Ingresar
                  </Button>
                </Flex>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
