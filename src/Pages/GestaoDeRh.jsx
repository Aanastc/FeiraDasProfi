import Saudacao from "../Componentes/Saudacao";
import Formato from "../Componentes/Formato";
import Desenvolve from "../Componentes/Desenvolve";
import ImagemSaudacao from "../assets/imgs/GestaoDeRh.png";
import ImagemSaudacao2 from "../assets/imgs/GestaoDeRhVindas.svg";
import ImagemFormato from "../assets/imgs/GestaoDeRhFormato.svg";

export default function GestaoDeRh() {
  return (
    <div>
      <Saudacao
        Nome="Gestão De RH"
        ImagemInicial={ImagemSaudacao}
        conceito="Desenvolva competências técnico-científicas e socioemocionais, aptidões para gerenciar talentos e promover ambientes saudáveis em um mercado em constante transformação tecnológica. "
        tempo="2 anos"
        ImagemInicial2={ImagemSaudacao2}
      />
      <Formato ImagemFormato={ImagemFormato} />
      {/* <Desenvolve texto1="Gestão de talentos" /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ullam
        voluptates nihil corporis sed repellendus et mollitia rem suscipit
        corrupti dignissimos maiores, asperiores earum quaerat voluptatum optio
        delectus at maxime.
      </p>
    </div>
  );
}
