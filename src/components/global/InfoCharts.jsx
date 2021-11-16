import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Flex } from "@chakra-ui/react";
import { Coin } from "./Coin/Coin";
import { Input } from "@chakra-ui/react";

export const InfoCharts = () => {
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
      .catch((error) => console.log(error));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Flex w="100vw" justifyContent="center" mt="100px" alignItems="center">
        <Tabs
          variant="soft-rounded"
          colorScheme="blackAlpha"
          w="70vw"
          align="center"
          defaultIndex={2}
          isFitted
        >
          <TabList>
            <Tab>Acciones</Tab>
            <Tab>Cedears</Tab>
            <Tab>Cripto</Tab>
            <Tab>Dólar Mep</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto qui necessitatibus quidem ipsum blanditiis deleniti
                quaerat incidunt iure. Maxime dolorem cupiditate dolore nam
                repellendus fugiat eaque cumque maiores harum ab?
              </p>
            </TabPanel>
            <TabPanel>
              <p>Cedears</p>
            </TabPanel>
            <TabPanel>
              <Input
                placeholder="Buscá una criptomoneda"
                onChange={handleChange}
                mb={4}
              />
              <Flex flexDir="row" w="100%" justifyContent="space-evenly">
                <p>Nombre</p>
                <p>Símbolo</p>
                <p>Precio</p>
                <p>Volumen</p>
                <p>Últimas 24h</p>
                <p>Market Cap</p>
              </Flex>
              {filteredCoins.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </TabPanel>
            {/* <TabPanel>
              {dolar.map((dolar) => {
                return <Dolar />;
              })}
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
  );
};
