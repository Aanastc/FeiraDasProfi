import React from "react";
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
  return (
    <div className="teste">
      <div className="saudacao-container">
        <div className="saudacao-content">
          <img src={ImagemInicial} alt="Imagem" className="imagem" />
          <div className="content-right">
            <img src={Logo} alt="Logo" className="logo" />
            <div>
              <p className="nome">
                {TextoInicio}
                <strong>{curso}</strong>
                {textoFim}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cardConceito">
        <div className="cardConceito_conteudo">
          <p className="cardConceito_conteudoTexto">{conceito}</p>
        </div>
        <div className="cardConceito2_conteudo">
          <div className="cardConceito2_conteudoTipo">
            <img src={Duracao} alt="" />
            <p className="cardConceito2_texto">{tempo}</p>
          </div>
          <div className="cardConceito2_conteudoTipo">
            <img src={Avaliacao} alt="" />
            <p className="cardConceito2_texto">Avaliações Presenciais</p>
          </div>
        </div>
        <div className="emaPosition">
          <img src={Ema} alt="" />
        </div>
      </div>
      <div className="recepcao container">
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
