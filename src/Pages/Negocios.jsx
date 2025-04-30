import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/Negocios/header-image.png";
import Ampulheta from "../assets/Versao 25.1/Negocios/icone-ampulheta.png";
import Prova from "../assets/Versao 25.1/Negocios/icone-prova.png";
import Recursos from "../assets/Versao 25.1/Negocios/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/Negocios/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/Negocios/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/Negocios/imagem-vantagens.png";
import Final from "../Componentes/Final.jsx";

export default function Negocios() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-purple-900, #4D278B) 20%, var(--color-purple-800, #5D2EA9) 50%, var(--color-purple-900, #4D278B) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#EEEBFC");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#4D278B");

	const tags = [
		{
			textTag: "Analista de negócios (BI)",
		},
		{
			textTag: "Analista financeiro",
		},
		{
			textTag: "Analista de gestão",
		},
		{
			textTag: "Especialista em inteligência de mercado",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Destaque-se no mundo com nosso curso de "
				curso="Inteligência de Negócios "
				textoFim="em EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Domine análise de Big Data, interpretação de dados e modelos preditivos. Esteja apto a analisar dados complexos, comunicar resultados e liderar com visão sistêmica, empreendedora e ética."
				Ampulheta={Ampulheta}
				tempo="2 anos"
				Prova={Prova}
				conceito2="O curso de Inteligência de Negócios da EaD Unifor prepara você para se destacar em um mercado cada vez mais orientado por dados. Aprenda a analisar Big Data, interpretar informações complexas, construir modelos preditivos e comunicar resultados com clareza. Desenvolva uma visão sistêmica, empreendedora e ética para liderar com inteligência."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			<Depoimentos backgroundEscuro={backgroundEscuro} />
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/inteligencia-de-negocios" />
			<Final backgroundEscuro={backgroundEscuro} />
		</div>
	);
}
