import React, { ReactNode } from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import clsx from "clsx";

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
        <section>
          <p>
            Quatro amigos com quase uma década de amizade, unidos pelo desejo de
            construir algo significativo juntos. Desde 2016, quando nos
            conhecemos durante o ensino médio técnico em informática, mantivemos
            o contato e a parceria. Hoje, unimos nossas habilidades e
            experiências para formar uma aceleradora de MVPs, transformando
            ideias em produtos digitais reais e escaláveis.
          </p>
        </section>

        <section>
          <h2>Missão, Visão e Valores</h2>
          <h3>Missão</h3>
          <p>
            Transformar ideias em produtos digitais reais e escaláveis,
            entregando soluções relevantes com agilidade e propósito.
          </p>
          <h3>Visão</h3>
          <p>Ser referência em inovação acessível no Brasil até 2030.</p>
          <h3>Valores</h3>
          <ul>
            <li>
              <strong>Autonomia:</strong> Confiamos nas pessoas e em seu
              potencial criativo.
            </li>
            <li>
              <strong>Simplicidade:</strong> Acreditamos que o simples funciona
              melhor.
            </li>
            <li>
              <strong>Transparência:</strong> Comunicamos com clareza e
              mostramos o que fazemos.
            </li>
            <li>
              <strong>Inovação com Propósito:</strong> Desenvolvemos soluções
              com significado.
            </li>
            <li>
              <strong>Parceria:</strong> Crescemos junto com nossos clientes.
            </li>
            <li>
              <strong>Eficiência:</strong> Fazemos mais com menos — e com
              qualidade.
            </li>
          </ul>
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
