import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MainContainer } from "./containers/MainContainer";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainContainer />
    </ChakraProvider>
  );
}

export default App;
