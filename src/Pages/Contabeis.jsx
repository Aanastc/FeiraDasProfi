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
import Final from "../Componentes/Final.jsx";

export default function Contabeis() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-turquoise-600, #0F9285) 20%, var(--color-turquoise-500, #16B6A3) 50%, var(--color-turquoise-600, #0F9285) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#CDFAF1");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#0F9285");

	const tags = [
		{
			textTag: "Contabilidade fiscal, gerencial e societária",
		},
		{
			textTag: "Analista de balanços",
		},
		{
			textTag: "Auditoria",
		},
		{
			textTag: "Planejamento tributário e financeiro",
		},
		{
			textTag: "Analista de demonstrações contábeis",
		},
		{
			textTag: "Perícia contábil",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Prepare-se para o mercado com nosso curso de  "
				curso="Ciências Contábeis "
				textoFim="em EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Desenvolva competências essenciais, promovendo zelo e pensamento crítico. Capacite-se para orientar gestores, priorizar o controle e garantir a eficácia organizacional, valorizando conformidade legal."
				Ampulheta={Ampulheta}
				tempo="4 anos"
				Prova={Prova}
				conceito2="Com o curso de Ciências Contábeis da EaD Unifor, você desenvolve competências para atuar com precisão e visão estratégica nas áreas financeira, contábil e gerencial. Prepare-se para interpretar dados, apoiar decisões empresariais e contribuir para o crescimento de organizações públicas e privadas."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			<Depoimentos backgroundEscuro={backgroundEscuro} />
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/ciencias-contabeis" />
			<Final backgroundEscuro={backgroundEscuro} />
		</div>
	);
}
