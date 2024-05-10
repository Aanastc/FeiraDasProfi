import React, { useEffect, useRef } from "react";
import Estrelas from "../assets/icons/Estrelas.svg";

import hans from "../assets/imgs/hans.png";

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
        if (x.querySelectorAll(".slide-button").length != 0) {
          slideButtons = x.querySelectorAll(".slide-button");
        }
        if (x.querySelectorAll(".image-list").length != 0) {
          imageList = x.querySelector(".image-list");
        }
        if (x.querySelectorAll(".slider-scrollbar").length != 0) {
          sliderScrollbar = x.querySelector(".slider-scrollbar");
        }
        if (x.querySelectorAll(".scrollbar-thumb").length != 0) {
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
      imageSrc: hans,
      nome: "Hansmuller Oliveira",
      papel: "Aluno EAD Unifor",
      texto:
        "“A EaD da Unifor me oferece aulas que são desenvolvidas e ministradas por professores qualificados e especialistas em suas áreas, garantindo a qualidade do ensino e materiais didáticos. [...] Temos um suporte abrangente, incluindo tutores online, serviços de orientação acadêmica, entre outros.”",
    },
    {
      imageSrc: hans,
      nome: "Vitor Andrade",
      papel: "Aluno EAD Unifor",
      texto:
        "“Nós do EAD temos acesso ao campus da Unifor e a todos os serviços que o aluno do presencial tem, e isso me chama muita atenção. Para o futuro, eu espero ter uma carreira de excelência, aplicando todo o meu aprendizado.”",
    },
    {
      imageSrc: hans,
      nome: "Mara Núbia Angelim",
      papel: "Aluno EAD Unifor",
      texto:
        "“Apesar de ser um curso a distância, sinto-me plenamente conectada à comunidade acadêmica. Tenho contato regular com outros alunos por meio de fóruns de discussão, grupos de estudo e atividades propostas pelos professores.”",
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
                <img src={depoimento.imageSrc} alt="" />
              </div>
              <div className="Divdepoimento">
                <div>
                  <p className="DepoimentosNome">{depoimento.nome}</p>
                  <p className="DepoimentosPapel">{depoimento.papel}</p>
                  <p className="DepoimentosTexto">{depoimento.texto}</p>
                </div>
                <div>
                  <img src={Estrelas} alt="" />
                </div>
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
