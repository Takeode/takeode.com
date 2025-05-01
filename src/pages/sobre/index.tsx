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

export default function About(): ReactNode {
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

        <section className={styles.missionvalues}>
          <h2>Missão, Visão e Valores</h2>
          <h3>Missão</h3>
          <p>
            Transformar ideias em produtos digitais reais e escaláveis,
            entregando soluções relevantes com agilidade e propósito.
          </p>
          <div className={styles.values}>
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
          </div>
        </section>

        <section>
          <h2>Nossa História</h2>
          <p>
            A ideia de empreender juntos sempre esteve presente, mas foi com a
            participação na 13ª edição da Campus Mobile, com o projeto Rural
            Conecta, que entendemos o potencial de nossas colaborações. A partir
            dessa experiência, passamos a formalizar nossa atuação e aplicar
            nosso trabalho conjunto em projetos reais, impulsionando soluções
            com foco em impacto e escalabilidade.
          </p>
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
