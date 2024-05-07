import React from "react";
import emailIcone from "../assets/icons/email.svg";
import telefoneIcone from "../assets/icons/telefone.svg";
import blocoIcone from "../assets/icons/bloco.svg";

export default function Coordenacao({
  imagemSrc,
  nome,
  email,
  telefone,
  bloco,
}) {
  return (
    <div className="coordenacao">
      <h2>Contato Coordenação</h2>
      <div className="coordenacao-info">
        <div className="imagem-container">
          <img src={imagemSrc} alt={nome} />
        </div>
        <div className="info">
          <p className="coordenacaoNome">{nome}</p>
          <div className="infoItem">
            <img src={emailIcone} />
            <p className="infoTexto">{email}</p>
          </div>
          <div className="infoItem">
            <img src={telefoneIcone} />
            <p className="infoTexto">{telefone}</p>
          </div>
          <div className="infoItem">
            <img src={blocoIcone} />
            <p className="infoTexto">{bloco}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
