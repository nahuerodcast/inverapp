import { Button, Divider, Flex, Heading, Image } from "@chakra-ui/react";
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
import { OpenAccount } from "../unlogged/OpenAccount";
import { Login } from "../unlogged/Login";
import { CgTrending, CgTrendingDown } from "react-icons/cg";

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
      <Flex
        flexDir="row"
        w="100%"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Image src={image} alt="crypto" h={10} />
        <Flex overflow="hidden" width="150px">
          <Heading fontSize="lg" fontWeight="medium" textAlign="left">
            {name}
          </Heading>
        </Flex>
        <p>{symbol}</p>
        <p>${price}</p>
        <p>${volume.toLocaleString()}</p>
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

        <Flex overflow="hidden" width="150px">
          <Heading fontSize="lg" fontWeight="medium" textAlign="left">
            Mkt Cap: ${marketcap.toLocaleString()}{" "}
          </Heading>
        </Flex>

        <Button
          colorScheme="green"
          size="sm"
          ml={2}
          onClick={onOpen}
          rightIcon={<CgTrending />}
        >
          Comprar
        </Button>
        <Button
          colorScheme="red"
          size="sm"
          ml={1}
          onClick={onOpen}
          rightIcon={<CgTrendingDown />}
        >
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
              <OpenAccount />
              <Divider orientation="vertical" />
              <Login />
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};
