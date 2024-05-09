import React from "react";
import Saudacao from "../Componentes/Saudacao";
import Formato from "../Componentes/Formato";
import Desenvolve from "../Componentes/Desenvolve";
import ComoFunciona from "../Componentes/ComoFunciona";
import Depoimentos from "../Componentes/Depoimentos";
import SessaoButtons from "../Componentes/SessaoButtons";
import Coordenacao from "../Componentes/Coordenacao";
import Finalizacao from "../Componentes/Finalizacao";

import ImagemSaudacao from "../assets/imgs/GestaoDeRh.png";
import Coordenador from "../assets/imgs/GestaoDeRhCoordenador.png";
import matrizCurricular from "../assets/pdfs/Placeholder-PDF.pdf";
import linkDoPdf from "../assets/pdfs/Placeholder-PDF.pdf";

import Avaliacao from "../assets/imgs/GestaoDeRhGrafico.svg";
import porque from "../assets/imgs/GestaoDeRhGraficoCelular.svg";
import Encontros from "../assets/imgs/GestaoDeRhEncontros.svg";
import ImagemSaudacao2 from "../assets/imgs/GestaoDeRhVindas.svg";
import ImagemFormato from "../assets/imgs/GestaoDeRhFormato.svg";
import matriz from "../assets/icons/matriz.svg";
import pdf from "../assets/icons/pdf.svg";

import hans from "../assets/imgs/hans.png";

const depoimentosData = [
  {
    imageSrc: hans,
    nome: "Hansmuller Oliveira",
    papel: "Aluno EAD Unifor",
    texto:
      "“A EaD da Unifor me oferece aulas que são desenvolvidas e ministradas por professores qualificados e especialistas em suas áreas, garantindo a qualidade do ensino e materiais didáticos. [...] Temos um suporte abrangente, incluindo tutores online, serviços de orientação acadêmica, entre outros.”",
  },
  {
    imageSrc: hans,
    nome: "Vitor Andrade",
    papel: "Aluno EAD Unifor",
    texto:
      "“Nós do EAD temos acesso ao campus da Unifor e a todos os serviços que o aluno do presencial tem, e isso me chama muita atenção. Para o futuro, eu espero ter uma carreira de excelência, aplicando todo o meu aprendizado.”",
  },
  {
    imageSrc: hans,
    nome: "Mara Núbia Angelim",
    papel: "Aluno EAD Unifor",
    texto:
      "“Apesar de ser um curso a distância, sinto-me plenamente conectada à comunidade acadêmica. Tenho contato regular com outros alunos por meio de fóruns de discussão, grupos de estudo e atividades propostas pelos professores.”",
  },
];

export default function GestaoDeRh() {
  return (
    <>
      <Saudacao
        TextoInicio="Torne-se um profissional de "
        curso="Gestão De RH "
        textoFim="com nosso curso EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Desenvolva competências técnico-científicas e socioemocionais, aptidões para gerenciar talentos e promover ambientes saudáveis em um mercado em constante transformação tecnológica. "
        tempo="2 anos"
        ImagemInicial2={ImagemSaudacao2}
      />

      <Formato ImagemFormato={ImagemFormato} />
      <Desenvolve
        texto1="Gestão de talentos"
        texto2="Capacidade crítica e analítica"
        texto3="Objetivos estratégicos empresariais"
        texto4="Resolução de problemas"
      />
      <ComoFunciona
        Encontros={Encontros}
        Avaliacao={Avaliacao}
        porque={porque}
      />
      <Depoimentos depoimentosData={depoimentosData} />
      <div className="container">
        <SessaoButtons
          matrizCurricular={matrizCurricular}
          linkDoPdf={linkDoPdf}
        />
        <Coordenacao
          imagemSrc={Coordenador}
          nome="Prof. Dr. Josimar Souza Costa"
          email="josimarcosta@unifor.br"
          telefone="(85) 3477.3192"
          bloco="Bloco Q | Sala 03"
        />
      </div>
      <Finalizacao />
    </>
  );
}
