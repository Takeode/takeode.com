// src/pages/servicos/desenvolvimento-web.tsx
import React, { JSX } from 'react';
import Layout from '@theme/Layout';
// Se você criar um CSS Module específico para detalhes:
// import styles from './servico-detalhe.module.css';
// Se for usar libs de galeria, importe aqui:
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';

// Exemplo de dados para a galeria (coloque suas imagens reais)
const images = [
  {
    original: '/img/servicos/desenvolvimento-web/imagem1.jpg', // Crie esta pasta e adicione imagens
    thumbnail: '/img/servicos/desenvolvimento-web/thumb1.jpg',
  },
  // Adicione mais imagens...
];

export default function ServicoDesenvolvimentoWeb(): JSX.Element {
  return (
    <Layout
      title="Desenvolvimento Web" // Título específico do serviço
      description="Detalhes sobre nosso serviço de Desenvolvimento Web. Criação de sites e aplicações web."> {/* Descrição SEO específica */}

      {/* Você pode reutilizar o componente de header se quiser um banner */}
      {/* <ServicesHeader /> */}

      {/* Use a classe do CSS Module se criou um */}
      <main className="container margin-vert--lg"> {/* Layout básico do Docusaurus */}
        <h1>Desenvolvimento Web</h1>
        <p>Aqui vai a introdução sobre o serviço de Desenvolvimento Web.</p>

        {/* --- Seção de Descrição Completa --- */}
        <section className="margin-vert--xl">
          <h2>Descrição Completa</h2>
          <p>
            Detalhe aqui tudo sobre o desenvolvimento web: tecnologias usadas (React, Node, etc.),
            tipos de projetos (sites institucionais, e-commerce, sistemas internos),
            metodologia de trabalho, etc. Seja bem específico!
          </p>
          {/* Mais parágrafos, listas, etc. */}
        </section>

        {/* --- Seção da Galeria de Imagens --- */}
        <section className="margin-vert--xl">
          <h2>Galeria / Exemplos de Projetos</h2>
          <div>
            {/* <ImageGallery items={images} /> */}
             <p><i>(Componente da galeria de imagens será adicionado aqui)</i></p>
             {/* Exemplo com imagens estáticas por enquanto */}
             <img src="/img/servicos/desenvolvimento-web/imagem1.jpg" alt="Exemplo Projeto Web 1" style={{maxWidth: '300px', margin: '10px'}}/>
             {/* Adicione mais imagens ou a galeria */}
          </div>
        </section>

        {/* --- Seção de Benefícios --- */}
        <section className="margin-vert--xl">
          <h2>Benefícios</h2>
          <ul>
            <li>Sites responsivos e otimizados para performance.</li>
            <li>Design moderno e alinhado com sua marca.</li>
            <li>Segurança e escalabilidade.</li>
            <li>Integração com outras ferramentas.</li>
            {/* Adicione mais benefícios */}
          </ul>
        </section>

        {/* --- Seção Call-to-Action (CTA) --- */}
        <section className="margin-vert--xl" style={{textAlign: 'center', backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '8px'}}>
          <h2>Pronto para começar seu projeto web?</h2>
          <p>
            Solicite um orçamento sem compromisso e veja como podemos transformar sua presença online.
          </p>
          <a href="/contato" className="button button--primary button--lg">
            Solicitar Orçamento Agora
          </a>
        </section>

      </main>
    </Layout>
  );
}