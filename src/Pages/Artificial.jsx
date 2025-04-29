import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/Artificial/header-image.png";
import Ampuleta from "../assets/Versao 25.1/Artificial/icone-ampuleta.png";
import Prova from "../assets/Versao 25.1/Artificial/icone-prova.png";
import Recursos from "../assets/Versao 25.1/Artificial/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/Artificial/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/Artificial/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/Artificial/imagem-vantagens.png";

export default function Artificial() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-purple-600, #7F49DE) 20%, var(--color-purple-500, #8B64E8) 50%, var(--color-purple-600, #7F49DE) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#EEEBFC");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#7F49DE");

	const tags = [
		{
			textTag: "Desenvolvimento de sistemas de IA",
		},
		{
			textTag: "Analista de dados e algoritmos",
		},
		{
			textTag: "Tomada de decisão estratégica",
		},
		{
			textTag: "Gestão de projetos",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Desperte o futuro com nosso curso de "
				curso="Inteligência Artificial "
				textoFim="em EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="A melhor formação em Inteligência Artificial (IA), com o objetivo de desenvolver sistemas a partir da resolução de problemas de natureza complexa, melhorando a qualidade de vida da sociedade."
				Ampuleta={Ampuleta}
				tempo="2,5 anos"
				Prova={Prova}
				conceito2="Com o curso EaD de Inteligência Artificial da Unifor, você aprende a desenvolver sistemas inteligentes voltados à solução de problemas complexos. Construa produtos inovadores que otimizam tarefas e promovem mais qualidade de vida para indivíduos e sociedade."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			{/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/inteligencia-artificial" />
		</div>
	);
}
