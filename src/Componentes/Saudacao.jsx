import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Logo from "../assets/LogoBranca.png";
import Ema from "../assets/imgs/EmaSaudacao.png";

export default function Saudacao({
  ImagemInicial,
  curso,
  TextoInicio,
  conceito,
  textoFim,
  tempo,
  tempoIcone,
  ImagemInicial2,
  AvaliacaoIcone,
  gradient,
  backgroundClaro,
  backgroundEscuro,
}) {
  const [topPosition, setTopPosition] = useState(0);
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    const calculateFontSize = () => {
      const screenWidth = window.innerWidth;
      const minFontSize = 18;
      const maxFontSize = 24;
      const newFontSize = Math.min(
        maxFontSize,
        Math.max(minFontSize, screenWidth / 20)
      );
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

  useEffect(() => {
    const revealConfig = {
      delay: 300,
      distance: "20px",
      easing: "ease-in-out",
      interval: 150,
    };

    ScrollReveal().reveal(".revealBottom", {
      ...revealConfig,
      origin: "bottom",
    });
    ScrollReveal().reveal(".revealTop", { ...revealConfig, origin: "top" });
    ScrollReveal().reveal(".revealLeft", { ...revealConfig, origin: "left" });
  }, []);

  return (
    <div>
      <div className="fundoSaudacao" style={{ background: gradient }}>
        <img src={ImagemInicial} alt="Imagem" className="imagem revealTop" />
        <div className="fundoSaudacao_texto revealBottom">
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
          <div
            className="cardConceito_conteudo"
            style={{ background: backgroundClaro }}
          >
            <p className="cardConceito_conteudoTexto">{conceito}</p>
          </div>
          <div className="emaPosition" style={{ top: topPosition }}>
            <img src={Ema} alt="" className="emaSaudacao" />
          </div>
        </div>
        <div
          className="cardConceito2_fundo"
          style={{ background: backgroundEscuro }}
        >
          <div className="cardConceito2_conteudoTipo revealBottom">
            <img src={tempoIcone} alt="" className="saudacaoIcone" />
            <p className="cardConceito2_texto">{tempo}</p>
          </div>
          <div className="cardConceito2_conteudoTipo revealBottom">
            <img src={AvaliacaoIcone} alt="" className="saudacaoIcone" />
            <p className="cardConceito2_texto">Avaliações Presenciais</p>
          </div>
        </div>
      </div>
      <div className="conteudoContainer">
        <h2 className="recepcaoTitulo revealLeft">Boas-vindas!</h2>
        <p className="revealLeft">
          Nossos cursos dispõem de uma plataforma educacional personalizada, com
          conteúdo ofertado em diversas mídias. As disciplinas dos cursos EAD
          são teóricas e vivenciais, podendo ser de natureza prática ou
          extensionista.
        </p>
        <div className="ImagemConteudo revealBottom">
          <img src={ImagemInicial2} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
