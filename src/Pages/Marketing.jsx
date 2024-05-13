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
import ImagemSaudacao from "../assets/Marketing/Capa.png";
import tempoIcone from "../assets/Marketing/tempo.png";
import AvaliacaoIcone from "../assets/Marketing/avaliacao.png";
import ImagemInicial2 from "../assets/Marketing/saudacaoImagem.png";
import Formato from "../assets/Marketing/Formato.png";
import Ema from "../assets/Marketing/EmaConteudo.png";
import Encontros from "../assets/Marketing/Encontros.png";
import processoAvaliativo from "../assets/Marketing/processoAvaliativo.png";
import Escolha from "../assets/Marketing/escolha.png";
import Coordenador from "../assets/Marketing/Coordenador.png";

export default function Marketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [gradient, setGradient] = useState(
    "radial-gradient(154.34% 144.66% at -2.8% 95.49%, #FDC7C4 11.42%, #DC342C 67.99%)"
  );
  const [backgroundClaro, setbackgroundClaro] = useState("#F9CBC9");
  const [backgroundEscuro, setbackgroundEscuro] = useState("#DC342C");

  return (
    <div>
      <Saudacao
        TextoInicio="Atue no mundo do "
        curso="Marketing Digital "
        textoFim="com nosso curso EaD."
        ImagemInicial={ImagemSaudacao}
        conceito="Especialize-se em inovação, desenvolvendo e executando planos estratégicos. Esteja apto a assessorar empresas, criar conteúdos eficientes e liderar no cenário do marketing moderno. "
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
        texto1="Estratégias que convertem"
        texto2="Lançamentos de produtos ou serviços"
        texto3="Atração e retenção de clientes"
        texto4="Gerar Valor a Marca e Apresentação de Resultados"
        Ema={Ema}
        Encontros={Encontros}
        processoAvaliativo={processoAvaliativo}
        Escolha={Escolha}
      />
      <Depoimentos backgroundEscuro={backgroundEscuro} />
      <div className="sessao_buttons conteudoContainer">
        <a
          href="https://www.unifor.br/web/graduacao/ead/marketing-digital"
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
          href="https://drive.google.com/file/d/1HG8UslQnav056wqk-XZVzXZ_UOzCq5hk/view?usp=sharing"
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
        email="marketingdigital@unifor.br"
        telefone="(85) 3477.3190"
        bloco="Bloco Q | Sala 03"
      />
      <Cursos
        backgroundEscuro={backgroundEscuro}
        idsSelecionados={[1, 2, 3, 4, 5, 6, 8, 9, 10]}
      />
      <Final backgroundEscuro={backgroundEscuro} />
    </div>
  );
}
