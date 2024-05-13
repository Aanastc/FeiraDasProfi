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
import ImagemSaudacao from "../assets/Logistica/Capa.png";
import tempoIcone from "../assets/Logistica/tempo.png";
import AvaliacaoIcone from "../assets/Logistica/avaliacao.png";
import ImagemInicial2 from "../assets/Logistica/saudacaoImagem.png";
import Formato from "../assets/Logistica/Formato.png";
import Ema from "../assets/Logistica/EmaConteudo.png";
import Encontros from "../assets/Logistica/Encontros.png";
import processoAvaliativo from "../assets/Logistica/processoAvaliativo.png";
import Escolha from "../assets/Logistica/escolha.png";
import Coordenador from "../assets/Logistica/Coordenador.png";

export default function Logistica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #EBDAC0 11.42%, #C87E11 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#FFE6C1");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#C87E11");

  return (
    <div>
      <Saudacao
        TextoInicio="Conquiste seu lugar na "
        curso="Logística "
        textoFim="com nosso curso EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Aprenda uma gama variada de habilidades práticas e teóricas essenciais para gerenciar eficientemente o fluxo de produtos e informações ao longo da cadeia de suprimentos. "
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
        texto1="Análise logística"
        texto2="Gestão de cadeia de suprimentos"
        texto3="Coordenação de transportes"
        texto4="Gestão em armazenagem"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/logistica"
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
          href="https://drive.google.com/file/d/1cz92sZK9uZhykAIdPVgyng-aZ5g0_OXZ/view?usp=sharing"
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
        nome="Prof. Dra. Ana Rita Pinheiro de Freitas"
        email="anarita@unifor.br"
        telefone="(85) 3477.3314"
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 4, 6, 7, 8, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
