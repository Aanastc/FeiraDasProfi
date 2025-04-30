import React from "react";
import qrCode from "../src/assets/Versao 25.1/Home Desktop/qrCode.jpg";
import Logo from "../src/assets/Versao 25.1/Home Desktop/LogoAzulMarinho.png";
import "./folhaDeEstilo.css";

export default function Home2() {
	return (
		<div className="Unifor container-lg">
			<div className="containerHome2">
				<img src={Logo} alt="" className="Logo_Home2" />
				<p className="paragraph scan-text">
					Aponte a câmera do seu celular para este QR Code:
				</p>
				<img src={qrCode} alt="QR Code" className="qr-code" />
			</div>
		</div>
	);
}
