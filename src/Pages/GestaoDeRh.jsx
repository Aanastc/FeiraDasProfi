import Saudacao from "../Componentes/Saudacao";
import ImagemSaudacao from "../assets/imgs/GestaoDeRh.png";

export default function GestaoDeRh() {
  return (
    <div>
      <Saudacao Nome="Gestão De RH" ImagemInicial={ImagemSaudacao} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam
        voluptates nihil corporis sed repellendus et mollitia rem suscipit
        corrupti dignissimos maiores, asperiores earum quaerat voluptatum optio
        delectus at maxime.
      </p>
    </div>
  );
}
