import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SaibaMais({ cursoSiteUnifor }) {
	const navigate = useNavigate();
	const [cursoSelecionado, setCursoSelecionado] = useState(null);

	const location = useLocation();
	const cursoAtual = location.pathname;

	function irPara(rota) {
		navigate(rota);
		setCursoSelecionado(rota);
	}

	const cursos = [
		{
			rota: "/Adm",
			nome: "Administração",
		},
		{
			rota: "/Ads",
			nome: "Análise e Desenvolvimento de Sistemas",
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
			rota: "/Artificial",
			nome: "Inteligência Artificial",
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

	return (
		<div className="Unifor container-xs">
			<h4 className="heading4">Saiba mais</h4>
			<p className="paragraph  margin__bottom--default">
				A Universidade de Fortaleza oferece diversos recursos e serviços para
				você, como a <b>Biblioteca Integrada</b> e os <b>Serviços Estudantis</b>
				, disponíveis no site oficial da universidade e no ambiente virtual de
				aprendizagem, disponível para nossos estudantes.
			</p>
			<div className="flexbox__center--center margin__bottom--default">
				<a
					className="button-pill button--icon-left button--blue active"
					href={cursoSiteUnifor}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Quero saber mais">
					Quero saber mais
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none">
						<path
							d="M14.0623 4.5V11.8125C14.0623 11.9617 14.0031 12.1048 13.8976 12.2102C13.7921 12.3157 13.649 12.375 13.4998 12.375C13.3506 12.375 13.2076 12.3157 13.1021 12.2102C12.9966 12.1048 12.9373 11.9617 12.9373 11.8125V5.85773L4.89779 13.898C4.79225 14.0035 4.64909 14.0628 4.49982 14.0628C4.35056 14.0628 4.2074 14.0035 4.10186 13.898C3.99631 13.7924 3.93701 13.6493 3.93701 13.5C3.93701 13.3507 3.99631 13.2076 4.10186 13.102L12.1421 5.0625H6.18732C6.03814 5.0625 5.89507 5.00324 5.78958 4.89775C5.68409 4.79226 5.62482 4.64918 5.62482 4.5C5.62482 4.35082 5.68409 4.20774 5.78958 4.10225C5.89507 3.99676 6.03814 3.9375 6.18732 3.9375H13.4998C13.649 3.9375 13.7921 3.99676 13.8976 4.10225C14.0031 4.20774 14.0623 4.35082 14.0623 4.5Z"
							fill="#151720"
						/>
					</svg>
				</a>
			</div>
			<div className="margin__bottom--default ">
				<h4 className="heading4">Se desejar, fale com a gente</h4>
				<p className="legend margin-0">De segunda a sexta, de 7h30 às 21h</p>
				<p className="legend margin-0">
					WhatsApp{" "}
					<a
						href="https://api.whatsapp.com/send/?phone=5585992843054"
						className="legend margin-0">
						(85) 99284-3054
					</a>
				</p>
				<p className="legend margin-0">
					Por e-mail{" "}
					<a href="mailto:curso.ead@unifor.br" class="legend margin-0">
						curso.ead@unifor.br
					</a>
				</p>
				<p className="legend margin-0">
					Presencialmente no Bloco N dentro do Campus da Unifor
				</p>
			</div>
			<h4 className="heading4">Veja mais sobre os cursos</h4>
			<div className="margin__bottom--default flexbox__wrap">
				{cursos
					.filter((curso) => curso.rota !== location.pathname)
					.map((curso, index) => (
						<button
							type="button"
							className="outros_cursos"
							aria-label={`Ir para o curso ${curso.nome}`}
							key={index}
							onClick={() => {
								irPara(curso.rota);
								setCursoSelecionado(curso.rota);
							}}>
							{curso.nome}
							<span className="outros_cursos--span">|</span>
						</button>
					))}
			</div>
		</div>
	);
}
