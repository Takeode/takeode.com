// src/pages/servicos/design-ux-ui.tsx
import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
// Se for usar libs de galeria, importe aqui:
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';

// Exemplo de dados para a galeria (coloque suas imagens reais)
const images = [
  {
    original: '/img/servicos/design-uxui/ui-mockup.jpg', // Crie esta pasta e adicione imagens
    thumbnail: '/img/servicos/design-uxui/thumb-mockup.jpg',
  },
  {
    original: '/img/servicos/design-uxui/wireframe.png',
    thumbnail: '/img/servicos/design-uxui/thumb-wireframe.png',
  },
   {
    original: '/img/servicos/design-uxui/user-journey.png',
    thumbnail: '/img/servicos/design-uxui/thumb-journey.png',
  },
  // Adicione mais imagens...
];

export default function ServicoDesignUxUi(): JSX.Element {
  return (
    <Layout
      title="Design UX/UI" // Título específico do serviço
      description="Criação de interfaces intuitivas e experiências de usuário memoráveis para sites e aplicativos."> {/* Descrição SEO específica */}

      <main className="container margin-vert--lg"> {/* Layout básico do Docusaurus */}
        <h1>Design UX/UI</h1>
        <p>Criamos interfaces que não são apenas bonitas, mas também funcionais, intuitivas e focadas em proporcionar a melhor experiência para o seu usuário final.</p>

        {/* --- Seção de Descrição Completa --- */}
        <section className="margin-vert--xl">
          <h2>A Importância do UX e UI Design</h2>
          <p>
            **UX (User Experience) Design** foca na jornada completa do usuário ao interagir com seu produto ou serviço. Envolve pesquisa, entendimento das necessidades do usuário, arquitetura da informação, fluxos de navegação e testes para garantir que a experiência seja lógica, fácil e satisfatória.
          </p>
          <p>
            **UI (User Interface) Design** é a parte visual e interativa. Cuida da aparência da interface (cores, tipografia, ícones, layouts) e como os elementos interativos se comportam, garantindo que seja esteticamente agradável, consistente com a marca e fácil de usar.
          </p>
          <p>
            Nosso processo combina UX e UI para entregar soluções digitais que engajam usuários e alcançam os objetivos do seu negócio. Utilizamos ferramentas como Figma, Sketch e Adobe XD para criar wireframes, protótipos interativos e designs finais de alta fidelidade.
          </p>
          {/* Adicione mais detalhes sobre o processo, entregáveis, ferramentas, etc. */}
        </section>

        {/* --- Seção da Galeria de Imagens --- */}
        <section className="margin-vert--xl">
          <h2>Exemplos / Processo de Design</h2>
          <div>
            {/* <ImageGallery items={images} /> */}
             <p><i>(Componente da galeria de imagens com exemplos de wireframes, mockups, protótipos, user flows)</i></p>
             {/* Exemplo com imagens estáticas por enquanto */}
             <img src="/img/servicos/design-uxui/wireframe.png" alt="Exemplo Wireframe" style={{maxWidth: '300px', margin: '10px'}}/>
             <img src="/img/servicos/design-uxui/ui-mockup.jpg" alt="Exemplo Mockup UI" style={{maxWidth: '300px', margin: '10px'}}/>
             <img src="/img/servicos/design-uxui/user-journey.png" alt="Exemplo Jornada do Usuário" style={{maxWidth: '300px', margin: '10px'}}/>
             {/* Adicione mais imagens ou a galeria */}
          </div>
        </section>

        {/* --- Seção de Benefícios --- */}
        <section className="margin-vert--xl">
          <h2>Benefícios de um Bom Design UX/UI</h2>
          <ul>
            <li>**Maior Engajamento:** Usuários permanecem mais tempo e interagem mais.</li>
            <li>**Aumento da Conversão:** Facilita a jornada do usuário até a ação desejada.</li>
            <li>**Redução de Custos:** Menos necessidade de retrabalho e suporte.</li>
            <li>**Fortalecimento da Marca:** Transmite profissionalismo e confiança.</li>
            <li>**Melhor Usabilidade:** Torna seu produto acessível e fácil de usar.</li>
            {/* Adicione mais benefícios específicos da Takeode */}
          </ul>
        </section>

        {/* --- Seção Call-to-Action (CTA) --- */}
        <section className="margin-vert--xl" style={{textAlign: 'center', backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '8px'}}>
          <h2>Quer melhorar a experiência dos seus usuários?</h2>
          <p>
            Entre em contato para discutir como nosso serviço de Design UX/UI pode elevar o nível do seu site ou aplicativo.
          </p>
          <Link href="/contato" className="button button--primary button--lg">
            Otimizar Minha Interface
          </Link>
        </section>

      </main>
    </Layout>
  );
}