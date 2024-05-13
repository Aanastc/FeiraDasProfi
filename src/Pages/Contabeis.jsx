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
import ImagemSaudacao from "../assets/Contabeis/Capa.png";
import tempoIcone from "../assets/Contabeis/tempo.png";
import AvaliacaoIcone from "../assets/Contabeis/avaliacao.png";
import ImagemInicial2 from "../assets/Contabeis/saudacaoImagem.png";
import Formato from "../assets/Contabeis/Formato.png";
import Ema from "../assets/Contabeis/EmaConteudo.png";
import Encontros from "../assets/Contabeis/Encontros.png";
import processoAvaliativo from "../assets/Contabeis/processoAvaliativo.png";
import Escolha from "../assets/Contabeis/escolha.png";
import Coordenador from "../assets/Contabeis/Coordenador.png";

export default function Contabeis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #C6E2AA 11.42%, #58931D 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#EBFFD8");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#58931D");

  return (
    <div>
      <Saudacao
        TextoInicio="Prepare-se para o mercado com nosso curso EaD de "
        curso="Ciências Contábeis "
        textoFim="."
        ImagemInicial={ImagemSaudacao}
        conceito="Desenvolva competências essenciais, promovendo zelo e pensamento crítico. Capacite-se para orientar gestores, priorizar o controle e garantir a eficácia organizacional, valorizando conformidade legal. "
        tempoIcone={tempoIcone}
        tempo="4 anos"
        AvaliacaoIcone={AvaliacaoIcone}
        ImagemInicial2={ImagemInicial2}
        gradient={gradient}
        backgroundClaro={backgroundClaro}
        backgroundEscuro={backgroundEscuro}
      />
      <Conteudo
        backgroundEscuro={backgroundEscuro}
        ImagemFormato={Formato}
        texto1="Comunicação e Colaboração"
        texto2="Auditoria Contábil"
        texto3="Contabilidade de Custos"
        texto4="Contabilidade Financeira"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/ciencias-contabeis"
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
          href="https://drive.google.com/file/d/1E9GCTl-cFLWpxUPKNCyGpUJzoDl6a5nO/view?usp=sharing"
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
        nome="Prof. Dra. Alexandra Alencar Siebra"
        email="contabeis@unifor.br"
        telefone="(85) 3477.3195"
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 5, 6, 7, 8, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
