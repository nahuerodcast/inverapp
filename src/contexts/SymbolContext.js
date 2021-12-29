import { createContext, useContext, useState } from "react";

const SymbolContext = createContext({
  symbol: null,
  modificar: () => Promise,
});

export const useSymbol = () => useContext(SymbolContext);

export default function SymbolContextProvider({ children }) {
  const [setSymbol, setSetSymbol] = useState("holaa");
  function modificar() {
    setSetSymbol("AAAAAAA");
  }
  const value = {
    setSymbol,
    modificar,
  };
  return (
    <SymbolContext.Provider value={value}>{children}</SymbolContext.Provider>
  );
}
