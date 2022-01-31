import { Flex, Spinner } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { db } from "../utils/init-firebase";
import { useAuth } from "./AuthContext";

const BalanceContext = createContext({
  email: null,
  isGenerated: null,
  ars: null,
  usd: null,
  positionArs: null,
  positionUsd: null,
  numberArs: null,
  numberUsd: null,
});

export const useBalance = () => useContext(BalanceContext);

export default function BalanceContextProvider({ children }) {
  const [balanceData, setBalanceData] = useState([]);
  const balanceRef = collection(db, "balance");

  const { currentUser } = useAuth();

  useEffect(() => {
    const getBalanceData = async () => {
      const data = await getDocs(balanceRef);
      setBalanceData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBalanceData();
  }, []);

  const filteredEmail = balanceData.filter((a) =>
    a.email.includes(currentUser.email)
  );

  const validatedEmail = filteredEmail.map((a) => {
    return a.email === currentUser.email && a.isGenerated ? true : false;
  });
  const spinner = () => {
    return (
      <Flex>
        <Spinner />
      </Flex>
    );
  };

  const valorARS = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email
          ? `ARS: $${Number(a.numberArs).toLocaleString(4)}`
          : false;
      })
    : spinner();

  const valorUSD = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email
          ? `USD: $${Number(a.usd).toLocaleString(4)}`
          : false;
      })
    : spinner();

  const positionArs = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email
          ? `ARS: $${Number(a.positionArs).toLocaleString(4)}`
          : false;
      })
    : spinner();

  const positionUsd = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email
          ? `USD: $${Number(a.positionUsd).toLocaleString(4)}`
          : false;
      })
    : spinner();

  const numberArs = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email ? Number(a.ars) : false;
      })
    : spinner();

  const numberUsd = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email ? Number(a.usd) : false;
      })
    : spinner();

  const isGenerated = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email ? Boolean(a.isGenerated) : false;
      })
    : spinner();

  const email = validatedEmail[0]
    ? filteredEmail.map((a) => {
        return a.email === currentUser.email ? String(a.email) : false;
      })
    : spinner();

  const value = {
    email: email,
    isGenerated: isGenerated,
    ars: valorARS,
    usd: valorUSD,
    positionArs: positionArs,
    positionUsd: positionUsd,
    numberArs: numberArs,
    numberUsd: numberUsd,
    balanceData,
  };
  return (
    <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
  );
}
