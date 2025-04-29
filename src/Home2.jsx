import qrCode from "../src/assets/qrCode.jpg";
import Logo from "../src/assets/CapasHome/LogoAzulMarinho.png";
import "./Home2.css";

export default function Home2() {
	return (
		<div className="Unifor containerHome2">
			<img src={Logo} alt="" className="Logo_Home2" />
			<div className="desktop_version">
				<p className="scan-text">
					Aponte a câmera do seu celular para este QR Code:
				</p>
				<img src={qrCode} alt="QR Code" className="qr-code" />
			</div>
		</div>
	);
}
