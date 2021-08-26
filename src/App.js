import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { HomeContainer } from "./containers/HomeContainer";
import { AccountStateContainer } from "./containers/AccountStateContainer";
import { InvestContainer } from "./containers/InvestContainer/InvestContainer";
import { CashInContainer } from "./containers/CashInContainer/CashInContainer";
import { CashOutContainer } from "./containers/CashOutContainer/CashOutContainer";
import { ChartContainer } from "./containers/ChartContainer/ChartContainer";
import Footer from "./components/Footer";
import { InverappNotFound } from "./containers/InverappNotFound";
import { useState } from "react";
import { useFirebaseApp } from "reactfire";
import { Auth } from "./containers/Auth/Auth";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  const [counterValue, setCounterValue] = useState(0);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeContainer></HomeContainer>
        </Route>
        <Route exact path="/estado-de-cuenta">
          <AccountStateContainer></AccountStateContainer>
        </Route>
        <Route exact path="/acciones-recomendadas">
          <ItemListContainer
            onAdd={() => {
              setCounterValue(counterValue + 1);
              console.log("noooo");
            }}
            orderCount={counterValue}
          />
        </Route>
        <Route exact path="/invertir">
          <InvestContainer></InvestContainer>
        </Route>
        <Route exact path="/graficos">
          <ChartContainer></ChartContainer>
        </Route>
        <Route exact path="/cargar-saldo">
          <CashInContainer></CashInContainer>
        </Route>
        <Route exact path="/egresar-fondos">
          <CashOutContainer></CashOutContainer>
        </Route>
        <Route exact path="/login">
          <Auth></Auth>
        </Route>
        <Route exact path="*" component={InverappNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
