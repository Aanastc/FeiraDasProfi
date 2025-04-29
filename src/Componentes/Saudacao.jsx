import React from "react";

export default function Saudacao({
	ImagemInicial,
	curso,
	TextoInicio,
	textoFim,
	gradient,
}) {
	return (
		<div className="Unifor">
			<div className="fundoSaudacao" style={{ background: gradient }}>
				<img
					src={ImagemInicial}
					alt="Imagem"
					className="saudacao_image--header"
				/>
				<div className="container-xs">
					<h4 className="heading4 saudacao_text">
						{TextoInicio}
						<strong>{curso}</strong>
						{textoFim}
					</h4>
				</div>
			</div>
		</div>
	);
}
