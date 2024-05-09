import React from "react";
import matriz from "../assets/icons/matriz.svg";
import pdf from "../assets/icons/pdf.svg";

export default function SessaoButtons({ linkDoPdf, matrizCurricular }) {
  return (
    <div className="sessao_buttons">
      <a href={matrizCurricular} target="_blank" className="botao">
        <div>
          <img src={matriz} alt="Matriz Curricular" />
        </div>
        <p className="botaoNome">Matriz Curricular</p>
      </a>
      <a href={linkDoPdf} target="_blank" className="botao">
        <div>
          <img src={pdf} alt="Baixar PDF" />
        </div>
        <p className="botaoNome">Baixar PDF</p>
      </a>
    </div>
  );
}
