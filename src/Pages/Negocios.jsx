import React, { useEffect, useState } from "react";
import Saudacao from "../Componentes/Saudacao";
import Conteudo from "../Componentes/Conteudo";
import Depoimentos from "../Componentes/Depoimentos";
import Coordenacao from "../Componentes/Coordenacao";
import Cursos from "../Componentes/Cursos";
import Final from "../Componentes/Final";

import matriz from "../assets/icons/matriz.svg";
import pdf from "../assets/icons/pdf.svg";

// Especifico
import ImagemSaudacao from "../assets/Negocios/Capa.png";
import tempoIcone from "../assets/Negocios/tempo.png";
import AvaliacaoIcone from "../assets/Negocios/avaliacao.png";
import ImagemInicial2 from "../assets/Negocios/saudacaoImagem.png";
import Formato from "../assets/Negocios/Formato.png";
import Ema from "../assets/Negocios/EmaConteudo.png";
import Encontros from "../assets/Negocios/Encontros.png";
import processoAvaliativo from "../assets/Negocios/processoAvaliativo.png";
import Escolha from "../assets/Negocios/escolha.png";
import Coordenador from "../assets/Negocios/Coordenador.png";

export default function Negocios() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #BAAFDD 11.42%, #68579C 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#E6E7FD");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#68579C");

  return (
    <div>
      <Saudacao
        TextoInicio="Destaque-se no mundo com nosso curso EaD de "
        curso="Inteligência de Negócios "
        textoFim="."
        ImagemInicial={ImagemSaudacao}
        conceito="Domine análise de Big Data, interpretação de dados e modelos preditivos. Esteja apto a analisar dados complexos, comunicar resultados e liderar com visão sistêmica, empreendedora e ética. "
        tempoIcone={tempoIcone}
        tempo="2 anos"
        AvaliacaoIcone={AvaliacaoIcone}
        ImagemInicial2={ImagemInicial2}
        gradient={gradient}
        backgroundClaro={backgroundClaro}
        backgroundEscuro={backgroundEscuro}
      />
      <Conteudo
        backgroundEscuro={backgroundEscuro}
        ImagemFormato={Formato}
        texto1="Análise e Visualização de Dados"
        texto2="Gestão de Projetos de BI"
        texto3="Liderança com Visão Sistêmica"
        texto4="Análise de Big Data"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/inteligencia-de-negocios"
          target="_blank"
          className="botao"
          style={{ background: backgroundEscuro }}
        >
          <div>
            <img src={matriz} alt="Matriz Curricular" />
          </div>
          <p className="botaoNome">Matriz Curricular</p>
        </a>
        <a
          href="https://drive.google.com/file/d/1lv7tQgpNjtsxImeJ4j8_GjpgiDQPCSiC/view?usp=sharing"
          target="_blank"
          className="botao"
          style={{ background: backgroundEscuro }}
        >
          <div>
            <img src={pdf} alt="Baixar PDF" />
          </div>
          <p className="botaoNome">Baixar PDF</p>
        </a>
      </div>
      <Coordenacao
        backgroundEscuro={backgroundEscuro}
        imagemSrc={Coordenador}
        nome="Prof. Dr. Josimar Souza Costa"
        email="inteligneciadenegocios@unifor.br"
        telefone="(85) 3477.3192"
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 4, 5, 7, 6, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
