import React from "react";

export default function Button({ imagem, nome, onClick }) {
  return (
    <div className="AcessarCurso" onClick={onClick}>
      <div className="AcessarCurso_imagem">
        <img src={imagem} alt={nome} />
      </div>
      <div>
        <p className="AcessarCurso_texto">{nome}</p>
      </div>
    </div>
  );
}
