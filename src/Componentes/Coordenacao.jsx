import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

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
  useEffect(() => {
    const infoItem = document.querySelectorAll(".infoItem");

    infoItem.forEach((element, index) => {
      ScrollReveal().reveal(element, {
        delay: 300 * index,
        distance: "20px",
        easing: "ease-in-out",
        interval: 150,
        origin: "right",
      });
    });
  }, []);
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
