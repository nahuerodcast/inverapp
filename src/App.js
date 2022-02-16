import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AuthContextProvider from "./contexts/AuthContext";
import { LoginProvider } from "./components/global/LoginProvider";
import "animate.css";
import BalanceContextProvider from "./contexts/BalanceContext";

function App() {
  const value = {
    email: null,
    isGenerated: "nulo jaja",
    ars: null,
    usd: null,
    positionArs: null,
    positionUsd: null,
  };
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <BalanceContextProvider>
          <LoginProvider />
        </BalanceContextProvider>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
