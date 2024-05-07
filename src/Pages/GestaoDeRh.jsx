import React from "react";
import Saudacao from "../Componentes/Saudacao";
import Formato from "../Componentes/Formato";
import Desenvolve from "../Componentes/Desenvolve";
import ComoFunciona from "../Componentes/ComoFunciona";
import Depoimentos from "../Componentes/Depoimentos";
import Coordenacao from "../Componentes/Coordenacao";

import ImagemSaudacao from "../assets/imgs/GestaoDeRh.png";
import Coordenador from "../assets/imgs/GestaoDeRhCoordenador.png";

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
];

export default function GestaoDeRh() {
  return (
    <>
      <Saudacao
        Nome="Gestão De RH"
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
      <div className="DepoimentosFundo">
        <h2 className="DepoimentosFundo_texto">Depoimentos</h2>
        {depoimentosData.map((depoimento, index) => (
          <Depoimentos
            key={index}
            imageSrc={depoimento.imageSrc}
            nome={depoimento.nome}
            papel={depoimento.papel}
            texto={depoimento.texto}
          />
        ))}
      </div>
      <div className="container">
        <div className="sessao_buttons">
          <a href="" target="_blank" className="botao">
            <div>
              <img src={matriz} alt="" />
            </div>
            <p className="botaoNome">Matriz Curricular</p>
          </a>
          <a href="" target="_blank" className="botao">
            <div>
              <img src={pdf} alt="" />
            </div>
            <p className="botaoNome">Baixar PDF</p>
          </a>
        </div>
        <Coordenacao
          imagemSrc={Coordenador}
          nome="Prof. Dr. Josimar Souza Costa"
          email="josimarcosta@unifor.br"
          telefone="(85) 3477.3192"
          bloco="Bloco Q | Sala 03"
        />
      </div>
    </>
  );
}
