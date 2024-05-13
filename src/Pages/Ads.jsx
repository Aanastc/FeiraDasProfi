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
import ImagemSaudacao from "../assets/Ads/Capa.png";
import tempoIcone from "../assets/Ads/tempo.png";
import AvaliacaoIcone from "../assets/Ads/avaliacao.png";
import ImagemInicial2 from "../assets/Ads/saudacaoImagem.png";
import Formato from "../assets/Ads/Formato.png";
import Ema from "../assets/Ads/EmaConteudo.png";
import Encontros from "../assets/Ads/Encontros.png";
import processoAvaliativo from "../assets/Ads/processoAvaliativo.png";
import Escolha from "../assets/Ads/escolha.png";
import Coordenador from "../assets/Ads/Coordenador.png";

export default function Ads() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(84.48% 79.4% at 21.2% 72.96%, #5B6A99 18%, #313A56 73%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#CCD1DB");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#313A56");

  return (
    <div>
      <Saudacao
        TextoInicio="Domine o mundo digital com nosso curso de "
        curso="ADS "
        textoFim="em EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Aplique conhecimentos em métodos e técnicas inovadores na construção de soluções em software e planeje seu desenvolvimento com consciência social, ética e ambiental. "
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
        texto1="Análise de Sistemas"
        texto2="Teste de Softwares"
        texto3="Criação multiplataforma"
        texto4="Consultoria em TI"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/analise-e-desenvolvimento-de-sistemas"
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
          href="https://drive.google.com/file/d/1SFjgtpbsxs6HuIalDy0L1KKiNouzEYo3/view?usp=sharing"
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
        nome="Prof. Dra. Rafaela Ponte Lisboa"
        email="rafaelapl@unifor.br"
        telefone="(85) 3477.3819"
        bloco="Bloco J | Sala 01"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
