import React from "react";
import { useState } from "react";
import Saudacao from "../Componentes/Saudacao";
import Formato from "../Componentes/Formato";
import Desenvolve from "../Componentes/Desenvolve";
import ComoFunciona from "../Componentes/ComoFunciona";
import Depoimentos from "../Componentes/Depoimentos";
import SessaoButtons from "../Componentes/SessaoButtons";
import Coordenacao from "../Componentes/Coordenacao";
import Cursos from "../Componentes/Cursos";
import Finalizacao from "../Componentes/Finalizacao";

// imagens
import ImagemSaudacao from "../assets/imgs/GestaoDeRh/GestaoDeRh.png";
import Duracao from "../assets/imgs/GestaoDeRh/tempo.png";
import Avaliacao from "../assets/imgs/GestaoDeRh/avaliacao.png";
import saudacaoImagem from "../assets/imgs/GestaoDeRh/saudacaoImagem.png";
import FormatoPng from "../assets/imgs/GestaoDeRh/Formato.png";
import Encontros from "../assets/imgs/GestaoDeRh/Encontros.png";
import processoAvaliativo from "../assets/imgs/GestaoDeRh/processoAvaliativo.png";
import Escolha from "../assets/imgs/GestaoDeRh/escolha.png";
import Coordenador from "../assets/imgs/GestaoDeRh/GestaoDeRhCoordenador.png";

import matrizCurricular from "../assets/pdfs/Placeholder-PDF.pdf";
import linkDoPdf from "../assets/pdfs/Placeholder-PDF.pdf";

export default function GestaoDeRh() {
  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #766ccc 11.42%, #3b3666 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#cfc8e5");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#3b3666");

  return (
    <>
      <Saudacao
        TextoInicio="Torne-se um profissional de "
        curso="Gestão De RH "
        textoFim="com nosso curso EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Desenvolva competências técnico-científicas e socioemocionais, aptidões para gerenciar talentos e promover ambientes saudáveis em um mercado em constante transformação tecnológica. "
        tempoIcone={Duracao}
        tempo="2 anos"
        AvaliacaoIcone={Avaliacao}
        ImagemInicial2={saudacaoImagem}
        gradient={gradient}
        backgroundClaro={backgroundClaro}
        backgroundEscuro={backgroundEscuro}
      />

      <Formato ImagemFormato={FormatoPng} backgroundEscuro={backgroundEscuro} />
      <Desenvolve
        texto1="Gestão de talentos"
        texto2="Capacidade crítica e analítica"
        texto3="Objetivos estratégicos empresariais"
        texto4="Resolução de problemas"
      />
      <ComoFunciona
        Encontros={Encontros}
        Avaliacao={processoAvaliativo}
        porque={Escolha}
      />
      {/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
      <div className="container">
        <SessaoButtons
          matrizCurricular={matrizCurricular}
          linkDoPdf={linkDoPdf}
          backgroundEscuro={backgroundEscuro}
        />
        <Coordenacao
          imagemSrc={Coordenador}
          nome="Prof. Dr. Josimar Souza Costa"
          email="josimarcosta@unifor.br"
          telefone="(85) 3477.3192"
          bloco="Bloco Q | Sala 03"
        />
      </div>
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 5]}
      />
      <Finalizacao backgroundEscuro={backgroundEscuro} />
    </>
  );
}
