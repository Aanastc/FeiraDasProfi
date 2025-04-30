import React from "react";

import Hansmuller from "../assets/Depoimento/Hansmuller.png";
import Vitor from "../assets/Depoimento/Vitor.png";
import Camila from "../assets/Depoimento/Camila.png";
import Joyce from "../assets/Depoimento/Joyce.png";
import Carla from "../assets/Depoimento/Carla.png";
import Patricia from "../assets/Depoimento/Patricia.png";
import Claudia from "../assets/Depoimento/Claudia.png";
import Diego from "../assets/Depoimento/Diego.png";
import Maikon from "../assets/Depoimento/Maikon.png";

const depoimentosData = [
	{
		imageSrc: Hansmuller,
		nome: "Hansmuller Oliveira",
		papel: "Aluno EAD Unifor",
		texto:
			"“A EaD da Unifor me oferece aulas que são desenvolvidas e ministradas por professores qualificados e especialistas em suas áreas, garantindo a qualidade do ensino e materiais didáticos. [...] Temos um suporte abrangente, incluindo tutores online, serviços de orientação acadêmica, entre outros.”",
	},
	{
		imageSrc: Diego,
		nome: "Diego Latimberg",
		papel: "Aluno EAD Unifor",
		texto:
			"“Optei pelo EaD Unifor para ter uma conciliação entre trabalho e estudo, tendo em vista horários flexíveis onde posso estudar quando e onde quiser. Mesmo sendo ensino a distância, me sinto próximos ao meus professores tendo todo o suporte que preciso.”",
	},
	{
		imageSrc: Maikon,
		nome: "Maikon Araújo ",
		papel: "Aluno EAD Unifor",
		texto:
			"“Escolhi o curso logística EaD para me tornar um profissional cada vez mais especializado. O ambiente online é prático e simples e você tem ótimas experiências com as ferramentas disponíveis para você ter o melhor desempenho durante todo o curso.”",
	},
	{
		imageSrc: Vitor,
		nome: "Vitor Andrade",
		papel: "Aluno EAD Unifor",
		texto:
			"“Nós do EaD temos acesso ao campus da Unifor e a todos os serviços que o aluno do presencial tem, e isso me chama muita atenção. Para o futuro, eu espero ter uma carreira de excelência, aplicando todo o meu aprendizado.”",
	},
	{
		imageSrc: Camila,
		nome: "Camila Almeida",
		papel: "Aluna EAD Unifor",
		texto:
			"“Eu escolhi o EaD aqui da Unifor, pois além de estar na melhor, consigo também fazer uma melhor gestão do meu tempo. Inicialmente achei que fosse ser mais complexo, porém as ferramentas utilizadas pela Universidade facilitam imensamente o o processo.”",
	},
	{
		imageSrc: Joyce,
		nome: "Joyce Maciel",
		papel: "Aluna EAD Unifor",
		texto:
			"“O Marketing Digital da Unifor ajudou a me estabilizar profissionalmente. Eu, como jornalista esportiva, usufruí de muito do conhecimento que aprendi no curso para aplicá-lo no meu trabalho.”",
	},
	{
		imageSrc: Carla,
		nome: "Carla Elke Pitaguary",
		papel: "Aluna EAD Unifor",
		texto:
			"“Além de ser a melhor universidade, vejo o cuidado da Unifor com o aluno, mesmo à distância. É uma universidade que procura sempre estar de pronto atendimento para um bom desempenho e desenvoltura do estudante.”",
	},
	{
		imageSrc: Patricia,
		nome: "Patrícia Carvalho",
		papel: "Aluna EAD Unifor",
		texto:
			"“Escolhi a Unifor por conta da qualidade do ensino. Com novas metas, busquei comodidade por ser próximo à minha casa e por ter uma infraestrutura, que é impecável.”",
	},
	{
		imageSrc: Claudia,
		nome: "Cláudia Parente",
		papel: "Aluna EAD Unifor",
		texto:
			"“Eu sou veterana da casa, fiz desde a graduação até o mestrado aqui na Universidade de Fortaleza. Então, quando você pensa em fazer um curso EaD, com todas as desafios que a modalidade tem, você procura qualidade, algo que encontrei aqui.”",
	},
];

const Depoimentos = () => {
	return (
		<div className="slider-container container-xs">
			<div className="slider">
				{depoimentosData.map((depoimento, index) => (
					<div key={index} className="card-assessment">
						<img
							src={depoimento.imageSrc}
							alt={depoimento.nome}
							className="foto"
						/>
						<div className="conteudo">
							<p className="paragraph">
								<b>{depoimento.nome}</b>
							</p>
							<p className="papel">{depoimento.papel}</p>
							<p className="legend">“{depoimento.texto}”</p>
							<div className="estrelas">★★★★★</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Depoimentos;
