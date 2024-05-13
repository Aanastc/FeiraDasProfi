import React from "react";
import { useNavigate } from "react-router-dom";

import Adm from "../assets/CapasCursos/Adm.png";
import Ads from "../assets/CapasCursos/Ads.png";
import Comercial from "../assets/CapasCursos/Comercial.png";
import Contabeis from "../assets/CapasCursos/Contabeis.png";
import Logistica from "../assets/CapasCursos/Logistica.png";
import Financeira from "../assets/CapasCursos/Financeira.png";
import Marketing from "../assets/CapasCursos/Marketing.png";
import Negocios from "../assets/CapasCursos/Negocios.png";
import Artificial from "../assets/CapasCursos/Artificial.png";
import Rh from "../assets/CapasCursos/Rh.png";

export default function Cursos({ backgroundEscuro, idsSelecionados }) {
  const navigate = useNavigate();

  function irPara(rota) {
    navigate(rota);
  }

  const cursosDisponiveis = [
    {
      id: 1,
      capa: Adm,
      rota: "/Adm",
      nome: "Administração",
    },
    {
      id: 2,
      capa: Ads,
      rota: "/Ads",
      nome: "Análise e Desenvolvimento de Sistemas",
    },
    {
      id: 3,
      capa: Comercial,
      rota: "/Comercial",
      nome: "Gestão Comercial",
    },
    {
      id: 4,
      capa: Contabeis,
      rota: "/Contabeis",
      nome: "Ciências Contábeis",
    },
    {
      id: 5,
      capa: Logistica,
      rota: "/Logistica",
      nome: "Logística",
    },
    {
      id: 6,
      capa: Financeira,
      rota: "/Financeira",
      nome: "Gestão Financeira",
    },
    {
      id: 7,
      capa: Marketing,
      rota: "/Marketing",
      nome: "Marketing Digital",
    },
    {
      id: 8,
      capa: Negocios,
      rota: "/Negocios",
      nome: "Inteligência de Negócios",
    },
    {
      id: 9,
      capa: Artificial,
      rota: "/Artificial",
      nome: "Inteligência Artificial",
    },
    {
      id: 10,
      capa: Rh,
      rota: "/Rh",
      nome: "Gestão de RH",
    },
  ];

  const cursosSelecionados = cursosDisponiveis.filter((curso) =>
    idsSelecionados.includes(curso.id)
  );

  return (
    <div className="conteudoContainer">
      <h2>Outros cursos EaD</h2>
      <div className="ButtonsCursos">
        {cursosSelecionados.map((curso, index) => (
          <button
            className="Curso"
            style={{ borderColor: backgroundEscuro }}
            key={index}
            onClick={() => irPara(curso.rota)}
          >
            <img
              src={curso.capa}
              className="CursoImage"
              alt={`Capa do curso ${curso.nome}`}
            />
            <p className="CursoNome" style={{ color: backgroundEscuro }}>
              {curso.nome}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
