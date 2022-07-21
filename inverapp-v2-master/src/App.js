import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { LoginProvider } from "./components/global/LoginProvider";
import "animate.css";
import AuthContextProvider from "./contexts/AuthContext";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <LoginProvider />
        </ParallaxProvider>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
