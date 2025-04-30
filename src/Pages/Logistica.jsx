import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/Logistica/header-image.png";
import Ampulheta from "../assets/Versao 25.1/Logistica/icone-ampulheta.png";
import Prova from "../assets/Versao 25.1/Logistica/icone-prova.png";
import Recursos from "../assets/Versao 25.1/Logistica/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/Logistica/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/Logistica/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/Logistica/imagem-vantagens.png";

export default function Logistica() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-yellow-600, #D97706) 20%, var(--color-yellow-500, #F59E0B) 50%, var(--color-yellow-600, #D97706) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#FEF3C7");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#D97706");

	const tags = [
		{
			textTag: "Liderança de equipe",
		},
		{
			textTag: "Gestão de cadeia de suprimentos",
		},
		{
			textTag: "Analista de operações",
		},
		{
			textTag: "Gestão de armazenamento",
		},
		{
			textTag: "Coordenação de transportes",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Conquiste seu lugar na "
				curso="Logística "
				textoFim="com nosso curso EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Aprenda uma gama variada de habilidades práticas e teóricas essenciais para gerenciar eficientemente o fluxo de produtos e informações ao longo da cadeia de suprimentos."
				Ampulheta={Ampulheta}
				tempo="2 anos"
				Prova={Prova}
				conceito2="Você sabia que a área de Logística está entre as mais estratégicas e promissoras do mercado? Com o curso de Logística da EaD Unifor, você desenvolve as competências necessárias para atuar com excelência na gestão de cadeias de suprimentos, transporte, operações e armazenagem."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			{/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/logistica" />
		</div>
	);
}
