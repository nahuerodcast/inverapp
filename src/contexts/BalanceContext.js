import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import {
  FormattedArs,
  FormattedUsd,
} from "../components/logged/FormattedNumbers";
import { db } from "../utils/init-firebase";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { Switch } from "@chakra-ui/react";

const BalanceContext = createContext({
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
  portfolio: null,
  bankAccounts: null,
});

export const useBalance = () => useContext(BalanceContext);

export default function BalanceContextProvider({ children }) {
  const { currentUser } = useAuth();

  // getting values from Firebase
  const [balanceData, setBalanceData] = useState("");
  useEffect(() => {
    onSnapshot(doc(db, "balance", currentUser.email), (doc) => {
      setBalanceData(doc.data());
    });
  }, []);

  // Setting values for Balance and equity Balance
  const ars = balanceData ? balanceData.ars : "ARS: $500.000";
  const usd = balanceData ? balanceData.usd : "USD: $5000";
  const positionArs = balanceData ? balanceData.positionArs : "ARS: $0";
  const positionUsd = balanceData ? balanceData.positionUsd : "USD: $0";

  function validateNumber() {
    if (isNaN(ars)) {
      return null;
    }
    return ars;
  }
  const stringARS = validateNumber(ars) ? <FormattedArs ars={ars} /> : "";
  const stringUSD = validateNumber(usd) ? <FormattedUsd usd={usd} /> : "";
  const stringPositionARS = validateNumber(ars) ? (
    <FormattedArs ars={positionArs} />
  ) : (
    ""
  );
  const stringPositionUSD = validateNumber(usd) ? (
    <FormattedUsd usd={positionUsd} />
  ) : (
    ""
  );

  // Setting the value for the currency conversion
  const [dolar, setDolar] = useState("");
  useEffect(() => {
    axios
      .get(`https://api-dolar-argentina.herokuapp.com/api/dolarblue`)
      .then((res) => {
        setDolar(Number(res.data.compra));
      })
      .catch();
  }, []);

  // getting portfolio values from Firebase
  const [orderArray, setOrderArray] = useState([]);

  useEffect(() => {
    const portfolioRef = doc(db, "portfolio", currentUser.email);
    onSnapshot(portfolioRef, (doc) => {
      if (doc.data() === undefined) {
        setOrderArray([]);
      } else {
        setOrderArray(doc.data().orders);
      }
    });
  }, []);

  const [currencyFlag, setCurrencyFlag] = useState(false);
  const [defaultCheck, setDefaultCheck] = useState(false);

  const settings = doc(db, "settings", currentUser.email);

  useEffect(() => {
    onSnapshot(settings, (doc) => {
      if (doc.data() === undefined) {
        setDoc(settings, {
          isActive: true,
          currencyFlag: !currencyFlag,
        });
      } else {
        setDefaultCheck(doc.data().currencyFlag);
      }
    });
  }, []);

  const fbdoc = doc(db, "settings", currentUser.email);
  const updateSettings = () => {
    setDoc(fbdoc, {
      isActive: true,
      currencyFlag: !defaultCheck,
    });
  };

  const currencySwitch = () => {
    return (
      <Switch
        isChecked={defaultCheck}
        onChange={() => {
          setDefaultCheck(!defaultCheck);
          updateSettings();
        }}
      />
    );
  };

  const [bankAccounts, setBankAccounts] = useState([]);
  const bankAccountsDoc = doc(db, "bankAccounts", currentUser.email);

  useEffect(() => {
    onSnapshot(bankAccountsDoc, (doc) => {
      if (doc.data() === undefined) {
        setDoc(bankAccountsDoc, {
          accounts: [],
        });
      } else {
        setBankAccounts(doc.data().accounts);
      }
    });
  }, []);

  

  // Exporting values with "value" Object to provider
  const value = {
    ars,
    usd,
    positionArs,
    positionUsd,
    stringARS,
    stringUSD,
    stringPositionARS,
    stringPositionUSD,
    dolar,
    portfolio: orderArray,
    defaultCheck,
    currencySwitch,
    bankAccounts,
  };
  return (
    <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
  );
}
