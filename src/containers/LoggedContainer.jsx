import React from "react";
import { Navbar } from "../components/logged/Navbar";
import { Footer } from "../components/global/Footer";

import { Home } from "../components/logged/Home";
import { Help } from "../components/global/Help";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Acciones = () => {
  return <>acciones</>;
};

const Cedears = () => {
  return <>cedears</>;
};
const Cripto = () => {
  return <>criptonitaaaa</>;
};

const Fci = () => {
  return <>Fci</>;
};

const Usd = () => {
  return <>Usd</>;
};

export const LoggedContainer = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};
