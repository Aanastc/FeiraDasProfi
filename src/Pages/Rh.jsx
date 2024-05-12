import React, { useEffect, useState } from "react";
import Saudacao from "../Componentes/Saudacao";
import Conteudo from "../Componentes/Conteudo";
import Depoimentos from "../Componentes/Depoimentos";
import Botoes from "../Componentes/Botoes";
import Coordenacao from "../Componentes/Coordenacao";
import Cursos from "../Componentes/Cursos";
import Final from "../Componentes/Final";

// Especifico
import ImagemSaudacao from "../assets/GestaoDeRh/Capa.png";
import tempoIcone from "../assets/GestaoDeRh/tempo.png";
import AvaliacaoIcone from "../assets/GestaoDeRh/avaliacao.png";
import ImagemInicial2 from "../assets/GestaoDeRh/saudacaoImagem.png";
import Formato from "../assets/GestaoDeRh/Formato.png";
import Ema from "../assets/GestaoDeRh/EmaConteudo.png";
import Encontros from "../assets/GestaoDeRh/Encontros.png";
import processoAvaliativo from "../assets/GestaoDeRh/processoAvaliativo.png";
import Escolha from "../assets/GestaoDeRh/escolha.png";
import webAula from "../assets/GestaoDeRh/webAula.svg";
import videoAula from "../assets/GestaoDeRh/videoAula.svg";
import me from "../assets/GestaoDeRh/me.svg";
import exercicio from "../assets/GestaoDeRh/exercicio.svg";
import mc from "../assets/GestaoDeRh/mc.svg";
import Coordenador from "../assets/GestaoDeRh/Coordenador.png";
import emailIcone from "../assets/GestaoDeRh/email.svg";
import telefoneIcone from "../assets/GestaoDeRh/telefone.svg";
import blocoIcone from "../assets/GestaoDeRh/bloco.svg";

import matrizCurricular from "../assets/GestaoDeRh/folder.pdf";
import linkDoPdf from "../assets/GestaoDeRh/folder.pdf";

export default function Rh() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #766ccc 11.42%, #3b3666 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#cfc8e5");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#3b3666");

  return (
    <div>
      <Saudacao
        TextoInicio="Torne-se um profissional de "
        curso="Gestão De RH "
        textoFim="com nosso curso EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Desenvolva competências técnico-científicas e socioemocionais, aptidões para gerenciar talentos e promover ambientes saudáveis em um mercado em constante transformação tecnológica. "
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
        texto1="Gestão de talentos"
        texto2="Capacidade crítica e analítica"
        texto3="Objetivos estratégicos empresariais"
        texto4="Resolução de problemas"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
        webAula={webAula}
        videoAula={videoAula}
        me={me}
        exercicio={exercicio}
        mc={mc}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <Botoes
        matrizCurricular={matrizCurricular}
        linkDoPdf={linkDoPdf}
        backgroundEscuro={backgroundEscuro}
      />
      <Coordenacao
        imagemSrc={Coordenador}
        nome="Prof. Dr. Josimar Souza Costa"
        emailIcone={emailIcone}
        email="josimarcosta@unifor.br"
        telefoneIcone={telefoneIcone}
        telefone="(85) 3477.3192"
        blocoIcone={blocoIcone}
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 5]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
