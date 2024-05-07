import Fundo from "../assets/imgs/fundoLogo.png";
import Ema from "../assets/imgs/emaDeLado.svg";
import Check from "../assets/icons/check.svg";

export default function Desenvolve({ texto1, texto2, texto3, texto4 }) {
  return (
    <div className="desenvolve">
      <h2>Aqui você desenvolve... </h2>
      <div className="desenvolveGrupo">
        <div className="desenvolveGrupo_topicos">
          <div className="flexBaseline">
            <img src={Check} />
            <p>{texto1}</p>
          </div>
          <div className="flexBaseline">
            <img src={Check} />
            <p>{texto2}</p>
          </div>
          <div className="flexBaseline">
            <img src={Check} />
            <p>{texto3}</p>
          </div>
          <div className="flexBaseline">
            <img src={Check} />
            <p>{texto4}</p>
          </div>
        </div>
        <div className="imagemContainer">
          <img src={Fundo} alt="" className="fundo" />
          <img src={Ema} alt="" className="ema" />
        </div>
      </div>
    </div>
  );
}
