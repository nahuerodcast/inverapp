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
  const stringARS = validateNumber(ars) ? (
    <FormattedArs ars={ars} />
  ) : (
    <FormattedArs ars={0} color={"GrayText"} />
  );
  const stringUSD = validateNumber(usd) ? (
    <FormattedUsd usd={usd} />
  ) : (
    <FormattedUsd usd={0} color={"GrayText"} />
  );
  const stringPositionARS = validateNumber(ars) ? (
    <FormattedArs ars={positionArs} />
  ) : (
    <FormattedArs ars={0} color={"GrayText"} />
  );
  const stringPositionUSD = validateNumber(usd) ? (
    <FormattedUsd usd={positionUsd} />
  ) : (
    <FormattedUsd usd={0} color={"GrayText"} />
  );

  // Setting the value for the currency conversion
  const [dolar, setDolar] = useState("");
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      mode: "cors",
      redirect: "follow",
    };

    fetch(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => result && setDolar(JSON.parse(result)[3]?.casa?.compra))
      .catch((e) => console.log(e));
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

  const isGenerated = balanceData ? balanceData.isGenerated : false;

  // Exporting values with "value" Object to provider
  const value = {
    isGenerated,
    ars,
    usd,
    positionArs,
    positionUsd,
    stringARS,
    stringUSD,
    stringPositionARS,
    stringPositionUSD,
    dolar: parseInt(dolar),
    portfolio: orderArray,
    defaultCheck,
    currencySwitch,
    bankAccounts,
  };
  return (
    <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
  );
}
