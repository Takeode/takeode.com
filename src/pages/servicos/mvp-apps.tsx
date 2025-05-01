// src/pages/servicos/mvp-de-apps.tsx
import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link'; // Importar Link se ainda não estiver lá
// Se for usar libs de galeria, importe aqui:
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';

// Exemplo de dados para a galeria (coloque suas imagens reais)
const images = [
  {
    original: '/img/servicos/mvp-apps/app-tela1.jpg', // Crie esta pasta e adicione imagens
    thumbnail: '/img/servicos/mvp-apps/thumb-app1.jpg',
  },
  {
    original: '/img/servicos/mvp-apps/app-fluxo.png',
    thumbnail: '/img/servicos/mvp-apps/thumb-fluxo.png',
  },
  // Adicione mais imagens...
];

export default function ServicoMvpDeApps(): JSX.Element {
  return (
    <Layout
      title="MVP de Apps" // Título específico do serviço
      description="Desenvolvimento ágil de MVPs (Minimum Viable Product) para validar sua ideia de aplicativo rapidamente."> {/* Descrição SEO específica */}

      <main className="container margin-vert--lg"> {/* Layout básico do Docusaurus */}
        <h1>MVP de Apps</h1>
        <p>Transforme sua ideia inovadora em um aplicativo funcional rapidamente com nosso serviço de desenvolvimento de MVP (Produto Mínimo Viável).</p>

        {/* --- Seção de Descrição Completa --- */}
        <section className="margin-vert--xl">
          <h2>O que é um MVP e por que começar com um?</h2>
          <p>
            Um MVP é a versão mais simples do seu aplicativo, contendo apenas as funcionalidades essenciais para resolver o problema principal do seu público-alvo. Lançar um MVP permite:
          </p>
          <ul>
            <li>Validar sua ideia no mercado real com baixo investimento inicial.</li>
            <li>Coletar feedback valioso de usuários reais (early adopters).</li>
            <li>Iterar e adicionar novas funcionalidades de forma mais assertiva.</li>
            <li>Reduzir riscos e tempo de desenvolvimento.</li>
          </ul>
          <p>
            Utilizamos metodologias ágeis e tecnologias modernas (como React Native, Flutter, ou desenvolvimento nativo focado) para entregar seu MVP com qualidade e velocidade. Analisamos sua ideia, definimos o escopo essencial e partimos para o desenvolvimento focado no valor central.
          </p>
          {/* Adicione mais detalhes sobre o processo, tecnologias, etc. */}
        </section>

        {/* --- Seção da Galeria de Imagens --- */}
        <section className="margin-vert--xl">
          <h2>Exemplos / Processo</h2>
          <div>
            {/* <ImageGallery items={images} /> */}
             <p><i>(Componente da galeria de imagens com exemplos de telas de MVPs, fluxos, etc.)</i></p>
             {/* Exemplo com imagens estáticas por enquanto */}
             <img src="/img/servicos/mvp-apps/app-tela1.jpg" alt="Exemplo Tela MVP" style={{maxWidth: '250px', margin: '10px'}}/>
             <img src="/img/servicos/mvp-apps/app-fluxo.png" alt="Exemplo Fluxo App" style={{maxWidth: '400px', margin: '10px'}}/>
             {/* Adicione mais imagens ou a galeria */}
          </div>
        </section>

        {/* --- Seção de Benefícios --- */}
        <section className="margin-vert--xl">
          <h2>Benefícios de Desenvolver seu MVP Conosco</h2>
          <ul>
            <li>**Velocidade:** Lançamento rápido para validação ágil.</li>
            <li>**Custo-Efetivo:** Foco no essencial, otimizando seu investimento.</li>
            <li>**Validação de Mercado:** Teste sua ideia antes de grandes aportes.</li>
            <li>**Flexibilidade:** Adapte o produto com base em feedback real.</li>
            <li>**Foco no Usuário:** Desenvolvimento centrado nas necessidades principais.</li>
            {/* Adicione mais benefícios específicos da Takeode */}
          </ul>
        </section>

        {/* --- Seção Call-to-Action (CTA) --- */}
        <section className="margin-vert--xl" style={{textAlign: 'center', backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '8px'}}>
          <h2>Tem uma ideia de aplicativo?</h2>
          <p>
            Vamos conversar sobre como um MVP pode ser o primeiro passo para o sucesso. Peça um orçamento!
          </p>
          <Link href="/contato" className="button button--primary button--lg">
            Validar Minha Ideia
          </Link>
        </section>

      </main>
    </Layout>
  );
}