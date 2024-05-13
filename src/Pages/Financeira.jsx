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
import ImagemSaudacao from "../assets/Financeira/Capa.png";
import tempoIcone from "../assets/Financeira/tempo.png";
import AvaliacaoIcone from "../assets/Financeira/avaliacao.png";
import ImagemInicial2 from "../assets/Financeira/saudacaoImagem.png";
import Formato from "../assets/Financeira/Formato.png";
import Ema from "../assets/Financeira/EmaConteudo.png";
import Encontros from "../assets/Financeira/Encontros.png";
import processoAvaliativo from "../assets/Financeira/processoAvaliativo.png";
import Escolha from "../assets/Financeira/escolha.png";
import Coordenador from "../assets/Financeira/Coordenador.png";

export default function Financeira() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #70EAE1 11.42%, #00847A 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#D6FFFC");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#00847A");

  return (
    <div>
      <Saudacao
        TextoInicio="Alcance excelência em "
        curso="Gestão Financeira "
        textoFim="com nosso curso EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Desenvolva habilidades para solucionar desafios, como gestão de caixa, liquidez, endividamento e rentabilidade, aprendendo técnicas modernas para avaliação de investimentos empresariais. "
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
        texto1="Gestão de Capital de Giro"
        texto2="Análise Financeira"
        texto3="Investimentos"
        texto4="Contabilidade Gerencial"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/gestao-financeira"
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
          href="https://drive.google.com/file/d/1zH4KNNTweex39y_Z_3qOeRgtsR0zVcg8/view?usp=sharing"
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
        email="gestaofinanceira@unifor.br"
        telefone="(85) 3477.3192"
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 4, 5, 7, 8, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
