import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { UnloggedContainer } from "./containers/UnloggedContainer";
import theme from "./theme";
import { LoggedContainer } from "./containers/LoggedContainer";
import AuthContextProvider from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = React.useState(true);

  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        {user ? <LoggedContainer /> : <UnloggedContainer />}
      </ChakraProvider>
    </AuthContextProvider>

    /* <Router>
<Navbar />
<Routes>
  <Route exact path="/" element={<Home />}></Route>
  <Route path="/acciones" element={<Acciones />}></Route>
  <Route path="/cedears" element={<Cedears />}></Route>
  <Route path="/cripto" element={<Cripto />}></Route>
  <Route path="/fci" element={<Fci />}></Route>
  <Route path="/usd" element={<Usd />}></Route>
  <Route path="/help" element={<Help />}></Route>
</Routes>
<Footer />
</Router> */
  );
}

export default App;
