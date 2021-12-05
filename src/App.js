import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { UnloggedContainer } from "./containers/UnloggedContainer";
import theme from "./theme";
import { app } from "./fb";
import { LoggedContainer } from "./containers/LoggedContainer";

function App() {
  const [user, setUser] = React.useState(false);

  return (
    <ChakraProvider theme={theme}>
      {user ? <LoggedContainer /> : <UnloggedContainer />}
    </ChakraProvider>
  );
}

export default App;
