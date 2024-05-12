import Logo from "../assets/icons/LogoFinal.svg";

export default function Final({ backgroundEscuro }) {
  return (
    <div className="FinalizacaoFundo" style={{ background: backgroundEscuro }}>
      <img src={Logo} alt="" />
    </div>
  );
}
