import './App.css';
import Navbar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
    < Navbar />
    <br></br>
    < ItemListContainer greeting='Inverapp' subdesc='Acciones recomendadas del día' />
    </div>
  );
}

export default App;
