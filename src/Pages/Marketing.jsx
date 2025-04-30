import React, { useState } from "react";
import Saudacao from "../Componentes/Saudacao.jsx";
import Conteudo from "../Componentes/Conteudo.jsx";
import Unifor from "../Componentes/Unifor.jsx";
import Depoimentos from "../Componentes/Depoimentos.jsx";
import SaibaMais from "../Componentes/SaibaMais.jsx";

// Especifico
import ImagemSaudacao from "../assets/Versao 25.1/Marketing/header-image.png";
import Ampulheta from "../assets/Versao 25.1/Marketing/icone-ampulheta.png";
import Prova from "../assets/Versao 25.1/Marketing/icone-prova.png";
import Recursos from "../assets/Versao 25.1/Marketing/imagem-recursos.png";
import Encontros from "../assets/Versao 25.1/Marketing/imagem-encontros.png";
import Avaliacoes from "../assets/Versao 25.1/Marketing/imagem-avaliacoes.png";
import Vantagens from "../assets/Versao 25.1/Marketing/imagem-vantagens.png";

export default function Marketing() {
	const [gradient, setGradient] = useState(
		"linear-gradient(270deg, var(--color-red-600, #DD2525) 20%, var(--color-red-500, #F04343) 50%, var(--color-red-600, #DD2525) 80.29%)"
	);
	const [backgroundClaro, setbackgroundClaro] = useState("#FEE2E2");
	const [backgroundEscuro, setbackgroundEscuro] = useState("#DD2525");

	const tags = [
		{
			textTag: "Gestão de estratégias",
		},
		{
			textTag: "Liderança de projetos",
		},
		{
			textTag: "Captação e retenção de clientes",
		},
		{
			textTag: "Criação de conteúdo",
		},
	];

	return (
		<div>
			<Saudacao
				ImagemInicial={ImagemSaudacao}
				TextoInicio="Atue no mundo do "
				curso="Marketing Digital "
				textoFim="com nosso curso EaD."
				gradient={gradient}
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
			/>
			<Conteudo
				backgroundClaro={backgroundClaro}
				backgroundEscuro={backgroundEscuro}
				conceito="Especialize-se em inovação, desenvolvendo e executando planos estratégicos. Esteja apto a assessorar empresas, criar conteúdos eficientes e liderar no cenário do marketing moderno."
				Ampulheta={Ampulheta}
				tempo="2 anos"
				Prova={Prova}
				conceito2="Com o curso de Marketing Digital da EaD Unifor, você se prepara para atuar com excelência em um dos setores mais dinâmicos da atualidade. Aprenda a desenvolver e executar planos estratégicos, assessorar empresas, criar conteúdos relevantes e liderar projetos com foco em resultados."
				textoTags={tags}
			/>
			<Unifor
				Recursos={Recursos}
				Encontros={Encontros}
				Avaliacoes={Avaliacoes}
				Vantagens={Vantagens}
			/>
			{/* <Depoimentos backgroundEscuro={backgroundEscuro} /> */}
			<SaibaMais cursoSiteUnifor="https://www.unifor.br/web/graduacao/ead/marketing-digital" />
		</div>
	);
}
