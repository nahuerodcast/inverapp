import React from "react";
import TradingViewWidget from "react-tradingview-widget";

export const ChartContainer = () => {
  return (
    <div>
      <br />
      <TradingViewWidget symbol="NASDAQ:AAPL" />
      <br />
    </div>
  );
};
