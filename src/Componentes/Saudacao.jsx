import React, { useState, useEffect } from "react";
import Logo from "../assets/icons/logo.svg";
import Ema from "../assets/icons/Ema_1.svg";
import Duracao from "../assets/icons/tempo.svg";
import Avaliacao from "../assets/icons/avaliacao.svg";

export default function Saudacao({
  Nome,
  ImagemInicial,
  curso,
  TextoInicio,
  conceito,
  textoFim,
  tempo,
  ImagemInicial2,
}) {
  const [topPosition, setTopPosition] = useState(0);
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const calculateFontSize = () => {
      const screenWidth = window.innerWidth;
      const newFontSize = Math.max(10, screenWidth / 20);
      setFontSize(newFontSize);
    };

    const calculateTopPosition = () => {
      const cardConceitoConteudo = document.querySelector(
        ".cardConceito_conteudo"
      );
      if (cardConceitoConteudo) {
        const cardHeight = cardConceitoConteudo.clientHeight;
        let topPercentage = 230;

        if (window.innerWidth >= 376) {
          topPercentage = 255;
        }

        if (window.innerWidth >= 426) {
          topPercentage = 320;
        }

        const newTopPosition = (cardHeight * topPercentage) / 100;
        setTopPosition(newTopPosition);
      }
    };

    const handleResize = () => {
      calculateFontSize();
      calculateTopPosition();
    };

    window.addEventListener("resize", handleResize);

    calculateFontSize();
    calculateTopPosition();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="fundoSaudacao">
        <img src={ImagemInicial} alt="Imagem" className="imagem" />
        <div className="content-texto">
          <img src={Logo} alt="Logo" className="logo" />
          <div>
            <p className="nome" style={{ fontSize: `${fontSize}px` }}>
              {TextoInicio}
              <strong>{curso}</strong>
              {textoFim}
            </p>
          </div>
        </div>
      </div>
      <div class="cardConceito">
        <div>
          <div className="cardConceito_conteudo">
            <p className="cardConceito_conteudoTexto">{conceito}</p>
          </div>
          <div className="emaPosition" style={{ top: topPosition }}>
            <img src={Ema} alt="" />
          </div>
        </div>
        <div className="cardConceito2_fundo">
          <div className="cardConceito2_conteudoTipo">
            <img src={Duracao} alt="" />
            <p className="cardConceito2_texto">{tempo}</p>
          </div>
          <div className="cardConceito2_conteudoTipo">
            <img src={Avaliacao} alt="" />
            <p className="cardConceito2_texto">Avaliações Presenciais</p>
          </div>
        </div>
      </div>
      <div className="recepcao">
        <h3 className="recepcaoTitulo">Boas-vindas!</h3>
        <p>
          Nossos cursos dispõem de uma plataforma educacional personalizada, com
          conteúdo ofertado em diversas mídias. As disciplinas dos cursos EAD
          são teóricas e vivenciais, podendo ser de natureza prática ou
          extensionista.
        </p>
        <div className="ImagemInicial2">
          <img src={ImagemInicial2} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
