import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";
import { Stat, StatArrow, StatHelpText } from "@chakra-ui/stat";
import React from "react";
import "./Coin.css";

export const Coin = ({
  image,
  name,
  price,
  marketcap,
  priceChange,
  symbol,
  volume,
}) => {
  return (
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
        </div>
      </div>
    </div>
  );
};
