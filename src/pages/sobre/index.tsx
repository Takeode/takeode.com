import React, { ReactNode } from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import clsx from "clsx";
import {
  UserCheck,
  SlidersHorizontal,
  Eye,
  Lightbulb,
  Handshake,
  Gauge,
  Target,
} from "lucide-react";

const values = [
  {
    icon: <UserCheck size={44} />,
    title: "Autonomia",
    text: "Confiamos nas pessoas e em seu potencial criativo.",
  },
  {
    icon: <SlidersHorizontal size={42} />,
    title: "Simplicidade",
    text: "Acreditamos que o simples funciona melhor.",
  },
  {
    icon: <Eye size={42} />,
    title: "Transparência",
    text: "Comunicamos com clareza e mostramos o que fazemos.",
  },
  {
    icon: <Lightbulb size={42} />,
    title: "Inovação com Propósito",
    text: "Desenvolvemos soluções com significado.",
  },
  {
    icon: <Handshake size={42} />,
    title: "Parceria",
    text: "Crescemos junto com nossos clientes.",
  },
  {
    icon: <Gauge size={42} />,
    title: "Eficiência",
    text: "Fazemos mais com menos — e com qualidade.",
  },
];

const campus1Img = require("@site/static/img/about/campus1.webp").default;
const campus2Img = require("@site/static/img/about/campus2.webp").default;

export default function About(): JSX.Element {
  return (
    <Layout
      title="Sobre nós"
      description="Conheça a história, missão e valores da nossa empresa"
    >
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Quem somos?</h1>
        </div>
      </div>

      <main className={clsx("container", styles.mainContent)}>
        <section className={styles.whoweare}>
          <div className={styles.highlight}>
            <p>
              Quatro amigos com quase uma década de amizade, unidos pelo desejo
              de construir algo significativo juntos.
            </p>
          </div>
          <div className={styles.description}>
            <p>
              Desde 2016, quando nos conhecemos durante o ensino médio técnico
              em informática, mantivemos o contato e a parceria.
            </p>
            <p>
              Hoje, unimos nossas habilidades e experiências para formar uma
              aceleradora de MVPs, transformando ideias em produtos digitais
              reais e escaláveis.
            </p>
          </div>
        </section>

        <section className={styles.mission}>
          <div className={styles.icon}>
            <Target size={96} />
            <h2>Missão</h2>
          </div>
          <p>
            Transformar ideias em produtos digitais reais e escaláveis,
            entregando soluções relevantes com agilidade e propósito.
          </p>
        </section>

        <section className={styles.values}>
          <h2>Valores</h2>
          <div className={styles.valuesGrid}>
            {values.map((item, id) => (
              <div key={id} className={styles.valueCard}>
                <div>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.story}>
          <h2>Nossa História</h2>
          <div className={styles.storyGallery}>
            <img
              src={campus1Img}
              alt="Foto da Apresentação teste na Campus Mobile"
              loading="lazy"
            />
            <img
              src={campus2Img}
              alt="Foto da Apresentação rápida na Campus Mobile"
              loading="lazy"
            />
          </div>

          <div className={styles.storyText}>
            <p>
              A ideia de empreender juntos existe há anos, mas ganhou forma após
              nossa participação na 13ª edição da{" "}
              <a
                href="https://www.institutoclaro.org.br/campus-mobile/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Campus Mobile</b>
              </a>
              , promovida pelo Instituto Claro, em São Paulo. Foi lá que
              apresentamos o Rural Conecta, um aplicativo em formato de
              marketplace voltado para serviços rurais.
            </p>
            <p>
              Apesar de nem todos estarmos presentes fisicamente no evento,
              devido ao limite de participantes, cada integrante do grupo foi
              essencial para o que construímos — desde a concepção da ideia até
              a entrega final. Essa experiência reforçou nosso potencial
              coletivo e nos mostrou o quanto somos capazes de realizar quando
              unimos nossas competências e trabalhamos de forma colaborativa.
            </p>
            <p>
              Desde então, estamos formalizando nossas operações e aplicando
              nosso trabalho em equipe em projetos reais, inclusive nos projetos
              individuais de cada membro, com o objetivo de levá-los a novos
              patamares.
            </p>
          </div>
        </section>

        <section>
          <h2>Equipe</h2>
          <ul>
            <li>
              <strong>João Pedro:</strong> Engenheiro de Software FullStack
            </li>
            <li>
              <strong>Matheus Alencar:</strong> UI/UX Designer, Marketing
            </li>
            <li>
              <strong>Paulo Hernane:</strong> Engenheiro de Software FullStack
            </li>
            <li>
              <strong>Paulo Éder:</strong> Engenheiro de Software BackEnd
            </li>
          </ul>
        </section>

        <section>
          <h2>O que nos diferencia</h2>
          <p>
            Com experiências plurais e complementares, nossa equipe é capaz de
            abordar os desafios sob diferentes perspectivas, o que resulta em
            soluções mais completas e inovadoras. Valorizamos o desenvolvimento
            próximo ao cliente, com comunicação constante, clareza nos processos
            e envolvimento em cada etapa do projeto. Nosso entrosamento e
            confiança mútua, construídos ao longo de anos de colaboração, se
            refletem diretamente na eficiência e na qualidade das entregas.
          </p>
        </section>

        <section className={styles.cta}>
          <h2>Vamos conversar?</h2>
          <p>Conheça nossos projetos ou solicite uma proposta personalizada:</p>
          <div className={styles.links}>
            <a href="/servicos" className="button button--primary">
              Portfólio / Serviços
            </a>
            <a href="/contato" className="button button--secondary">
              Solicite uma Proposta
            </a>
            <a
              href="https://www.instagram.com/takeodesolutions/"
              target="_blank"
            >
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/takeode/" target="_blank">
              LinkedIn
            </a>
            <a href="https://x.com/takeode_" target="_blank">
              X (Twitter)
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
