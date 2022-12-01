import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoggedSearchCoin } from "..logged/LoggedSearchCoin";
import { Scrollbars } from "react-custom-scrollbars";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useBalance } from "../../contexts/BalanceContext";

export const InfoCharts = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) +
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();

  const { stringARS, stringUSD } = useBalance();

  return (
    <Stack className="animate__animated animate__fadeIn">
      <Button
        mt={4}
        onClick={() => navigate("/")}
        leftIcon={<FaArrowAltCircleLeft />}
        ml={["10vw", "10vw", "15vw", "15vw"]}
        w={"150px"}
        p={"20px"}
        borderRadius={"lg"}
        _focus={{ boxShadow: "rgba(0,0,0,0)" }}
      >
        Volver atrás
      </Button>
      <Flex justifyContent={"center"} mt={4} mb={16}>
        <Box
          w="4xl"
          h={"xl"}
          borderRadius="xl"
          overflow="hidden"
          p={8}
          m={2}
          boxShadow={"xl"}
          mb={12}
        >
          <Heading my={4}>
            <p> Operar </p>
            <Text
              fontSize={"md"}
              color={"GrayText"}
              fontWeight={"normal"}
              mt={1}
            >
              <Flex flexDir={["column", "column", "row", "row"]}>
                <Text mr={1}> Saldo disponible:</Text>
                <Flex>
                  <Text mr={1}> {stringARS}</Text>
                  <Text mr={1}> y </Text>
                  <Text mr={1}> {stringUSD} </Text>
                </Flex>
              </Flex>
            </Text>
          </Heading>
          <Input
            placeholder="Buscá una criptomoneda"
            onChange={handleChange}
            mb={4}
          />
          <Center color={"red.700"}>
            {filteredCoins.length === 0
              ? "No se encontraron resultados 😕"
              : ""}
          </Center>

          <Scrollbars autoHide>
            {filteredCoins?.map((coin) => {
              return (
                <LoggedSearchCoin
                  key={coin.id}
                  id={`${coin.market_cap_rank}.`}
                  name={coin.name}
                  price={coin?.current_price}
                  symbol={coin.symbol}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
          </Scrollbars>
        </Box>
      </Flex>
    </Stack>
  );
};
