import {
  Button,
  Divider,
  Flex,
  Heading,
  Img,
  Spinner,
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
  const { dolar, defaultCheck, currencySwitch, homeLoading } = useBalance();

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

  const [newArray, setNewArray] = useState(arrayPortfolio);

   let totalPortfolio = newArray.reduce(
    (a, b) => a + b.currentTotal,
    0
  );

  useEffect(() => {
    const newPortfolio = arrayPortfolio.reduce((acc, currentVal) => {
      const elementAlreadyExists = acc.find(
        (element) => element.symbol === currentVal.symbol
      );
      const filteredPrice = price.filter((p) =>
              p.name.includes(currentVal.name)
            );
            
      currentVal.currentTotal = currentVal.price * currentVal.quantity
      
      if (elementAlreadyExists) {
        return acc.map((element, i, arr) => {
          const filteredArray = arrayPortfolio.filter(
            (element) => element.symbol === currentVal.symbol
          );
          if (element.symbol === currentVal.symbol) {
            return {
              ...element,
              price:
                filteredArray.reduce((a, b) => a + b.price, 0) /
                filteredArray.length,
              quantity: element.quantity + currentVal.quantity,
              currentTotal: filteredArray.reduce((a, b) => a + filteredPrice[0]?.current_price * b.quantity, 0)
            };
          }
          return element;
        });
      }
      return [...acc, currentVal];
    }, []);
    setNewArray(newPortfolio);
  }, [arrayPortfolio]);
  
  return (
    <Flex my={1} flexDir={"column"}>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems="center"
        mb={1}
      >
        <Heading fontSize={"2xl"} letterSpacing="tight">
          Mis inversiones
        </Heading>
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
            {defaultCheck ? <strong>USD</strong> : <strong>ARS</strong>}
          </Text>
          {currencySwitch()}
        </Button>
      </Flex>
      <Divider mb={2} />
      {homeLoading && (
        <Flex
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
          my={4}
        >
          <Spinner />
        </Flex>
      )}
      {arrayPortfolio.length === 0 && !isNaN(dolar) && !homeLoading ? (
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
        !homeLoading && (
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
                Precio compra {!defaultCheck ? "ARS" : "USD"}
              </Text>
              <Text w={36} display={displayPreset}>
                Precio actual {!defaultCheck ? "ARS" : "USD"}
              </Text>
              <Text w={28} display={displayPreset}>
                Gan/Per {!defaultCheck ? "ARS" : "USD"}
              </Text>
              <Text w={36}>Gan/Per %</Text>
              <Text w={44}>
                <strong>Total en {!defaultCheck ? "ARS" : "USD"}</strong>
              </Text>
            </Flex>
            <Divider />
          </>
        )
      )}

      {newArray.length !== 0
        ? newArray.map((portfolio) => {
            const filteredPrice = price.filter((p) =>
              p.name.includes(portfolio.name)
            );
            const currentPrice = filteredPrice[0]?.current_price;
            const total = portfolio.currentTotal;
            const profitLoss = currentPrice - portfolio.price;
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

                      <Text w={24} fontSize={"lg"} isTruncated>
                        {portfolio.name}
                      </Text>
                      <Text w={32}>{portfolio.quantity?.toLocaleString()}</Text>
                      <Text w={48} display={displayPreset}>
                        {!defaultCheck
                          ? portfolio.currencySwitch
                            ? `$${(
                                portfolio.price * portfolio?.dolar
                              )?.toLocaleString()}`
                            : `$${(
                                portfolio.price * portfolio?.dolar
                              )?.toLocaleString()}`
                          : portfolio.currencySwitch
                          ? `$${portfolio.price?.toLocaleString()}`
                          : `$${portfolio.price?.toLocaleString()}`}
                      </Text>
                      <Text w={36} display={displayPreset} isTruncated>
                        {!defaultCheck
                          ? portfolio.currencySwitch
                            ? `$${(currentPrice * dolar)?.toLocaleString()}`
                            : `$${(currentPrice * dolar)?.toLocaleString()}`
                          : portfolio.currencySwitch
                          ? `$${currentPrice?.toLocaleString()}`
                          : `$${currentPrice?.toLocaleString()}`}
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
                            ? `$${(profitLoss * dolar)?.toLocaleString()}`
                            : `$${(profitLoss * dolar)?.toLocaleString()}`
                          : portfolio.currencySwitch
                          ? `$${profitLoss?.toLocaleString()}`
                          : `$${profitLoss?.toLocaleString()}`}
                      </Text>
                      <Text w={36} isTruncated>
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
                              {profitLossPercentage?.toLocaleString()}%
                            </StatHelpText>
                          </Stat>
                        )}
                      </Text>
                      <Text w={44} isTruncated>
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


      {arrayPortfolio.length > 0 && (
        <Flex
          flexDir={"column"}
          alignItems={["center", "center", "flex-end", "flex-end"]}
        >
          <Text mt={1} w={44} isTruncated fontSize="lg"  fontWeight="bold">
            <Flex>
               {defaultCheck ? 
           <FormattedUsd usd={totalPortfolio.toFixed(2)} /> : 
           <FormattedArs ars={totalPortfolio.toFixed(2) * dolar} />
            } 
            </Flex>
          
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
