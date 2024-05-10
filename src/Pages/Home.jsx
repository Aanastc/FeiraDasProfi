import React from "react";
import { useNavigate } from "react-router-dom";

import SetaAcessar from "../assets/imgs/CapasHome/SetaAcessar.png";
import Fundo from "../assets/imgs/CapasHome/Fundo.png";
import ImagemHome from "../assets/imgs/CapasHome/ImagemHome.png";
import Linha from "../assets/imgs/CapasHome/Linhasvg.svg";
import Logo from "../assets/imgs/CapasHome/LogoAzul.png";

import Adm from "../assets/imgs/CapasHome/Adm.png";
import Ads from "../assets/imgs/CapasHome/Ads.png";
import Comercial from "../assets/imgs/CapasHome/Comercial.png";
import Contabeis from "../assets/imgs/CapasHome/Contabeis.png";
import Logistica from "../assets/imgs/CapasHome/Logistica.png";
import Financeira from "../assets/imgs/CapasHome/Financeiro.png";
import Marketing from "../assets/imgs/CapasHome/Marketing.png";
import Negocios from "../assets/imgs/CapasHome/Negocios.png";
import Artificial from "../assets/imgs/CapasHome/Artificial.png";
import Rh from "../assets/imgs/CapasHome/Rh.png";

export default function Cursos() {
  const navigate = useNavigate();

  function irParaADs() {
    navigate("/Ads");
  }

  function irParaAdm() {
    navigate("/Adm");
  }

  function irParaContabeis() {
    navigate("/Contabeis");
  }

  function irParaGesComercial() {
    navigate("/GesComercial");
  }

  function irParaGesFinanceira() {
    navigate("/GesFinanceira");
  }

  function irParaGestaoDeRh() {
    navigate("/GestaoDeRh");
  }

  function irParaMarketing() {
    navigate("/Marketing");
  }

  function irParaLogistica() {
    navigate("/Logistica");
  }

  function irParaIntNegocios() {
    navigate("/IntNegocios");
  }

  function irParaIntArtificial() {
    navigate("/IntArtificial");
  }

  const ccg = [
    {
      capa: Adm,
      onClick: irParaAdm,
      nome: "Administração",
    },
    {
      capa: Comercial,
      onClick: irParaGesComercial,
      nome: "Gestão Comercial",
    },
    {
      capa: Contabeis,
      onClick: irParaContabeis,
      nome: "Ciências Contábeis",
    },
    {
      capa: Logistica,
      onClick: irParaLogistica,
      nome: "Logística",
    },
    {
      capa: Financeira,
      onClick: irParaGesFinanceira,
      nome: "Gestão Financeira",
    },
    {
      capa: Marketing,
      onClick: irParaMarketing,
      nome: "Marketing Digital",
    },
    {
      capa: Negocios,
      onClick: irParaIntNegocios,
      nome: "Inteligência de Negócios",
    },
    {
      capa: Rh,
      onClick: irParaGestaoDeRh,
      nome: "Gestão de RH",
    },
  ];

  const cct = [
    {
      capa: Ads,
      onClick: irParaADs,
      nome: "Análise e Desenvolvimento de Sistemas",
    },
    {
      capa: Artificial,
      onClick: irParaIntArtificial,
      nome: "Inteligência Artificial",
    },
  ];

  return (
    <div className="containerHome" style={{ backgroundImage: `url(${Fundo})` }}>
      <div className="CursoImagemHome">
        <img src={ImagemHome} alt="" className="img-fluid" />
      </div>
      <div className="CursoCentros">
        <h2 className="">Cursos de Comunicação e Gestão</h2>
        <img src={Linha} alt="" className="Linha" />
      </div>
      <div className="ButtonsCursosHome">
        {ccg.map((curso, index) => (
          <button className="CursoHome" key={index} onClick={curso.onClick}>
            <div className="CursoHomeInfos">
              <img src={curso.capa} alt={`Capa do curso ${curso.nome}`} />
              <p className="CursoNomeHome">{curso.nome}</p>
            </div>
            <img src={SetaAcessar} alt="Seta para acessar o curso" />
          </button>
        ))}
      </div>
      <div className="CursoCentros">
        <h2 className="">Cursos de Tecnologia</h2>
        <img src={Linha} alt="" className="Linha" />
      </div>
      <div className="ButtonsCursosHome">
        {cct.map((curso, index) => (
          <button className="CursoHome" key={index} onClick={curso.onClick}>
            <div className="CursoHomeInfos">
              <img src={curso.capa} alt={`Capa do curso ${curso.nome}`} />
              <p className="CursoNomeHome">{curso.nome}</p>
            </div>
            <img src={SetaAcessar} alt="Seta para acessar o curso" />
          </button>
        ))}
      </div>
      <div className="FinalizacaoFundo">
        <img src={Logo} alt="Logo da empresa" />
      </div>
    </div>
  );
}
