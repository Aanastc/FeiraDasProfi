import React from "react";

export default function Conteudo({
	backgroundEscuro,
	conceito,
	tempo,
	Ampulheta,
	Prova,
	backgroundClaro,
	conceito2,
	textoTags,
}) {
	return (
		<div className="Unifor">
			<div className="saudacao_container margin__bottom--default">
				<div
					className="saudacao_contet--infos container-xs"
					style={{ background: backgroundClaro }}>
					<p className="paragraph">{conceito}</p>
					<div
						className="saudacao_contet--infos-plus"
						style={{ background: backgroundEscuro }}>
						<div className="flexbox__center">
							<img src={Ampulheta} alt="" className="saudacaoIcone" />
							<p className="tags">{tempo}</p>
						</div>
						<div className="flexbox__center">
							<img src={Prova} alt="" className="saudacaoIcone" />
							<p className="tags">Avaliações Presenciais</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-xs">
				<h4 className="heading4">Venha estudar com a gente na EaD Unifor!</h4>
				<p className="paragraph">
					Na EaD Unifor, você estuda com flexibilidade em uma plataforma
					intuitiva, que facilita sua jornada acadêmica. Os conteúdos são
					apresentados em diversos formatos, como vídeos e textos, tornando o
					aprendizado mais dinâmico.
				</p>
				<p className="paragraph">
					As disciplinas integram <b>teoria</b> e <b>prática</b>, com
					experiências adaptadas ao seu curso. Cada semestre é dividido em dois
					trimestres, com organização flexível.
				</p>
				<h4 className="heading4">O que é?</h4>
				<p className="paragraph">{conceito2}</p>
				<h4 className="heading4">Onde você pode atuar?</h4>
				<div className="flexbox__wrap margin__bottom--default">
					{textoTags?.map((curso, index) => (
						<div
							className="tag_secundary"
							style={{ background: backgroundClaro }}
							key={index}>
							<p className="tags">{curso.textTag}</p>
						</div>
					))}
					<div
						className="tag_secundary"
						style={{ background: backgroundClaro }}>
						<p className="tags">e muito mais...</p>
					</div>
				</div>
			</div>
		</div>
	);
}
