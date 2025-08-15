import Logo from "../assets/Versao 25.1/logo-ead-unifor-horizontal.png";

export default function Final({ backgroundEscuro }) {
	return (
		<div className="FinalizacaoFundo" style={{ background: backgroundEscuro }}>
			<img src={Logo} alt="" className="logo_final" />
		</div>
	);
}
