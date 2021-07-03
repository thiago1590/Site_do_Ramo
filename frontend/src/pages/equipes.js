import Link from "next/link";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "react-multi-carousel/lib/styles.css";
import styles from "../styles/equipes.module.scss";

import { Projetos } from "../utils/projetos";

import { useState } from "react";

const equipes = [
  {
    id: 1,
    title: "Wolfbyte",
    img: "Wolfbyte_logo.svg",
    description: "Wolfbyte text",
    projetosAtuais: [
      {
        id: 1,
        title: "IA/Bot",
        img: "/Robo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Julio", img: "Jogo.svg",cargo: "Front-End" },
          { id: 2, name: "Arthur", img: "Jogo.svg",cargo: "Front-End" },
          { id: 3, name: "Vinicius", img: "Jogo.svg",cargo: "Front-End" },
          { id: 4, name: "Thiago", img: "Jogo.svg",cargo: "Front-End" },
          { id: 5, name: "Gabriel", img: "Jogo.svg",cargo: "Front-End" },
        ],
      },
      {
        id: 2,
        title: "Jogos",
        img: "/Jogo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Julio", img: "Jogo.svg",cargo: "Front-End" },
          { id: 2, name: "Arthur", img: "Jogo.svg",cargo: "Front-End" },
          { id: 3, name: "Vinicius", img: "Jogo.svg",cargo: "Front-End" },
          { id: 4, name: "Thiago", img: "Jogo.svg",cargo: "Front-End" },
          { id: 5, name: "Gabriel", img: "Jogo.svg",cargo: "Front-End" },
        ],
      },
      {
        id: 3,
        title: "Site do Ramo",
        img: "/Tela.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Julio", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 2, name: "Arthur", img: "Jogo.svg",cargo: "Front-End" },
          { id: 3, name: "Vinicius", img: "Jogo.svg",cargo: "Front-End" },
          { id: 4, name: "Thiago", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 5, name: "Gabriel", img: "Jogo.svg",cargo: "Front-End" },
        ],
      },
      {
        id: 4,
        title: "Console",
        img: "/Jogo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Julio", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 2, name: "Arthur", img: "Jogo.svg",cargo: "Front-End" },
          { id: 3, name: "Vinicius", img: "Jogo.svg",cargo: "Front-End" },
          { id: 4, name: "Thiago", img: "Jogo.svg",cargo: "Front-End" },
          { id: 5, name: "Gabriel", img: "Jogo.svg" ,cargo: "Front-End"},
        ],
      },
    ],
    premios: [
      {
        img: "Prem.svg",
        title: "Premio 1",
      },
      {
        img: "Prem.svg",
        title: "Premio 2",
      },
    ],
  },
  {
    id: 2,
    title: "Wolfpower",
    img: "Wolfpower_logo.svg",
    description: "wolfpower text",
    projetosAtuais: [
      {
        id: 1,
        title: "Alimentador Solar",
        img: "/Robo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Lyz", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 2, name: "Nicole", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 3, name: "Leticia", img: "Jogo.svg" ,cargo: "Front-End"},
        ],
      },
      {
        id: 2,
        title: "Doguinho",
        img: "/Jogo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Lyz", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 2, name: "Nicole", img: "Jogo.svg",cargo: "Front-End" },
        ],
      },
    ],
    premios: [
      {
        img: "Prem.svg",
        title: "Premio 3",
      },
      {
        img: "Prem.svg",
        title: "Premio 4",
      },
    ],
  },
  {
    id: 3,
    title: "Wolfbotz",
    img: "Wolfbotz_logo.svg",
    description: "Wolfbotz text",
    projetosAtuais: [
      {
        id: 1,
        title: "Combate",
        img: "/Robo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Japa", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 2, name: "Erick", img: "Jogo.svg" ,cargo: "Front-End"},
        ],
      },
      {
        id: 2,
        title: "Sumo",
        img: "/Jogo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Julio", img: "Jogo.svg" ,cargo: "Front-End"},
          { id: 2, name: "Japa", img: "Jogo.svg" ,cargo: "Front-End"},
        ],
      },
      {
        id: 3,
        title: "Seguidor",
        img: "/Tela.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Japa", img: "Jogo.svg" },
          { id: 2, name: "Arthur", img: "Jogo.svg" },
          { id: 3, name: "Vinicius", img: "Jogo.svg" },
        ],
      },
    ],
    premios: [
      {
        img: "Prem.svg",
        title: "Premio 5",
      },
      {
        img: "Prem.svg",
        title: "Premio 6",
      },
      {
        img: "Prem.svg",
        title: "Premio 7",
      },
    ],
  },
  {
    id: 4,
    title: "WIE",
    img: "WIE_logo.svg",
    description: "WIE text",
    projetosAtuais: [
      {
        id: 1,
        title: "WIE",
        img: "/Robo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Manu", img: "Jogo.svg",cargo: "Front-End" },
          { id: 2, name: "Bruna", img: "Jogo.svg",cargo: "Front-End" },
        ],
      },
    ],
    premios: [
      {
        img: "Prem.svg",
        title: "Premio 8",
      },
      {
        img: "Prem.svg",
        title: "Premio 9",
      },
      {
        img: "Prem.svg",
        title: "Premio 10",
      },
      {
        img: "Prem.svg",
        title: "Premio 11",
      },
    ],
  },
  {
    id: 5,
    title: "Marketing",
    img: "Marketing_logo.svg",
    description: "Marketing text",
    projetosAtuais: [
      {
        id: 1,
        title: "Marketing",
        img: "/Robo.svg",
        link: "",
        src: "seu_pai.svg",
        description: "Projeto brabo",
        members: [
          { id: 1, name: "Leticia", img: "Jogo.svg", cargo: "Front-End" },
          { id: 2, name: "Jefferson", img: "Jogo.svg",  cargo: "Front-End" },
        ],
      },
    ],
    premios: [
      {
        img: "Prem.svg",
        title: "Premio 11",
      },
    ],
  },
];

