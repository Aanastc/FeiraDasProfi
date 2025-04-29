import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/ADS/header-image.png";
import Ampuleta from "../assets/Versao 25.1/ADS/icone-ampuleta.png";
import Prova from "../assets/Versao 25.1/ADS/icone-prova.png";
import Recursos from "../assets/Versao 25.1/ADS/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/ADS/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/ADS/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/ADS/imagem-vantagens.png";

export default function Ads() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-blue-400, #5C86FF) 20%, var(--color-blue-300, #8AB3FF) 50%, var(--color-blue-400, #5C86FF) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#D6E8FF");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#5C86FF");

	const tags = [
		{
			textTag: "Desenvolvimento web e mobile",
		},
		{
			textTag: "Análise e testes de sistemas",
		},
		{
			textTag: "Consultoria em TI",
		},
		{
			textTag: "Empreendedorismo tecnológico",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Domine o mundo digital com nosso curso de Análise e "
				curso="Desenvolvimento de Sistemas "
				textoFim="em EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Aplique conhecimentos em métodos e técnicas inovadores na construção de soluções em software e planeje seu desenvolvimento com consciência social, ética e ambiental."
				Ampuleta={Ampuleta}
				tempo="2 anos"
				Prova={Prova}
				conceito2="No curso EaD de Análise e Desenvolvimento de Sistemas da Unifor, você aprende a planejar, desenvolver e manter sistemas de software com foco em inovação, responsabilidade social e sustentabilidade. Ideal para quem deseja atuar com tecnologia de forma prática e criativa."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			{/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/analise-e-desenvolvimento-de-sistemas" />
		</div>
	);
}
