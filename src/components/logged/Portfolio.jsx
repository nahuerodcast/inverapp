import {
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Stat,
  StatArrow,
  StatHelpText,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FormattedArs, FormattedUsd } from "./FormattedNumbers";
import { useBalance } from "../../contexts/BalanceContext";

export const Portfolio = ({ arrayPortfolio }) => {
  const [price, setPrice] = useState("");
  const { dolar } = useBalance();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false`
      )
      .then((res) => {
        setPrice(res.data);
      })
      .catch();
  }, []);

  const navigate = useNavigate();

  return (
    <Flex my={1} flexDir={"column"}>
      <Heading fontSize={"2xl"}>
        <p> Mis inversiones</p>
      </Heading>
      <Divider mb={2} />

      {arrayPortfolio.length === 0 ? (
        <Flex
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
          my={4}
        >
          <Text mb={1}>Aún no tenes inversiones</Text>
          <Button
            variant={"outline"}
            colorScheme={"blue"}
            onClick={() => navigate("/operar")}
          >
            Comenzar a invertir
          </Button>
        </Flex>
      ) : (
        <>
          <Flex justifyContent={"space-between"} mt={1} mb={2}>
            <Text w={6}></Text>
            <Text w={20}>Nombre</Text>
            <Text w={32}>Cantidad </Text>
            <Text w={36}>Precio de compra</Text>
            <Text w={28}>Precio actual</Text>
            <Text w={24}>Gan/Per $</Text>
            <Text w={36}>Gan/Per %</Text>
            <Text w={36}>
              <strong>Total</strong>
            </Text>
          </Flex>
          <Divider />
        </>
      )}

      {arrayPortfolio.length !== 0
        ? arrayPortfolio.map((portfolio) => {
            const filteredPrice = price.filter((price) =>
              price.name.includes(portfolio.name)
            );
            const currentPrice = filteredPrice[0].current_price;
            const quantity = portfolio.quantity;
            const total = quantity * currentPrice;
            const profitLoss = quantity * portfolio.price - total;
            const profitLossPercentage =
              (currentPrice * 100) / portfolio.price - 100;
            //
            //
            //
            //
            //

            return (
              <>
                {portfolio.length !== 0 ? (
                  <>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      my={2}
                    >
                      <Img w={6} src={portfolio.image}></Img>
                      <Text w={20}>{portfolio.name}</Text>
                      <Text w={32}>{portfolio.quantity.toFixed(4)}</Text>
                      <Text w={36}>${portfolio.price}</Text>
                      <Text w={28}>${currentPrice}</Text>
                      <Text
                        color={
                          profitLossPercentage > 0 ? "green.600" : "red.600"
                        }
                        w={24}
                      >
                        {portfolio.currencySwitch
                          ? `$${profitLoss.toFixed(2)}`
                          : `$${(profitLoss * dolar).toFixed(2)}`}
                      </Text>
                      <Text w={36}>
                        {profitLossPercentage > 0 ? (
                          <Stat>
                            <StatHelpText>
                              <StatArrow type="increase" />+
                              {profitLossPercentage.toFixed(2)}%
                            </StatHelpText>
                          </Stat>
                        ) : (
                          <Stat>
                            <StatHelpText>
                              <StatArrow type="decrease" />
                              {profitLossPercentage.toFixed(2)}%
                            </StatHelpText>
                          </Stat>
                        )}
                      </Text>

                      <Text w={36}>
                        {portfolio.currencySwitch ? (
                          <FormattedUsd usd={total} />
                        ) : (
                          <FormattedArs ars={total * dolar} />
                        )}
                      </Text>
                    </Flex>
                    <Divider />
                  </>
                ) : (
                  " "
                )}
              </>
            );
          })
        : ""}

      {arrayPortfolio.length === 0 ? (
        ""
      ) : (
        <Flex flexDir={"column"} alignItems={"flex-end"}>
          <Text mt={1} w={36}>
            <strong>Total: </strong>
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
