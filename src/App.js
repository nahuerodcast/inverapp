import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";
import { HomeContainer } from "./containers/HomeContainer";
import { AccountStateContainer } from "./containers/AccountStateContainer";
import Footer from "./components/Footer";
import { InverappNotFound } from "./containers/InverappNotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route
          exact
          path="/estado-de-cuenta"
          component={AccountStateContainer}
        />
        <Route
          exact
          path="/acciones-recomendadas"
          component={ItemListContainer}
        />
        <Route exact path="/invertir" component={InverappNotFound} />
        <Route exact path="*" component={InverappNotFound} />
        <div className="App">
          <br></br>
          <ItemListContainer
            greeting="Inverapp"
            subdesc="Acciones recomendadas del día"
          />
        </div>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
