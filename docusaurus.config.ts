import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Takeode",
  tagline: "Do conceito ao código, sem atalhos.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://takeode.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Takeode", // Usually your GitHub org/user name.
  projectName: "takeode.com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
    localeConfigs: {
      "pt-BR": {
        path: "pt-BR",
        label: "Português (Brasil)",
      },
      en: {
        path: "en",
        label: "English",
      },
    },
  },
  customFields: {
    outputDir: "i18n", // Custom field for translation output directory
  },
  // Google Analytics plugin configuration
  // This plugin integrates Google Analytics (via gtag.js) to track website usage.
  // The `trackingID` is the unique identifier for the Google Analytics property.
  // The `anonymizeIP` option ensures that IP addresses are anonymized to comply with privacy regulations.
  plugins: [
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-KYMYKXYMGN",
        anonymizeIP: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: false,
        // docs: {
        //   sidebarPath: './sidebars.ts',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "Takeode",
      logo: {
        alt: "Takeode Logo",
        src: "img/logo.png",
        srcDark: "img/logo-dark.png", // Adicione esta linha para suportar logo diferente no tema escuro
      },
      items: [
        { to: "/sobre", label: "Sobre nós", position: "right" },
        { to: "/blog", label: "Blog", position: "right" },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: "Comunidade",
          items: [
            {
              label: "X",
              href: "https://x.com/takeode_",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/takeodesolutions",
            },
          ],
        },
        {
          title: "Mais",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Takeode",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Takeode.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "Takeode - Soluções Digitais Inovadoras",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "Takeode oferece soluções digitais personalizadas: consultoria estratégica, desenvolvimento web moderno, e marketing digital focado em resultados.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "https://takeode.com/img/social-card.png",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://takeode.com",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:title",
        content: "Takeode - Soluções Digitais Inovadoras",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:description",
        content:
          "Takeode oferece soluções digitais personalizadas: consultoria estratégica, desenvolvimento web moderno, e marketing digital focado em resultados.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:image",
        content: "https://takeode.com/img/social-card.png",
      },
    },
  ],
};

export default config;
