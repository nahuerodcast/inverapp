import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { UnloggedContainer } from "./containers/UnloggedContainer";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UnloggedContainer />
    </ChakraProvider>
  );
}

export default App;
