import React, { useEffect, useRef } from "react";
import Estrelas from "../assets/icons/Estrelas.svg";

import Hansmuller from "../assets/Depoimentos/Hansmuller.png";
import Vitor from "../assets/Depoimentos/Vitor.png";
import Camila from "../assets/Depoimentos/Camila.png";
import Joyce from "../assets/Depoimentos/Joyce.png";
import Carla from "../assets/Depoimentos/Carla.png";
import Patricia from "../assets/Depoimentos/Patricia.png";
import Claudia from "../assets/Depoimentos/Claudia.png";
import Diego from "../assets/Depoimentos/Diego.png";
import Maikon from "../assets/Depoimentos/Maikon.png";

export default function Depoimentos({ backgroundEscuro }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const initSlider = (e) => {
      var slideButtons = "";
      var imageList = "";
      var sliderScrollbar = "";
      var scrollbarThumb = "";
      var children = Array.from(e.children);
      children.forEach((x) => {
        if (x.querySelectorAll(".slide-button").length !== 0) {
          slideButtons = x.querySelectorAll(".slide-button");
        }
        if (x.querySelectorAll(".image-list").length !== 0) {
          imageList = x.querySelector(".image-list");
        }
        if (x.querySelectorAll(".slider-scrollbar").length !== 0) {
          sliderScrollbar = x.querySelector(".slider-scrollbar");
        }
        if (x.querySelectorAll(".scrollbar-thumb").length !== 0) {
          scrollbarThumb = x.querySelector(".scrollbar-thumb");
        }
      });

      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition =
          sliderScrollbar.getBoundingClientRect().width -
          scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          const boundedPosition = Math.max(
            0,
            Math.min(maxThumbPosition, newThumbPosition)
          );
          const scrollPosition =
            (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
        };

        const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });

      slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });

      const handleSlideButtons = () => {
        const isAtGridEnd =
          imageList.scrollLeft + imageList.clientWidth >= maxScrollLeft;

        const isAtGridStart = imageList.scrollLeft <= 0;

        slideButtons[0].style.display = isAtGridStart ? "none" : "flex";

        slideButtons[1].style.display =
          isAtGridEnd && !isAtGridStart ? "none" : "flex";
      };

      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition =
          (scrollPosition / maxScrollLeft) *
          (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
      };

      imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
      });
    };

    const sliderElement = sliderRef.current;
    initSlider(sliderElement);

    window.addEventListener("resize", () => initSlider(sliderElement));

    return () => {
      window.removeEventListener("resize", () => initSlider(sliderElement));
    };
  }, []);

  const depoimentosData = [
    {
      imageSrc: Hansmuller,
      nome: "Hansmuller Oliveira",
      papel: "Aluno EAD Unifor",
      texto:
        "“A EaD da Unifor me oferece aulas que são desenvolvidas e ministradas por professores qualificados e especialistas em suas áreas, garantindo a qualidade do ensino e materiais didáticos. [...] Temos um suporte abrangente, incluindo tutores online, serviços de orientação acadêmica, entre outros.”",
    },
    {
      imageSrc: Diego,
      nome: "Diego",
      papel: "Aluno EAD Unifor",
      texto:
        "“Optei pelo EaD Unifor para ter uma conciliação entre trabalho e estudo, tendo em vista horários flexíveis onde posso estudar quando e onde quiser. Mesmo sendo ensino a distância, me sinto próximos ao meus professores tendo todo o suporte que preciso.”",
    },
    {
      imageSrc: Maikon,
      nome: "Maikon Araújo ",
      papel: "Aluno EAD Unifor",
      texto:
        "“Escolhi o curso logística EaD para me tornar um profissional cada vez mais especializado. O ambiente online é prático e simples e você tem ótimas experiências com as ferramentas disponíveis para você ter o melhor desempenho durante todo o curso.”",
    },
    {
      imageSrc: Vitor,
      nome: "Vitor Andrade",
      papel: "Aluno EAD Unifor",
      texto:
        "“Nós do EaD temos acesso ao campus da Unifor e a todos os serviços que o aluno do presencial tem, e isso me chama muita atenção. Para o futuro, eu espero ter uma carreira de excelência, aplicando todo o meu aprendizado.”",
    },
    {
      imageSrc: Camila,
      nome: "Camila Almeida",
      papel: "Aluna EAD Unifor",
      texto:
        "“Eu escolhi o EaD aqui da Unifor, pois além de estar na melhor, consigo também fazer uma melhor gestão do meu tempo. Inicialmente achei que fosse ser mais complexo, porém as ferramentas utilizadas pela Universidade facilitam imensamente o o processo.”",
    },
    {
      imageSrc: Joyce,
      nome: "Joyce Maciel",
      papel: "Aluna EAD Unifor",
      texto:
        "“O Marketing Digital da Unifor ajudou a me estabilizar profissionalmente. Eu, como jornalista esportiva, usufruí de muito do conhecimento que aprendi no curso para aplicá-lo no meu trabalho.”",
    },
    {
      imageSrc: Carla,
      nome: "Carla Elke Pitaguary",
      papel: "Aluna EAD Unifor",
      texto:
        "“Além de ser a melhor universidade, vejo o cuidado da Unifor com o aluno, mesmo à distância. É uma universidade que procura sempre estar de pronto atendimento para um bom desempenho e desenvoltura do estudante.”",
    },
    {
      imageSrc: Patricia,
      nome: "Patrícia Carvalho",
      papel: "Aluna EAD Unifor",
      texto:
        "“Escolhi a Unifor por conta da qualidade do ensino. Com novas metas, busquei comodidade por ser próximo à minha casa e por ter uma infraestrutura, que é impecável.”",
    },
    {
      imageSrc: Claudia,
      nome: "Cláudia Parente",
      papel: "Aluna EAD Unifor",
      texto:
        "“Eu sou veterana da casa, fiz desde a graduação até o mestrado aqui na Universidade de Fortaleza. Então, quando você pensa em fazer um curso EaD, com todas as desafios que a modalidade tem, você procura qualidade, algo que encontrei aqui.”",
    },
  ];

  return (
    <div
      className="DepoimentosFundo"
      ref={sliderRef}
      style={{ background: backgroundEscuro }}
    >
      <h2 className="DepoimentosFundo_texto">Depoimentos</h2>
      <div className="slider-wrapper">
        <button className="slide-button" id="prev-slide"></button>
        <div className="image-list">
          {depoimentosData.map((depoimento, index) => (
            <div key={index} className="image-item Depoimentos">
              <div>
                <img
                  src={depoimento.imageSrc}
                  alt=""
                  className="depoimentoImagem"
                />
              </div>
              <div className="DivDepoimento">
                <div>
                  <div className="DivDepoimento_aluno">
                    <p className="DepoimentosNome">{depoimento.nome}</p>
                    <p className="DepoimentosPapel">{depoimento.papel}</p>
                  </div>
                  <p className="DepoimentosTexto">{depoimento.texto}</p>
                </div>
                <img src={Estrelas} alt="" className="Estrelas" />
              </div>
            </div>
          ))}
        </div>
        <button className="slide-button" id="next-slide"></button>
        <div className="slider-scrollbar">
          <div className="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  );
}
