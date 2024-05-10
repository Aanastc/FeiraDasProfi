import React from "react";
import Logo from "../assets/icons/LogoFinal.svg";

export default function Finalizacao({ backgroundEscuro }) {
  return (
    <div className="FinalizacaoFundo" style={{ background: backgroundEscuro }}>
      <img src={Logo} alt="" />
    </div>
  );
}
