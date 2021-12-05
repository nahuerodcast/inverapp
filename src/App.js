import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { UnloggedContainer } from "./containers/UnloggedContainer";
import theme from "./theme";
import { LoggedContainer } from "./containers/LoggedContainer";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  const [user, setUser] = React.useState(false);

  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        {user ? <LoggedContainer /> : <UnloggedContainer />}
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
