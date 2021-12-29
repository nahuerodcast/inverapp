import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import AuthContextProvider from "./contexts/AuthContext";
import { LoginProvider } from "./components/global/LoginProvider";
import "animate.css";

function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <LoginProvider />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
