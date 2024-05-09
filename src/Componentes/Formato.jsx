export default function Formato({ ImagemFormato }) {
  return (
    <div className="FormatoFundo">
      <p className="FormatoFundo_texto">
        Ao longo do curso, cada semestre - dividido em 2 trimestres - pode
        variar em 2 formatos, dependendo do seu curso. Você pode iniciar pelo
        formato 1 ou pelo formato 2, dependendo do período que você ingressar.
      </p>
      <div className="ImagemInicial2">
        <img src={ImagemFormato} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
