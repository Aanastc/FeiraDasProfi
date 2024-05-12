import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Coordenacao({
  imagemSrc,
  nome,
  email,
  emailIcone,
  telefone,
  telefoneIcone,
  bloco,
  blocoIcone,
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
    <div className="conteudoContainer">
      <h2>Contato Coordenação</h2>
      <div className="coordenacaoInfo">
        <div>
          <img src={imagemSrc} alt={nome} />
        </div>
        <div>
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
