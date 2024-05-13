import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Fundo from "../src/assets/CapasHome/Fundo.png";
import ImagemHome from "../src/assets/CapasHome/ImagemHome.png";
import Linha from "../src/assets/CapasHome/Linhasvg.svg";
import Logo from "../src/assets/CapasHome/LogoAzul.png";

import Adm from "../src/assets/CapasHome/Adm.png";
import Ads from "../src/assets/CapasHome/Ads.png";
import Artificial from "../src/assets/CapasHome/Artificial.png";
import Comercial from "../src/assets/CapasHome/Comercial.png";
import Contabeis from "../src/assets/CapasHome/Contabeis.png";
import Financeira from "../src/assets/CapasHome/Financeiro.png";
import Logistica from "../src/assets/CapasHome/Logistica.png";
import Marketing from "../src/assets/CapasHome/Marketing.png";
import Negocios from "../src/assets/CapasHome/Negocios.png";
import Rh from "../src/assets/CapasHome/Rh.png";

export default function Cursos() {
  const navigate = useNavigate();
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  function irPara(rota) {
    navigate(rota);
    setCursoSelecionado(rota);
  }

  const ccg = [
    {
      capa: Adm,
      rota: "/Adm",
      nome: "Administração",
    },
    {
      capa: Comercial,
      rota: "/Comercial",
      nome: "Gestão Comercial",
    },
    {
      capa: Contabeis,
      rota: "/Contabeis",
      nome: "Ciências Contábeis",
    },
    {
      capa: Logistica,
      rota: "/Logistica",
      nome: "Logística",
    },
    {
      capa: Financeira,
      rota: "/Financeira",
      nome: "Gestão Financeira",
    },
    {
      capa: Marketing,
      rota: "/Marketing",
      nome: "Marketing Digital",
    },
    {
      capa: Negocios,
      rota: "/Negocios",
      nome: "Inteligência de Negócios",
    },
    {
      capa: Rh,
      rota: "/Rh",
      nome: "Gestão de RH",
    },
  ];

  const cct = [
    {
      capa: Ads,
      rota: "/Ads",
      nome: "Análise e Desenvolvimento de Sistemas",
    },
    {
      capa: Artificial,
      rota: "/Artificial",
      nome: "Inteligência Artificial",
    },
  ];

  return (
    <div className="containerHome" style={{ backgroundImage: `url(${Fundo})` }}>
      <img src={ImagemHome} alt="" className="img-fluid" />
      <div className="CursoCentros">
        <h2 className="CursoCentrosTitulo">Cursos de Comunicação e Gestão</h2>
        <img src={Linha} alt="" className="Linha" />
      </div>
      <div className="ButtonsCursosHome">
        {ccg.map((curso, index) => (
          <button
            className={`CursoHome ${
              cursoSelecionado === curso.rota ? "selected" : ""
            }`}
            key={index}
            onClick={() => {
              irPara(curso.rota);
              setCursoSelecionado(curso.rota);
            }}
          >
            <div className="CursoHomeInfos">
              <img src={curso.capa} alt={`Capa do curso ${curso.nome}`} />
              <p
                className={`CursoNomeHome ${
                  cursoSelecionado === curso.rota ? "selected" : ""
                }`}
              >
                {curso.nome}
              </p>
            </div>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={
                cursoSelecionado === curso.rota ? "svg-selected" : "svg-default"
              }
            >
              <rect
                width="19"
                height="19"
                rx="4"
                fill={cursoSelecionado === curso.rota ? "#fff" : "#004AF7"}
              />
              <g clipPath="url(#clip0_255_411)">
                <path
                  d="M10.9019 6.93627C9.84608 6.95344 8.78961 6.98287 7.73397 6.98277C7.28265 6.98291 6.99732 6.63139 7.01792 6.17754C7.0366 5.76958 7.36729 5.464 7.80279 5.45815C9.49301 5.43631 11.1831 5.42719 12.874 5.38491C13.2437 5.37579 13.6061 5.77313 13.6201 6.10895C13.6648 7.1595 13.7235 8.20943 13.7827 9.2589C13.8252 10.0075 13.8822 10.7551 13.922 11.5038C13.9451 11.9462 13.6091 12.3494 13.1895 12.3528C12.7064 12.357 12.4081 12.135 12.365 11.5439C12.3092 10.7709 12.2889 9.99478 12.2503 9.21976C12.2297 8.79457 12.2032 8.36992 12.1764 7.89169L11.9709 8.09719C10.1471 9.92096 8.31888 11.7403 6.50452 13.5734C6.22819 13.8525 5.93672 13.9601 5.58808 13.845C5.11237 13.6883 4.94146 13.0439 5.26683 12.6916C5.3377 12.6153 5.39556 12.5261 5.46911 12.4525C7.25751 10.6623 9.0468 8.87304 10.8366 7.08329C10.8766 7.04329 10.9139 7.0006 10.9525 6.95926C10.9531 6.94699 10.9533 6.93428 10.9539 6.92201C10.9375 6.92675 10.9202 6.93151 10.9038 6.93625L10.9019 6.93627Z"
                  fill={cursoSelecionado === curso.rota ? "#004AF7" : "#fff"}
                />
                <path
                  d="M10.9018 6.93624C10.9182 6.9315 10.9355 6.92674 10.9519 6.922C10.9513 6.93426 10.9512 6.94698 10.9506 6.95925C10.9343 6.95127 10.9176 6.94376 10.9014 6.93579L10.9018 6.93624Z"
                  fill={cursoSelecionado === curso.rota ? "#004AF7" : "#fff"}
                />
              </g>
              <defs>
                <clipPath id="clip0_255_411">
                  <rect
                    width="11.4"
                    height="9.12"
                    fill="white"
                    transform="translate(2.28003 10.6399) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        ))}
      </div>
      <div className="CursoCentros">
        <h2 className="CursoCentrosTitulo">Cursos de Tecnologia</h2>
        <img src={Linha} alt="" className="Linha" />
      </div>
      <div className="ButtonsCursosHome">
        {cct.map((curso, index) => (
          <button
            className={`CursoHome ${
              cursoSelecionado === curso.rota ? "selected" : ""
            }`}
            key={index}
            onClick={() => {
              irPara(curso.rota);
              setCursoSelecionado(curso.rota);
            }}
          >
            <div className="CursoHomeInfos">
              <img src={curso.capa} alt={`Capa do curso ${curso.nome}`} />
              <p
                className={`CursoNomeHome ${
                  cursoSelecionado === curso.rota ? "selected" : ""
                }`}
              >
                {curso.nome}
              </p>
            </div>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={
                cursoSelecionado === curso.rota ? "svg-selected" : "svg-default"
              }
            >
              <rect
                width="19"
                height="19"
                rx="4"
                fill={cursoSelecionado === curso.rota ? "#fff" : "#004AF7"}
              />
              <g clipPath="url(#clip0_255_411)">
                <path
                  d="M10.9019 6.93627C9.84608 6.95344 8.78961 6.98287 7.73397 6.98277C7.28265 6.98291 6.99732 6.63139 7.01792 6.17754C7.0366 5.76958 7.36729 5.464 7.80279 5.45815C9.49301 5.43631 11.1831 5.42719 12.874 5.38491C13.2437 5.37579 13.6061 5.77313 13.6201 6.10895C13.6648 7.1595 13.7235 8.20943 13.7827 9.2589C13.8252 10.0075 13.8822 10.7551 13.922 11.5038C13.9451 11.9462 13.6091 12.3494 13.1895 12.3528C12.7064 12.357 12.4081 12.135 12.365 11.5439C12.3092 10.7709 12.2889 9.99478 12.2503 9.21976C12.2297 8.79457 12.2032 8.36992 12.1764 7.89169L11.9709 8.09719C10.1471 9.92096 8.31888 11.7403 6.50452 13.5734C6.22819 13.8525 5.93672 13.9601 5.58808 13.845C5.11237 13.6883 4.94146 13.0439 5.26683 12.6916C5.3377 12.6153 5.39556 12.5261 5.46911 12.4525C7.25751 10.6623 9.0468 8.87304 10.8366 7.08329C10.8766 7.04329 10.9139 7.0006 10.9525 6.95926C10.9531 6.94699 10.9533 6.93428 10.9539 6.92201C10.9375 6.92675 10.9202 6.93151 10.9038 6.93625L10.9019 6.93627Z"
                  fill={cursoSelecionado === curso.rota ? "#004AF7" : "#fff"}
                />
                <path
                  d="M10.9018 6.93624C10.9182 6.9315 10.9355 6.92674 10.9519 6.922C10.9513 6.93426 10.9512 6.94698 10.9506 6.95925C10.9343 6.95127 10.9176 6.94376 10.9014 6.93579L10.9018 6.93624Z"
                  fill={cursoSelecionado === curso.rota ? "#004AF7" : "#fff"}
                />
              </g>
              <defs>
                <clipPath id="clip0_255_411">
                  <rect
                    width="11.4"
                    height="9.12"
                    fill="white"
                    transform="translate(2.28003 10.6399) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        ))}
      </div>
      <div className="FinalizacaoFundo">
        <img src={Logo} alt="Logo da empresa" />
      </div>
    </div>
  );
}
