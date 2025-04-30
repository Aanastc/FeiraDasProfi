import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/Contabilidade/header-image.png";
import Ampulheta from "../assets/Versao 25.1/Contabilidade/icone-ampulheta.png";
import Prova from "../assets/Versao 25.1/Contabilidade/icone-prova.png";
import Recursos from "../assets/Versao 25.1/Contabilidade/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/Contabilidade/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/Contabilidade/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/Contabilidade/imagem-vantagens.png";

export default function Comercial() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-blue-600, #1529FF) 19.47%, var(--color-blue-500, #375AFF) 48.67%, var(--color-blue-600, #1529FF) 78.15%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#D6E8FF");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#1529FF");

	const tags = [
		{
			textTag: "Estratégias comerciais",
		},
		{
			textTag: "Gestão de clientes",
		},
		{
			textTag: "Consultoria",
		},
		{
			textTag: "Posicionamento de mercado",
		},
		{
			textTag: "Analista de desempenho e metas comerciais",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Aprimore sua expertise em "
				curso="Gestão Comercial   "
				textoFim="com nosso curso EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Torne-se um profissional especializado em estratégias de vendas, gestão de clientes e marketing, contribuindo para a competitividade das organizações. Desenvolva uma visão estratégica, analítica e inovadora."
				Ampulheta={Ampulheta}
				tempo="2 anos"
				Prova={Prova}
				conceito2="O curso EaD de Gestão Comercial da Unifor prepara você para atuar com estratégias de vendas, gestão de clientes e marketing. Aprimore sua visão de mercado e contribua para o crescimento e competitividade de diferentes organizações."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			{/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/gestao-comercial" />
		</div>
	);
}
