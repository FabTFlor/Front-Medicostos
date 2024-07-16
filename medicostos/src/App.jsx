import React from "react";
import Consejo from "./Consejo/Consejo";
import NavBar from "./components/NavBar/NavBar";
import Portada from "./Portada/Portada";
import "./App.css";
import CardGrid from "./Consejo/CardGrid";
import { Routes, Route } from "react-router-dom";
import Contacto from "./Contacto/Contacto";

import InfoCard from "./components/Card/InfoCard";

function App() {
  return (
    <>
      <NavBar />
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Portada />}></Route>
        <Route path="/consejos" element={<CardGrid />}></Route>
        <Route path="/contactanos" element={<Contacto />}></Route>
      </Routes>
    </>
  );
}

export default App;
