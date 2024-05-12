import React from "react";
import { useNavigate } from "react-router-dom";

import Fundo from "../src/assets/CapasHome/Fundo.png";
import ImagemHome from "../src/assets/CapasHome/ImagemHome.png";
import Linha from "../src/assets/CapasHome/Linhasvg.svg";
import Logo from "../src/assets/CapasHome/LogoAzul.png";
import SetaAcessar from "../src/assets/CapasHome/SetaAcessar.png";

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
    navigate("/Comercial");
  }

  function irParaGesFinanceira() {
    navigate("/Financeira");
  }

  function irParaGestaoDeRh() {
    navigate("/Rh");
  }

  function irParaMarketing() {
    navigate("/Marketing");
  }

  function irParaLogistica() {
    navigate("/Logistica");
  }

  function irParaIntNegocios() {
    navigate("/Negocios");
  }

  function irParaIntArtificial() {
    navigate("/Artificial");
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
      <img src={ImagemHome} alt="" className="img-fluid" />
      <div className="CursoCentros">
        <h2>Cursos de Comunicação e Gestão</h2>
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
        <h2>Cursos de Tecnologia</h2>
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
