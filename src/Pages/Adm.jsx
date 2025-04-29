import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/Adminitracao/header-image.png";
import Ampuleta from "../assets/Versao 25.1/Adminitracao/icone-ampuleta.png";
import Prova from "../assets/Versao 25.1/Adminitracao/icone-prova.png";
import Recursos from "../assets/Versao 25.1/Adminitracao/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/Adminitracao/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/Adminitracao/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/Adminitracao/imagem-vantagens.png";

export default function Adm() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-blue-900, #132190) 20%, var(--color-blue-800, #0D1DC6) 50%, var(--color-blue-900, #132190) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#D6E8FF");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#132190");

	const tags = [
		{
			textTag: " Finanças",
		},
		{
			textTag: " Marketing",
		},
		{
			textTag: " Operações",
		},
		{
			textTag: " Gestão estratégica",
		},
		{
			textTag: " Gestão de projetos",
		},
		{
			textTag: " Liderança em empresas",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Desenvolva habilidades de gestão e decisão com nosso curso de "
				curso="Administração "
				textoFim="em EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Desenvolva habilidades empreendedoras, resolva desafios sociais e tome decisões assertivas com suporte de inteligência humana e artificial."
				Ampuleta={Ampuleta}
				tempo="4 anos"
				Prova={Prova}
				conceito2="O curso EaD de Administração da Unifor alia prática de mercado à formação empreendedora. Você será capaz de resolver desafios sociais, liderar projetos e tomar decisões com base em inteligência de dados, contribuindo para o crescimento de empresas e instituições."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			{/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/administracao" />
		</div>
	);
}
