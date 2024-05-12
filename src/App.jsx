import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

// cursos:
import Adm from "./Pages/Adm";
import Ads from "./Pages/Ads";
import Contabeis from "./Pages/Contabeis";
import Comercial from "./Pages/Comercial";
import Financeira from "./Pages/Financeira";
import Rh from "./Pages/Rh";
import Negocios from "./Pages/Negocios";
import Logistica from "./Pages/Logistica";
import Marketing from "./Pages/Marketing";
import Artificial from "./Pages/Artificial";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Ads" element={<Ads />} />
      <Route path="Rh" element={<Rh />} />
      <Route path="Adm" element={<Adm />} />
      <Route path="Contabeis" element={<Contabeis />} />
      <Route path="Comercial" element={<Comercial />} />
      <Route path="Financeira" element={<Financeira />} />
      <Route path="Marketing" element={<Marketing />} />
      <Route path="Logistica" element={<Logistica />} />
      <Route path="Negocios" element={<Negocios />} />
      <Route path="Artificial" element={<Artificial />} />
    </Routes>
  );
};

export default App;
