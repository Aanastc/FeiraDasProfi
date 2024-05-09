import React from "react";
import imagem1 from "../assets/icons/webAula.svg";
import imagem2 from "../assets/icons/videoAula.svg";
import imagem3 from "../assets/icons/me.svg";
import imagem4 from "../assets/icons/exercicio.svg";
import imagem5 from "../assets/icons/mc.svg";

function Card({ imageSrc, title }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <p className="cardTexto">{title}</p>
    </div>
  );
}

export default function ComoFunciona({ Encontros, Avaliacao, porque }) {
  return (
    <div className="container">
      <h2>Como funciona... </h2>
      <p>
        Cada Percurso representa o conteúdo da disciplina, onde será estruturado
        em sessões como:
      </p>
      <div className="cards-container">
        <Card imageSrc={imagem1} title="Webaulas interativas" />
        <Card imageSrc={imagem2} title="Videoaulas e lives" />
        <Card imageSrc={imagem3} title="Material de estudo" />
        <Card imageSrc={imagem4} title="Exercício de fixação" />
        <Card imageSrc={imagem5} title="Material complemetar" />
      </div>
      <p>
        Para cada disciplina cursada, há 5 encontros, sendo 4 virtuais e 1
        presencial, realizado no Campus da Universidade de Fortaleza.
      </p>
      <div className="ImagemInicial2">
        <img src={Encontros} alt="" className="img-fluid" />
      </div>
      <p>
        O <strong>processo avaliativo</strong> é feito da seguinte forma:
      </p>
      <div className="ImagemInicial2">
        <img src={Avaliacao} alt="" className="img-fluid" />
      </div>
      <p>
        A nota final é uma pontuação única obtida pela soma das atividades. A
        Avaliação Substitutiva é exclusiva para disciplinas teóricas, aplicada
        se o aluno não atender aos critérios de aprovação regular, conforme a
        Resolução CEPE nº 44/2022 da Universidade de Fortaleza. As Atividades
        Avaliativas presenciais seguem o Decreto nº 9.057/2017 do Ministério da
        Educação, ocorrendo no Campus da universidade.
      </p>
      <h2>Porque nos escolher? </h2>
      <div className="ImagemInicial2">
        <img src={porque} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
