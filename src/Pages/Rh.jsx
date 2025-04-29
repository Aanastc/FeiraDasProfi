import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/RH/header-image.png";
import Ampuleta from "../assets/Versao 25.1/RH/icone-ampuleta.png";
import Prova from "../assets/Versao 25.1/RH/icone-prova.png";
import Recursos from "../assets/Versao 25.1/RH/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/RH/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/RH/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/RH/imagem-vantagens.png";

export default function Rh() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-purple-400, #AB95F0) 20%, var(--color-purple-300, #C7BBF7) 50%, var(--color-purple-400, #AB95F0) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#EEEBFC");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#AB95F0");

	const tags = [
		{
			textTag: "Recrutamento e seleção",
		},
		{
			textTag: "Consultoria",
		},
		{
			textTag: "Desenvolvimento de pessoas",
		},
		{
			textTag: "Gestão de clima e cultura organizacional",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Torne-se um profissional de  "
				curso="Gestão de RH  "
				textoFim="com nosso curso EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Desenvolva competências técnico-científicas e socioemocionais, aptidões para gerenciar talentos e promover ambientes saudáveis em um mercado em constante transformação tecnológica."
				Ampuleta={Ampuleta}
				tempo="2 anos"
				Prova={Prova}
				conceito2="No curso EaD de Gestão de RH da Unifor, você desenvolve competências técnico-científicas e socioemocionais para gerenciar pessoas, potencializar talentos e promover ambientes organizacionais saudáveis em tempos de transformação digital."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			{/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/gestao-rh" />
		</div>
	);
}