export default function Equipes() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className={styles.next} onClick={onClick}>
        <img src="/Vector (1).svg" />
      </div>
    );
  };
  const PNextArrow = ({ onClick }) => {
    //P..=Projeto
    return (
      <div className={styles.pnext} onClick={onClick}>
        <img src="/Arrow_EquipesRight.svg" />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className={styles.prev} onClick={onClick}>
        <img src="/Vector (2).svg" />
      </div>
    );
  };
  const PPrevArrow = ({ onClick }) => {
    return (
      <div className={styles.pprev} onClick={onClick}>
        <img src="/Arrow_EquipesLeft.svg" />
      </div>
    );
  };
  const [index, setIndex] = useState(0);
  const settings = {
    arrows: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, prox) => setIndex(prox),
    className: styles.slider,
  };
  const psettings = {
    arrows: true,
    infinite: false,
    centerMode: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <PNextArrow />,
    prevArrow: <PPrevArrow />,

    className: styles.slider,
  };
  return (
    <div className={styles.all}>
      <div className={styles.equipes}>
        <div className={styles.descrição}>
          {equipes.map((equipes, idx) => (
            <div>
              {idx === index ? <h1>{equipes.title}</h1> : null}
              {idx === index ? <p>{equipes.description}</p> : null}
            </div>
          ))}
        </div>
        <div className={styles.allcarousel}>
          <h1>Escolha sua equipe!</h1>

          <Slider {...settings}>
            {equipes.map((equipes, idx) => (
              <div className>
                <div className={styles.carrosel}>
                  <div className={idx === index ? styles.atual : styles.sem}>
                    <img src={equipes.img} />
                  </div>
                  {idx === index ? <h2>{equipes.title}</h2> : null}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.projetos}>
        <h1>Projetos Atuais</h1>

        {equipes.map((equipes, idx) => (
          <div>
            {idx === index ? (
              <div>
                <Slider {...psettings}>
                  {equipes.projetosAtuais.map((projetos) => (
                    <Projetos projetos={projetos} />
                  ))}
                </Slider>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className={styles.projetos}>
        <h1>Projetos Finalizados</h1>

        {equipes.map((equipes, idx) => (
          <div>
            {idx === index ? (
              <div>
                <Slider {...psettings}>
                  {equipes.projetosAtuais.map((projetos) => (
                    <Projetos projetos={projetos} />
                  ))}
                </Slider>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className={styles.premiosGeral}>
        <h1>Prêmios</h1>
        {equipes.map((equipes, idx) => (
          <div>
            {idx === index ? (
              <div>
                {equipes.premios.map((premios) => (
                  <div className={styles.premios}>
                    <table>
                      <tr>
                        <td>
                          <img src={premios.img} />
                        </td>
                        <td>
                          <h1>{premios.title}</h1>
                        </td>
                      </tr>
                    </table>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
