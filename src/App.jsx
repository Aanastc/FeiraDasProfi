import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Home from "./Home";
import Home2 from "./Home2";

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
			{/* <Route path="/" element={isMobile ? <Home /> : <Home2 />} /> */}
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
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default App;
