import React from "react";
import matriz from "../assets/icons/matriz.svg";
import pdf from "../assets/icons/pdf.svg";

export default function Botoes({
	linkDoPdf,
	matrizCurricular,
	backgroundEscuro,
}) {
	return (
		<div className="sessao_buttons conteudoContainer">
			<a
				href={matrizCurricular}
				target="_blank"
				className="botao"
				style={{ background: backgroundEscuro }}>
				<div>
					<img src={matriz} alt="Matriz Curricular" />
				</div>
				<p className="botaoNome">Matriz Curricular</p>
			</a>
			<a
				href={linkDoPdf}
				target="_blank"
				className="botao"
				style={{ background: backgroundEscuro }}>
				<div>
					<img src={pdf} alt="Baixar PDF" />
				</div>
				<p className="botaoNome">Baixar PDF</p>
			</a>
		</div>
	);
}
