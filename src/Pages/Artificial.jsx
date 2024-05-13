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
import ImagemSaudacao from "../assets/Artificial/Capa.png";
import tempoIcone from "../assets/Artificial/tempo.png";
import AvaliacaoIcone from "../assets/Artificial/avaliacao.png";
import ImagemInicial2 from "../assets/Artificial/saudacaoImagem.png";
import Formato from "../assets/Artificial/Formato.png";
import Ema from "../assets/Artificial/EmaConteudo.png";
import Encontros from "../assets/Artificial/Encontros.png";
import processoAvaliativo from "../assets/Artificial/processoAvaliativo.png";
import Escolha from "../assets/Artificial/escolha.png";
import Coordenador from "../assets/Artificial/Coordenador.png";

export default function Artificial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #FFC5F6 11.42%, #4A12A6 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#CEB0FF");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#4A12A6");

  return (
    <div>
      <Saudacao
        TextoInicio="Desperte o futuro com nosso curso de "
        curso="Inteligência Artificial "
        textoFim="em EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="A melhor formação em Inteligência Artificial (IA), com o objetivo de desenvolver sistemas a partir da resolução de problemas de natureza complexa, melhorando a qualidade de vida da sociedade. "
        tempoIcone={tempoIcone}
        tempo="2 anos e meio"
        AvaliacaoIcone={AvaliacaoIcone}
        ImagemInicial2={ImagemInicial2}
        gradient={gradient}
        backgroundClaro={backgroundClaro}
        backgroundEscuro={backgroundEscuro}
      />
      <Conteudo
        backgroundEscuro={backgroundEscuro}
        ImagemFormato={Formato}
        texto1="Sistemas de inteligência artificial"
        texto2="Análise de dados"
        texto3="Aplicação de algoritmos avançados"
        texto4="Gestão de projetos de IA"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/inteligencia-artificial"
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
          href="https://drive.google.com/file/d/1S209_F2LgDXu01uvfwCyoKfhRoU_PRxI/view?usp=sharing"
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
        nome="Prof. Ms. Ítalo Linhares Salomão"
        email="italosalomao@unifor.br"
        telefone="(85) 3477-3170"
        bloco="Bloco J - Sala 1"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 4, 5, 6, 7, 8, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
