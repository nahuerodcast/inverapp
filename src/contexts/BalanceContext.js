import { Flex, Spinner } from "@chakra-ui/react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import {
  FormattedArs,
  FormattedNumbers,
  FormattedUsd,
} from "../components/logged/FormattedNumbers";
import { db } from "../utils/init-firebase";
import { useAuth } from "./AuthContext";
import axios from "axios";

const BalanceContext = createContext({
  isGenerated: null,
  ars: null,
  usd: null,
  positionArs: null,
  positionUsd: null,
  stringARS: null,
  stringUSD: null,
  stringPositionARS: null,
  stringPositionUSD: null,
  balanceData: null,
  dolar: null,
});

export const useBalance = () => useContext(BalanceContext);

export default function BalanceContextProvider({ children }) {
  const [balanceData, setBalanceData] = useState("");

  useEffect(() => {
    onSnapshot(doc(db, "balance", "nahuerodcast@gmail.com"), (doc) => {
      setBalanceData(doc.data());
    });
  }, []);

  const spinner = () => {
    return (
      <Flex>
        <Spinner />
      </Flex>
    );
  };

  const [dolar, setDolar] = useState({});

  useEffect(() => {
    axios
      .get(`https://api-dolar-argentina.herokuapp.com/api/dolarblue`)
      .then((res) => {
        setDolar(Number(res.data.compra));
      })
      .catch();
  }, []);

  const ars = balanceData ? balanceData.ars : "ARS: $500.000";
  const usd = balanceData ? balanceData.usd : "USD: $5000";
  const isGenerated = balanceData ? balanceData.isGenerated : null;
  const positionArs = balanceData ? balanceData.positionArs : "ARS: $0";
  const positionUsd = balanceData ? balanceData.positionUsd : "USD: $0";

  const value = {
    isGenerated,
    ars,
    usd,
    positionArs,
    positionUsd,
    stringARS: <FormattedArs ars={ars} />,
    stringUSD: <FormattedUsd usd={usd} />,
    stringPositionARS: <FormattedArs ars={positionArs} />,
    stringPositionUSD: <FormattedUsd usd={positionUsd} />,
    dolar,
  };
  return (
    <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
  );
}
