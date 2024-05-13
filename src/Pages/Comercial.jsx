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
import ImagemSaudacao from "../assets/Comercial/Capa.png";
import tempoIcone from "../assets/Comercial/tempo.png";
import AvaliacaoIcone from "../assets/Comercial/avaliacao.png";
import ImagemInicial2 from "../assets/Comercial/saudacaoImagem.png";
import Formato from "../assets/Comercial/Formato.png";
import Ema from "../assets/Comercial/EmaConteudo.png";
import Encontros from "../assets/Comercial/Encontros.png";
import processoAvaliativo from "../assets/Comercial/processoAvaliativo.png";
import Escolha from "../assets/Comercial/escolha.png";
import Coordenador from "../assets/Comercial/Coordenador.png";

export default function Comercial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #8298D6 11.42%, #234091 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#E0E8FF");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#234091");

  return (
    <div>
      <Saudacao
        TextoInicio="Aprimore sua expertise em "
        curso="Gestão Comercial "
        textoFim="com nosso curso EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Torne-se um profissional especializado em estratégias de vendas, gestão de clientes e marketing, contribuindo para a competitividade das organizações. Desenvolva uma visão estratégica, analítica e inovadora. "
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
        texto1="Gestão e Análise de Vendas"
        texto2="Coordenação Empresarial"
        texto3="Visão Estratética"
        texto4="Inovação Financeira"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/gestao-comercial"
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
          href="https://drive.google.com/file/d/1BBwUpbkDPZg1mlZAw4ax4cQqim4dTbaj/view?usp=sharing"
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
        nome="Prof. Dra. Milena Reis Auip Barbosa"
        email="gestaocomercial@unifor.br"
        telefone="(85) 3477.3192"
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 4, 5, 6, 7, 8, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
