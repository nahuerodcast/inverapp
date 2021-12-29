import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoggedSearchCoin } from "./LoggedSearchCoin";

export const Trade = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Flex
        minH={"60vh"}
        justifyContent={"center"}
        alignItems={"center"}
        my={16}
      >
        <Flex>holu</Flex>
        <Box
          w="3xl"
          minH={"sm"}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={4}
          m={2}
        >
          <Heading my={4}>
            <p> Comprar {search}</p>
          </Heading>
          <Input
            placeholder="Buscá una criptomoneda"
            onChange={handleChange}
            mb={4}
          />
          {filteredCoins.map((coin) => {
            return (
              <LoggedSearchCoin
                key={coin.id}
                id={`${coin.market_cap_rank}.`}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </Box>
      </Flex>
    </>
  );
};
