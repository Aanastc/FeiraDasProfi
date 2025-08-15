import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/Financeira/header-image.png";
import Ampulheta from "../assets/Versao 25.1/Financeira/icone-ampulheta.png";
import Prova from "../assets/Versao 25.1/Financeira/icone-prova.png";
import Recursos from "../assets/Versao 25.1/Financeira/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/Financeira/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/Financeira/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/Financeira/imagem-vantagens.png";
import Final from "../Componentes/Final.jsx";

export default function Financeira() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-turquoise-900, #144D49) 20%, var(--color-turquoise-700, #11746C) 50%, var(--color-turquoise-900, #144D49) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#CDFAF1");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#144D49");

	const tags = [
		{
			textTag: "Analista financeiro",
		},
		{
			textTag: "Controle de custos",
		},
		{
			textTag: "Gestão de investimentos",
		},
		{
			textTag: "Consultoria de finanças empresariais",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Alcance excelência em "
				curso="Gestão Financeira  "
				textoFim="com nosso curso EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Desenvolva habilidades para solucionar desafios, como gestão de caixa, liquidez, endividamento e rentabilidade, aprendendo técnicas modernas para avaliação de investimentos empresariais."
				Ampulheta={Ampulheta}
				tempo="2 anos"
				Prova={Prova}
				conceito2="No curso EaD de Gestão Financeira da Unifor, você desenvolve habilidades para enfrentar os desafios da área: gestão de caixa, liquidez, endividamento e rentabilidade. Aprenda a aplicar técnicas modernas para avaliar investimentos e tomar decisões financeiras com segurança."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			<Depoimentos backgroundEscuro={backgroundEscuro} />
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/gestao-financeira" />
			<Final backgroundEscuro={backgroundEscuro} />
		</div>
	);
}
