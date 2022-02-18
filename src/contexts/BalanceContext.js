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
});

export const useBalance = () => useContext(BalanceContext);

export default function BalanceContextProvider({ children }) {
  // User info
  // const { currentUser } = useAuth();

  // console.log(currentUser.email);

  // const data = () => {
  //   return currentUser.email;
  // };

  // console.log(data());

  const [balanceData, setBalanceData] = useState("");

  useEffect(() => {
    onSnapshot(doc(db, "balance", "nahuerodcast@gmail.com"), (doc) => {
      setBalanceData(doc.data());
    });
  }, []);

  // const filteredEmail = balanceData.filter((a) =>
  //   a.email.includes(currentUser.email)
  // );

  // const validatedEmail = filteredEmail.map((a) => {
  //   return a.email === currentUser.email && a.isGenerated ? true : false;
  // });

  const spinner = () => {
    return (
      <Flex>
        <Spinner />
      </Flex>
    );
  };

  // const usd = validatedEmail[0]
  //   ? filteredEmail.map((a) => {
  //       return a.email === currentUser.email ? Number(a.usd) : false;
  //     })
  //   : spinner();

  // const positionArs = validatedEmail[0]
  //   ? filteredEmail.map((a) => {
  //       return a.email === currentUser.email ? Number(a.positionArs) : false;
  //     })
  //   : spinner();

  // const positionUsd = validatedEmail[0]
  //   ? filteredEmail.map((a) => {
  //       return a.email === currentUser.email ? Number(a.positionUsd) : false;
  //     })
  //   : spinner();

  // const isGenerated = validatedEmail[0]
  //   ? filteredEmail.map((a) => {
  //       return a.email === currentUser.email ? Boolean(a.isGenerated) : false;
  //     })
  //   : spinner();

  // const email = validatedEmail[0]
  //   ? filteredEmail.map((a) => {
  //       return a.email === currentUser.email ? String(a.email) : false;
  //     })
  //   : spinner();

  // const stringPositionARS = validatedEmail[0]
  //   ? `ARS: $${positionArs.toLocaleString(4)}`
  //   : spinner();

  // const stringPositionUSD = validatedEmail[0]
  //   ? `USD: $${positionUsd.toLocaleString(4)}`
  //   : spinner();

  // const stringARS = validatedEmail[0]
  //   ? `ARS: $${ars.toLocaleString(4)}`
  //   : spinner();

  // const stringUSD = validatedEmail[0]
  //   ? `USD: $${usd.toLocaleString(4)}`
  //   : spinner();

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
  };
  return (
    <BalanceContext.Provider value={value}>{children}</BalanceContext.Provider>
  );
}
