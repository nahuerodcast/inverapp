import React from "react";
import { Navbar } from "../components/logged/Navbar";
import { Footer } from "../components/global/Footer";
import { Home } from "../components/logged/Home";
import { Withdrawal } from "../components/logged/Withdrawal";
import { BankTransfers } from "../components/logged/BankTransfers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Settings } from "../components/logged/Settings";
import { NotFound } from "../components/global/NotFound";
import { MessageCenter } from "../components/logged/MessageCenter";
import { AccountBalance } from "../components/logged/AccountBalance";
import { Trade } from "../components/logged/Trade";
import { Flex } from "@chakra-ui/react";
import BalanceContextProvider from "../contexts/BalanceContext";

export const LoggedContainer = () => {
  return (
    <BalanceContextProvider>
      <Router>
        <Flex
          maxW={"100vw"}
          flexDir={"column"}
          justifyContent={"space-between"}
          minH={"100vh"}
        >
          <Flex flexDir={"column"}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route
                path="/mi-cuenta"
                element={<Settings defaultIndex={0} />}
              ></Route>

              <Route
                path="/configuracion"
                element={<Settings defaultIndex={0} />}
              ></Route>
              <Route
                path="/cuentas-bancarias"
                element={<Settings defaultIndex={1} />}
              ></Route>
              <Route path="/mensajeria" element={<MessageCenter />}></Route>
              <Route
                exact
                path="/saldo-app"
                element={<AccountBalance />}
              ></Route>
              <Route
                exact
                path="/saldo-app/retirar"
                element={<Withdrawal />}
              ></Route>
              <Route
                exact
                path="/saldo-app/cargar"
                element={<BankTransfers />}
              ></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route exact path="/operar" element={<Trade />}></Route>
            </Routes>
          </Flex>
          <Footer />
        </Flex>
      </Router>
    </BalanceContextProvider>
  );
};
