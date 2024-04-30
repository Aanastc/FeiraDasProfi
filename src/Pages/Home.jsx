import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { useNavigate } from "react-router-dom";
import Button from "../Componentes/Button";
import AdsCapa from "../assets/imgs/AdsCapa.png";
import ContabeisCapa from "../assets/imgs/ContabeisCapa.png";
import GesComercialCapa from "../assets/imgs/GesComercialCapa.png";
import Logisticacapa from "../assets/imgs/Logisticacapa.png";
import GesFinanceira from "../assets/imgs/GesFinanceiraCapa.png";
import AdmCapa from "../assets/imgs/AdmCapa.png";
import MarketingCapa from "../assets/imgs/MarketingCapa.png";
import IntNegociosCapa from "../assets/imgs/IntNegociosCapa.png";

export default function Home() {
  useEffect(() => {
    const revealConfig = {
      delay: 300,
      distance: "50px",
      easing: "ease-in-out",
      interval: 150,
    };

    ScrollReveal().reveal(".revealBottom", {
      ...revealConfig,
      origin: "bottom",
    });
    ScrollReveal().reveal(".revealTop", { ...revealConfig, origin: "top" });
    ScrollReveal().reveal(".revealLeft", { ...revealConfig, origin: "left" });
    ScrollReveal().reveal(".revealRight", {
      ...revealConfig,
      origin: "right",
    });
  }, []);

  const navigate = useNavigate();

  function irParaADs() {
    navigate("Ads");
  }

  function irParaAdm() {
    navigate("Adm");
  }

  function irParaContabeis() {
    navigate("Contabeis");
  }

  function irParaGesComercialh() {
    navigate("GesComercialh");
  }

  function irParaGesFinanceira() {
    navigate("GesFinanceira");
  }

  function irParaGestaoDeRh() {
    navigate("GestaoDeRh");
  }

  function irParaMarketing() {
    navigate("Marketing");
  }

  function irParaLogistica() {
    navigate("Logistica");
  }

  function irParaIntNegocios() {
    navigate("IntNegocios");
  }

  return (
    <div className="container ButtonsCursos">
      <Button
        imagem={AdsCapa}
        onClick={irParaADs}
        nome="Análise e Desenvolvimento de Sistemas"
      />
      <Button
        imagem={ContabeisCapa}
        onClick={irParaContabeis}
        nome="Ciências Contábeis"
      />
      <Button
        imagem={GesComercialCapa}
        onClick={irParaGesComercialh}
        nome="Gestão Comercial"
      />
      <Button
        imagem={Logisticacapa}
        onClick={irParaLogistica}
        nome="Logística"
      />
      <Button
        imagem={GesFinanceira}
        onClick={irParaGesFinanceira}
        nome="Gestão Financeira"
      />
      <Button imagem={AdmCapa} onClick={irParaAdm} nome="Administração" />
      <Button
        imagem={MarketingCapa}
        onClick={irParaMarketing}
        nome="Marketing Digital"
      />
      <Button
        imagem={IntNegociosCapa}
        onClick={irParaIntNegocios}
        nome="Inteligência de Negócios"
      />
      <Button onClick={irParaGestaoDeRh} nome="Gestão de RH" />
    </div>
  );
}
