export default function Saudacao({ Nome, ImagemInicial }) {
  return (
    <div className="saudacao-container">
      <div className="saudacao-content">
        <div className="nome">{Nome}</div>
        <img src={ImagemInicial} alt="Imagem" className="imagem" />
      </div>
    </div>
  );
}
