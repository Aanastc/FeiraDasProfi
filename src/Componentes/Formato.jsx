import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Formato({ ImagemFormato }) {
  useEffect(() => {
    const revealConfig = {
      delay: 300,
      distance: "20px",
      easing: "ease-in-out",
      interval: 150,
    };

    ScrollReveal().reveal(".revealLeft", { ...revealConfig, origin: "left" });
    ScrollReveal().reveal(".revealRight", {
      ...revealConfig,
      origin: "right",
    });
  }, []);
  return (
    <div className="FormatoFundo">
      <p className="FormatoFundo_texto revealLeft">
        Ao longo do curso, cada semestre - dividido em 2 trimestres - pode
        variar em 2 formatos, dependendo do seu curso. Você pode iniciar pelo
        formato 1 ou pelo formato 2, dependendo do período que você ingressar.
      </p>
      <div className="ImagemInicial2 revealRight">
        <img src={ImagemFormato} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
