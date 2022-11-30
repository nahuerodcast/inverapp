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
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { useAuth } from "../../contexts/AuthContext";

export const Portfolio = ({ arrayPortfolio }) => {
  const [price, setPrice] = useState([]);
  const { dolar, defaultCheck, currencySwitch } = useBalance();

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

  const displayPreset = ["none", "none", "none", "inherit"];

  const { currentUser } = useAuth();
  const [currencyFlag, setCurrencyFlag] = useState(false);
  const [defaultCheckk, setDefaultCheckk] = useState(false);
  const fbdoc = doc(db, "settings", currentUser.email);

  useEffect(() => {
    onSnapshot(fbdoc, (doc) => {
      setDefaultCheckk(doc.data().currencyFlag);
    });
  }, []);

  const settings = () => {
    setDoc(fbdoc, {
      isActive: true,
      currencyFlag: !currencyFlag,
    });
  };

  return (
    <Flex my={1} flexDir={"column"}>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems="center"
        mb={1}
      >
        <Heading fontSize={"2xl"}>Mis inversiones</Heading>
        <Button
          variant="ghost"
          m={0}
          borderRadius={9999}
          onClick={() => {
            setCurrencyFlag(!currencyFlag);
            settings();
          }}
        >
          <Text mr={2}>
            {defaultCheck ? (
              <strong>USD 🇺🇸 </strong>
            ) : (
              <strong> ARS 🇦🇷 </strong>
            )}
          </Text>
          {currencySwitch()}
        </Button>
      </Flex>
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
          <Flex
            flexDir={["column", "column", "row", "row"]}
            justifyContent={["center", "center", "center", "space-between"]}
            alignItems={["center", "center", "center", "space-between"]}
            textAlign={["center", "center", "inherit", "inherit"]}
            mt={1}
            mb={2}
          >
            <Text w={8}></Text>
            <Text w={24}>Nombre</Text>
            <Text w={32}>Cantidad </Text>
            <Text w={48} display={displayPreset}>
              Precio compra (usd)
            </Text>
            <Text w={36} display={displayPreset}>
              Precio actual (usd)
            </Text>
            <Text w={28} display={displayPreset}>
              Gan/Per {!defaultCheck ? "ARS" : "USD"}
            </Text>
            <Text w={36}>Gan/Per %</Text>
            <Text w={36}>
              <strong>Total en {!defaultCheck ? "ARS" : "USD"}</strong>
            </Text>
          </Flex>
          <Divider />
        </>
      )}

      {arrayPortfolio.length !== 0
        ? arrayPortfolio.map((portfolio) => {
            const filteredPrice = price.filter((p) =>
              p.name.includes(portfolio.name)
            );
            const currentPrice = filteredPrice[0]?.current_price;
            const quantity = portfolio.quantity;
            const total = quantity * currentPrice;

            const profitLoss = total - quantity * portfolio.price;
            const profitLossPercentage =
              (currentPrice * 100) / portfolio.price - 100;

            return (
              <>
                {portfolio.length !== 0 ? (
                  <>
                    <Flex
                      flexDir={["column", "column", "row", "row"]}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      textAlign={["center", "center", "inherit", "inherit"]}
                      my={2}
                    >
                      <Img w={[12, 12, 8, 8]} src={portfolio.image}></Img>

                      <Text w={24} fontSize={"lg"}>
                        {portfolio.name}
                      </Text>
                      <Text w={32}>{portfolio.quantity.toFixed(4)}</Text>
                      <Text w={48} display={displayPreset}>
                        ${portfolio.price}
                      </Text>
                      <Text w={36} display={displayPreset}>
                        ${currentPrice}
                      </Text>
                      <Text
                        color={
                          profitLossPercentage !== 0
                            ? profitLossPercentage > 0
                              ? "green.600"
                              : "red.600"
                            : "GrayText"
                        }
                        w={28}
                        display={displayPreset}
                      >
                        {!defaultCheck
                          ? portfolio.currencySwitch
                            ? `$${(profitLoss * dolar).toFixed(2)}`
                            : `$${(profitLoss * dolar).toFixed(2)}`
                          : portfolio.currencySwitch
                          ? `$${profitLoss.toFixed(2)}`
                          : `$${profitLoss.toFixed(2)}`}
                      </Text>
                      <Text w={36}>
                        {profitLossPercentage !== 0 ? (
                          profitLossPercentage > 0 ? (
                            <Stat>
                              <StatHelpText>
                                <StatArrow type="increase" /> +
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
                          )
                        ) : (
                          <Stat>
                            <StatHelpText>
                              {profitLossPercentage.toFixed(2)}%
                            </StatHelpText>
                          </Stat>
                        )}
                      </Text>

                      <Text w={36}>
                        {!defaultCheck ? (
                          portfolio.currencySwitch ? (
                            <FormattedArs ars={total * dolar} />
                          ) : (
                            <FormattedArs ars={total * dolar} />
                          )
                        ) : portfolio.currencySwitch ? (
                          <FormattedUsd usd={total} />
                        ) : (
                          <FormattedUsd usd={total} />
                        )}
                        {}
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
        <Flex
          flexDir={"column"}
          alignItems={["center", "center", "flex-end", "flex-end"]}
        >
          <Text mt={1} w={36} fontSize="lg">
            <strong>Total: </strong>
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
