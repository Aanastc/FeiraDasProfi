import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import { isMobile } from "react-device-detect";
import Home from "./Home";

// cursos:
import Adm from "./Pages/Adm";
import Ads from "./Pages/Ads";
import Artificial from "./Pages/Artificial";
import Comercial from "./Pages/Comercial";
import Contabeis from "./Pages/Contabeis";
import Financeira from "./Pages/Financeira";
import Logistica from "./Pages/Logistica";
import Marketing from "./Pages/Marketing";
import Negocios from "./Pages/Negocios";
import Rh from "./Pages/Rh";

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
