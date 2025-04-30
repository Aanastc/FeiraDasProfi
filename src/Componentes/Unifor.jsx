import React from "react";

export default function Unifor({ Recursos, Encontros, Avaliacoes, Vantagens }) {
	return (
		<div className="Unifor">
			<div className="container-xs">
				<h4 className="heading4">Como é estudar na EaD Unifor</h4>
				<p className="paragraph">
					Em cada Percurso de Aprendizagem, você tem acesso ao conteúdo da
					disciplina, distribuído em:
				</p>
				<img
					src={Recursos}
					className="image-fluid"
					alt="Webaulas interativas, Material de leitura, Videoaulas e lives, Exercícios de fixação e Material complementar"
				/>
				<p className="paragraph">
					Para cada disciplina cursada, há 5 encontros, sendo:
				</p>
				<img
					src={Encontros}
					className="image-fluid"
					alt="3 encontros virtuais: Aulas ao vivo semanais ou aos sábados e 2 encontros presenciais: Encontro Acadêmico e Avaliação presencial"
				/>
				<p className="paragraph">
					O <b>processo avaliativo**</b> é feito da seguinte forma:
				</p>
				<img
					src={Avaliacoes}
					className="image-fluid"
					alt="60% Avaliações finais e 40% Avaliações processuais"
				/>
				<p className="legend">
					**A nota final é a soma das atividades da disciplina. Disciplinas
					teóricas contam com Avaliação Substitutiva, conforme Resolução CEPE nº
					44/2022. Já as avaliações presenciais seguem o Decreto nº 9.057/2017 e
					ocorrem no Campus da Unifor.
				</p>
				<h4 className="heading4">Por que nos escolher?</h4>
				<img
					src={Vantagens}
					alt=""
					className="images_especificas margin__bottom--default image-fluid"
				/>
			</div>
		</div>
	);
}
