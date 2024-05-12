import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Check from "../assets/icons/check.svg";

function Card({ imageSrc, title }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <p className="cardTexto">{title}</p>
    </div>
  );
}

export default function Conteudo({
  ImagemFormato,
  backgroundEscuro,
  texto1,
  texto2,
  texto3,
  texto4,
  Ema,
  Encontros,
  webAula,
  videoAula,
  me,
  exercicio,
  mc,
  processoAvaliativo,
  Escolha,
}) {
  useEffect(() => {
    const revealConfig = {
      delay: 300,
      distance: "20px",
      easing: "ease-in-out",
      interval: 150,
    };

    ScrollReveal().reveal(".revealLeft", { ...revealConfig, origin: "left" });
    ScrollReveal().reveal(".revealRight", {
      ...revealConfig,
      origin: "right",
    });
    ScrollReveal().reveal(".revealBottom", {
      ...revealConfig,
      origin: "bottom",
    });

    const flexBaselineElements = document.querySelectorAll(".flexBaseline");

    flexBaselineElements.forEach((element, index) => {
      ScrollReveal().reveal(element, {
        delay: 300 * index,
        distance: "50px",
        easing: "ease-in-out",
        interval: 150,
        origin: "left",
      });
    });
  }, []);
  return (
    <div>
      <div className="Fundo" style={{ background: backgroundEscuro }}>
        <p className="Fundo_texto revealLeft">
          Ao longo do curso, cada semestre - dividido em 2 trimestres - pode
          variar em 2 formatos, dependendo do seu curso. Você pode iniciar pelo
          formato 1 ou pelo formato 2, dependendo do período que você ingressar.
        </p>
        <div className="ImagemConteudo revealRight">
          <img src={ImagemFormato} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="desenvolve">
        <h2>Aqui você desenvolve... </h2>
        <div className="desenvolveGrupo">
          <div className="desenvolveGrupo_topicos">
            <div className="flexBaseline">
              <img src={Check} />
              <p>{texto1}</p>
            </div>
            <div className="flexBaseline">
              <img src={Check} />
              <p>{texto2}</p>
            </div>
            <div className="flexBaseline">
              <img src={Check} />
              <p>{texto3}</p>
            </div>
            <div className="flexBaseline">
              <img src={Check} />
              <p>{texto4}</p>
            </div>
          </div>
          <div className="imagemContainer">
            <img src={Ema} alt="" />
          </div>
        </div>
      </div>
      <div className="conteudoContainer revealLeft">
        <h2>Como funciona... </h2>
        <p>
          Cada Percurso representa o conteúdo da disciplina, onde será
          estruturado em sessões como:
        </p>
      </div>
      <div className="cards-container revealBottom">
        <Card imageSrc={webAula} title="Webaulas interativas" />
        <Card imageSrc={videoAula} title="Videoaulas e lives" />
        <Card imageSrc={me} title="Material de estudo" />
        <Card imageSrc={exercicio} title="Exercício de fixação" />
        <Card imageSrc={mc} title="Material complemetar" />
      </div>
      <div className="conteudoContainer">
        <p className="revealLeft">
          Para cada disciplina cursada, há 5 encontros, sendo 4 virtuais e 1
          presencial, realizado no Campus da Universidade de Fortaleza.
        </p>
        <div className="ImagemConteudo revealBottom">
          <img src={Encontros} alt="" className="img-fluid" />
        </div>
        <p className="revealLeft">
          O <strong>processo avaliativo</strong> é feito da seguinte forma:
        </p>
        <div className="ImagemConteudo revealBottom">
          <img src={processoAvaliativo} alt="" className="img-fluid" />
        </div>
        <p className="revealLeft">
          A nota final é uma pontuação única obtida pela soma das atividades. A
          Avaliação Substitutiva é exclusiva para disciplinas teóricas, aplicada
          se o aluno não atender aos critérios de aprovação regular, conforme a
          Resolução CEPE nº 44/2022 da Universidade de Fortaleza. As Atividades
          Avaliativas presenciais seguem o Decreto nº 9.057/2017 do Ministério
          da Educação, ocorrendo no Campus da universidade.
        </p>
        <h2>Porque nos escolher? </h2>
        <div className="ImagemConteudo revealBottom">
          <img src={Escolha} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
