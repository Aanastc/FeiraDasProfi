import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// cursos:
import Ads from "./Pages/Ads";
import Adm from "./Pages/Adm";
import Contabeis from "./Pages/Contabeis";
import GesComercial from "./Pages/GesComercial";
import GesFinanceira from "./Pages/GesFinanceira";
import GestaoDeRh from "./Pages/GestaoDeRh";
import Marketing from "./Pages/Marketing";
import Logistica from "./Pages/Adm";
import IntNegocios from "./Pages/IntNegocios";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Ads" element={<Ads />} />
      <Route path="GestaoDeRh" element={<GestaoDeRh />} />
      <Route path="Adm" element={<Adm />} />
      <Route path="Contabeis" element={<Contabeis />} />
      <Route path="GesComercial" element={<GesComercial />} />
      <Route path="GesFinanceira" element={<GesFinanceira />} />
      <Route path="Marketing" element={<Marketing />} />
      <Route path="Logistica" element={<Logistica />} />
      <Route path="IntNegocios" element={<IntNegocios />} />
    </Routes>
  );
};

export default App;
