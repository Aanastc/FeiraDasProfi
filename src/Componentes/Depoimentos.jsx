import React from "react";
import Estrelas from "../assets/icons/Estrelas.svg";

export default function Depoimentos({ imageSrc, nome, papel, texto }) {
  return (
    <div className="Depoimentos">
      <div>
        <img src={imageSrc} alt="" />
      </div>
      <div>
        <p className="DepoimentosNome">{nome}</p>
        <p className="DepoimentosPapel">{papel}</p>
        <p>{texto}</p>
        <img src={Estrelas} alt="" />
      </div>
    </div>
  );
}
