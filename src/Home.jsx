import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "design_system2/dist/eadedo_style.css";
import "./folhaDeEstilo.css";

import ImagemHome from "../src/assets/Versao 25.1/Home Mobile/imagem-head-home.png";
import Final from "./Componentes/Final";

export default function Cursos() {
	const navigate = useNavigate();
	const [cursoSelecionado, setCursoSelecionado] = useState(null);

	function irPara(rota) {
		navigate(rota);
		setCursoSelecionado(rota);
	}

	const ccg = [
		{
			rota: "/Adm",
			nome: "Administração",
		},
		{
			rota: "/Contabeis",
			nome: "Ciências Contábeis",
		},
		{
			rota: "/Comercial",
			nome: "Gestão Comercial",
		},
		{
			rota: "/Financeira",
			nome: "Gestão Financeira",
		},
		{
			rota: "/Rh",
			nome: "Gestão de RH",
		},
		{
			rota: "/Negocios",
			nome: "Inteligência de Negócios",
		},
		{
			rota: "/Logistica",
			nome: "Logística",
		},
		{
			rota: "/Marketing",
			nome: "Marketing Digital",
		},
	];

	const cct = [
		{
			rota: "/Ads",
			nome: "Análise e Desenvolvimento de Sistemas",
		},
		{
			rota: "/Artificial",
			nome: "Inteligência Artificial",
		},
	];

	const [backgroundEscuro, setbackgroundEscuro] = useState("#004AFF");

	return (
		<div className="Unifor flexbox__center--column-center">
			<img src={ImagemHome} alt="" className="home_mobile--image" />
			<div className="container-xs">
				<h4 className="heading4">Venha estudar com a gente na EaD Unifor!</h4>
				<p className="paragraph">
					Feira de Profissões Unifor chega à sua nona edição em 2025,
					reconhecida como um importante momento de escolha profissional e
					aprendizagem.
				</p>
				<h4 className="heading4 text--Anil">
					Conheça os cursos a distância oferecidos pela EaD Unifor
				</h4>
				<p className="paragraph flexbox__center--center">
					<b> Cursos de Comunicação e Gestão</b>
				</p>
				<div className="container-xs">
					{ccg.map((curso, index) => (
						<button
							type="button"
							className="button-media-link button--blue"
							aria-label={`Ir para o curso ${curso.nome}`}
							key={index}
							onClick={() => {
								irPara(curso.rota);
								setCursoSelecionado(curso.rota);
							}}>
							<div className="flexbox__center">
								<p className="paragraph">{curso.nome}</p>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="25"
								viewBox="0 0 24 25"
								fill="none">
								<path
									d="M18.7504 6.5V16.25C18.7504 16.4489 18.6714 16.6397 18.5307 16.7803C18.3901 16.921 18.1993 17 18.0004 17C17.8015 17 17.6107 16.921 17.4701 16.7803C17.3294 16.6397 17.2504 16.4489 17.2504 16.25V8.31031L6.53104 19.0306C6.39031 19.1714 6.19944 19.2504 6.00042 19.2504C5.80139 19.2504 5.61052 19.1714 5.46979 19.0306C5.32906 18.8899 5.25 18.699 5.25 18.5C5.25 18.301 5.32906 18.1101 5.46979 17.9694L16.1901 7.25H8.25042C8.0515 7.25 7.86074 7.17098 7.72009 7.03033C7.57943 6.88968 7.50042 6.69891 7.50042 6.5C7.50042 6.30109 7.57943 6.11032 7.72009 5.96967C7.86074 5.82902 8.0515 5.75 8.25042 5.75H18.0004C18.1993 5.75 18.3901 5.82902 18.5307 5.96967C18.6714 6.11032 18.7504 6.30109 18.7504 6.5Z"
									fill="#1529FF"
								/>
							</svg>
						</button>
					))}
				</div>
				<p className="paragraph flexbox__center--center">
					<b>Cursos de Tecnologia</b>
				</p>
				{cct.map((curso, index) => (
					<button
						type="button"
						className="button-media-link button--blue"
						aria-label={`Ir para o curso ${curso.nome}`}
						key={index}
						onClick={() => {
							irPara(curso.rota);
							setCursoSelecionado(curso.rota);
						}}>
						<div className="flexbox__center">
							<p className="paragraph">{curso.nome}</p>
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none">
							<path
								d="M18.7504 6.5V16.25C18.7504 16.4489 18.6714 16.6397 18.5307 16.7803C18.3901 16.921 18.1993 17 18.0004 17C17.8015 17 17.6107 16.921 17.4701 16.7803C17.3294 16.6397 17.2504 16.4489 17.2504 16.25V8.31031L6.53104 19.0306C6.39031 19.1714 6.19944 19.2504 6.00042 19.2504C5.80139 19.2504 5.61052 19.1714 5.46979 19.0306C5.32906 18.8899 5.25 18.699 5.25 18.5C5.25 18.301 5.32906 18.1101 5.46979 17.9694L16.1901 7.25H8.25042C8.0515 7.25 7.86074 7.17098 7.72009 7.03033C7.57943 6.88968 7.50042 6.69891 7.50042 6.5C7.50042 6.30109 7.57943 6.11032 7.72009 5.96967C7.86074 5.82902 8.0515 5.75 8.25042 5.75H18.0004C18.1993 5.75 18.3901 5.82902 18.5307 5.96967C18.6714 6.11032 18.7504 6.30109 18.7504 6.5Z"
								fill="#1529FF"
							/>
						</svg>
					</button>
				))}
			</div>
			<Final backgroundEscuro={backgroundEscuro} />
		</div>
	);
}
