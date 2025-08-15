import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Rola até o topo
	}, [location]);

	return null;
};

export default ScrollToTop;
