import React from 'react'
import TradingViewWidget from 'react-tradingview-widget';


export const InvestContainer = () => {
    return (
        <div>
            <br />
             <TradingViewWidget symbol="NASDAQ:AAPL" />
        </div>
    )
}
