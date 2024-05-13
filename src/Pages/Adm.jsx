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
import ImagemSaudacao from "../assets/Adm/Capa.png";
import tempoIcone from "../assets/Adm/tempo.png";
import AvaliacaoIcone from "../assets/Adm/avaliacao.png";
import ImagemInicial2 from "../assets/Adm/saudacaoImagem.png";
import Formato from "../assets/Adm/Formato.png";
import Ema from "../assets/Adm/EmaConteudo.png";
import Encontros from "../assets/Adm/Encontros.png";
import processoAvaliativo from "../assets/Adm/processoAvaliativo.png";
import Escolha from "../assets/Adm/escolha.png";
import Coordenador from "../assets/Adm/Coordenador.png";

export default function Adm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(164.35% 151.97% at 16% 68.73%, #5A97E0 1.82%, #2C54A2 41.97%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#BDDBFE");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#2C54A2");

  return (
    <div>
      <Saudacao
        TextoInicio="Desenvolva habilidades de gestão e decisão com nosso curso de "
        curso="Administração "
        textoFim="em EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Desenvolva habilidades empreendedoras, resolva desafios sociais e tome decisões assertivas com suporte de inteligência humana e artificial. "
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
        texto1="Habilidades Empreendedoras"
        texto2="Comunicação Eficaz"
        texto3="Liderança"
        texto4="Gestão Estratégica"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/administracao"
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
          href="https://drive.google.com/file/d/17r9aBmf4NRQtm3ok9IWJVWTlMVRDYsom/view?usp=sharing"
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
        email="administracao@unifor.br"
        telefone="(85) 3477.3192"
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
