// src/pages/servicos.tsx
import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './servicos.module.css'; // Mantenha seus estilos
import Link from '@docusaurus/Link'; // Importe o componente Link

// Mantenha a importação das imagens se quiser usá-las na visão geral
const WebDevImg = require('@site/static/img/web-development.jpg').default;
const MvpAppsImg = require('@site/static/img/mvp-apps.png').default;
const DesignImg = require('@site/static/img/design-uxui.jpg').default; // Corrigido 'desing' para 'design' no nome da variável, se o arquivo for 'design'

// O cabeçalho pode continuar o mesmo
function ServicesHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.headerContainer)}>
        <h1 className={clsx('hero__title', styles.headerTitle)}>Serviços</h1>
        <p className={clsx('hero__subtitle', styles.headerSubtitle)}>Nossas soluções profissionais</p>
      </div>
    </header>
  );
}

// --- Componente para o Card de Serviço ---
//    (Opcional, mas ajuda a organizar)
interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkTo: string; // URL da página de detalhes
  altText: string;
}

function ServiceCard({ title, description, imageUrl, linkTo, altText }: ServiceCardProps) {
  return (
    <section className={clsx(styles.serviceSection, styles.serviceCard)}> {/* Adicione uma classe 'serviceCard' se quiser estilizar diferente */}
      <div className={styles.serviceImageContainer}>
        <img
          src={imageUrl}
          alt={altText}
          className={styles.serviceImage}
          loading="lazy"
        />
      </div>
      <h2 className={styles.serviceTitle}>{title}</h2>
      <p className={styles.serviceDescription}>
        {description}
      </p>
      {/* Adiciona o Link/Botão */}
      <div className={styles.serviceLinkContainer}>
        <Link
          className={clsx('button button--secondary button--md', styles.serviceButton)} // Use classes de botão do Docusaurus
          to={linkTo}>
          Saiba Mais
        </Link>
      </div>
    </section>
  );
}


// --- Componente Principal da Página ---
export default function ServicesOverview(): JSX.Element { // Renomeado para ServicesOverview para clareza
  return (
    <Layout
      title="Nossos Serviços"
      description="Conheça os serviços oferecidos pela Takeode">

      <ServicesHeader />

      <main className={clsx('container', styles.mainContainer)}>
        {/* Usar a classe 'servicesContainer' que você já tinha */}
        <div className={styles.servicesContainer}>

          {/* Usar o componente ServiceCard para cada serviço */}
          <ServiceCard
            title="Desenvolvimento Web"
            description="Criação de sites e aplicações web sob medida para seu negócio."
            imageUrl={WebDevImg} // Usando a variável importada
            altText="Desenvolvimento Web"
            linkTo="/servicos/desenvolvimento-web" // Link para a página de detalhes
          />

          <ServiceCard
            title="MVP de Apps"
            description="Desenvolvimento rápido de aplicativos mínimos viáveis para validar sua ideia no mercado."
            imageUrl={MvpAppsImg} // Usando a variável importada
            altText="MVP de Aplicativos"
            linkTo="/servicos/mvp-apps" // Link para a página de detalhes
          />

          <ServiceCard
            title="Design UX/UI"
            description="Interfaces intuitivas e agradáveis para melhor experiência do usuário."
            imageUrl={DesignImg} // Usando a variável importada
            altText="Design UX/UI"
            linkTo="/servicos/design-ux-ui" // Link para a página de detalhes
          />

        </div>
      </main>
    </Layout>
  );
}