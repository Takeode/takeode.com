import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import { type ReactNode, useState } from "react";

import styles from "./index.module.css";

// --- Sub-component: Hero Section ---
function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <motion.header
      className={clsx(
        "hero hero--primary",
        styles.heroBanner,
        styles.heroCustom
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={clsx("container", styles.heroContainer)}>
        {" "}
        {/* Optional container class */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Heading as="h1" className="hero__title">
            <Translate
              id="homepage.hero.title"
              description="Hero section title"
              values={{ title: siteConfig.title }}
            >
              {"{title}"}
            </Translate>
          </Heading>
          <Heading
            as="h2"
            className={clsx("hero__subtitle", styles.heroSubtitle)}
          >
            {" "}
            {/* Optional subtitle class */}
            <Translate
              id="homepage.hero.tagline"
              description="Hero section tagline"
              values={{ tagline: siteConfig.tagline }}
            >
              {"{tagline}"}
            </Translate>
          </Heading>
        </motion.div>
        <motion.div
          className={styles.buttons}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            className="button button--secondary button--lg"
            to="#contact" // Link to contact/budget section or another page
            aria-label={translate({
              id: "homepage.hero.button.aria",
              message: "Saiba mais sobre nossos serviços",
              description: "Aria label for Saiba Mais button",
            })}
          >
            <Translate id="homepage.hero.button.text" description="Button text">
              Saiba Mais
            </Translate>
          </Link>
        </motion.div>
      </div>
      {/* Optional: Add subtle overlay div here if needed for readability */}
      {/* Optional: Add background image/gradient via CSS in index.module.css */}
    </motion.header>
  );
}

// --- Sub-component: Services Section ---
// Placeholder SVG Icon
const PlaceholderIcon = (props) => (
  <svg viewBox="0 0 100 100" {...props} aria-hidden="true">
    <rect width="100" height="100" rx="15" fill="currentColor" />
  </svg>
);

const services = [
  {
    title: translate({
      id: "services.consulting.title",
      message: "Consultoria Estratégica",
      description: "Service title for consulting",
    }),
    description: translate({
      id: "services.consulting.description",
      message: "Análise e planejamento para otimizar seus resultados.",
      description: "Service description for consulting",
    }),
    icon: PlaceholderIcon,
  },
  {
    title: translate({
      id: "services.webdev.title",
      message: "Desenvolvimento Web",
      description: "Service title for web development",
    }),
    description: translate({
      id: "services.webdev.description",
      message: "Criação de sites e aplicações modernas e responsivas.",
      description: "Service description for web development",
    }),
    icon: PlaceholderIcon,
  },
  {
    title: translate({
      id: "services.marketing.title",
      message: "Marketing Digital",
      description: "Service title for digital marketing",
    }),
    description: translate({
      id: "services.marketing.description",
      message: "Estratégias para aumentar sua visibilidade online.",
      description: "Service description for digital marketing",
    }),
    icon: PlaceholderIcon,
  },
];

function ServicesSection() {
  return (
    <section className={clsx(styles.sectionPadding, styles.servicesSection)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Nossos Serviços
        </Heading>
        <div className={clsx("row", styles.servicesGrid)}>
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className={clsx("col col--4", styles.serviceCard)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }} // Hover animation
            >
              <div className="text--center">
                <service.icon className={styles.serviceIcon} />
              </div>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">{service.title}</Heading>
                <p>{service.description}</p>
                <Link
                  className="button button--outline button--primary button--sm"
                  to={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`} // Example link
                  aria-label={`Ver detalhes sobre ${service.title}`}
                >
                  Ver Detalhes
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sub-component: CTA for Budget Section ---
function BudgetCTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = translate({
        id: "form.error.required",
        message: "Campo obrigatório",
        description: "Error message for required field",
      });
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      error = translate({
        id: "form.error.invalidEmail",
        message: "Email inválido",
        description: "Error message for invalid email",
      });
    } else if (
      name === "phone" &&
      value &&
      !/^\d{10,}$/.test(value.replace(/\D/g, ""))
    ) {
      error = translate({
        id: "form.error.invalidPhone",
        message: "Telefone inválido",
        description: "Error message for invalid phone",
      });
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!validateField("name", formData.name)) isValid = false;
    if (!validateField("email", formData.email)) isValid = false;
    if (formData.phone && !validateField("phone", formData.phone))
      isValid = false;

    if (isValid) {
      console.log("Form submitted:", formData);
      alert("Orçamento solicitado com sucesso!");
      setFormData({ name: "", email: "", phone: "" });
      setErrors({ name: "", email: "", phone: "" });
    } else {
      console.log("Form has errors:", errors);
    }
  };

  return (
    <section
      id="contact"
      className={clsx(styles.sectionPadding, styles.ctaSection)}
    >
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <Heading as="h2">
              <Translate id="cta.title" description="CTA section title">
                Pronto para começar?
              </Translate>
            </Heading>
            <p className={styles.ctaSubtitle}>
              <Translate id="cta.subtitle" description="CTA section subtitle">
                Solicite um orçamento sem compromisso.
              </Translate>
            </p>
            <motion.form
              onSubmit={handleSubmit}
              className={styles.ctaForm}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              noValidate
            >
              <div className={styles.formGroup}>
                <label htmlFor="cta-name" className={styles.visuallyHidden}>
                  Nome
                </label>
                <input
                  type="text"
                  id="cta-name"
                  name="name"
                  placeholder="Seu Nome *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={clsx(
                    styles.formInput,
                    errors.name && styles.inputError
                  )}
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorMessage}>
                    {errors.name}
                  </span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cta-email" className={styles.visuallyHidden}>
                  Email
                </label>
                <input
                  type="email"
                  id="cta-email"
                  name="email"
                  placeholder="Seu Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={clsx(
                    styles.formInput,
                    errors.email && styles.inputError
                  )}
                />
                {errors.email && (
                  <span id="email-error" className={styles.errorMessage}>
                    {errors.email}
                  </span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cta-phone" className={styles.visuallyHidden}>
                  Telefone
                </label>
                <input
                  type="tel"
                  id="cta-phone"
                  name="phone"
                  placeholder="Seu Telefone (Opcional)"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={clsx(
                    styles.formInput,
                    errors.phone && styles.inputError
                  )}
                />
                {errors.phone && (
                  <span id="phone-error" className={styles.errorMessage}>
                    {errors.phone}
                  </span>
                )}
              </div>
              <motion.button
                type="submit"
                className={clsx(
                  "button button--primary button--lg",
                  styles.ctaButton
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Differentials Section ---
const differentials = [
  {
    title: "Qualidade",
    description: "Compromisso com a excelência em cada detalhe.",
    icon: PlaceholderIcon,
  },
  {
    title: "Agilidade",
    description: "Entregas rápidas sem comprometer a qualidade.",
    icon: PlaceholderIcon,
  },
  {
    title: "Suporte",
    description: "Acompanhamento contínuo e suporte dedicado.",
    icon: PlaceholderIcon,
  },
  {
    title: "Inovação",
    description: "Soluções criativas e alinhadas às últimas tendências.",
    icon: PlaceholderIcon,
  },
];

function DifferentialsSection() {
  return (
    <section
      className={clsx(styles.sectionPadding, styles.differentialsSection)}
    >
      <div className="container">
        <Heading as="h2" className="text--center">
          Nossos Diferenciais
        </Heading>
        <div className={clsx("row", styles.differentialsGrid)}>
          {differentials.map((item, idx) => (
            <motion.div
              key={item.title}
              className={clsx("col col--3", styles.differentialItem)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="text--center">
                <item.icon className={styles.differentialIcon} />
                <Heading as="h4" className={styles.differentialTitle}>
                  {item.title}
                </Heading>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Business Model Section ---
function BusinessModelSection() {
  const steps = [
    "Consulta Inicial e Análise de Necessidades",
    "Planejamento Estratégico e Proposta",
    "Desenvolvimento e Implementação",
    "Acompanhamento e Otimização Contínua",
  ];

  return (
    <section
      className={clsx(styles.sectionPadding, styles.businessModelSection)}
    >
      <div className="container">
        <Heading as="h2" className="text--center">
          Como Trabalhamos
        </Heading>
        <div className={clsx("row", styles.businessModelContent)}>
          <motion.div
            className="col col--6" // Image column
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            {/* Replace with actual image component or img tag */}
            <PlaceholderIcon className={styles.businessModelImage} />
            {/* <img src="/img/business-model.svg" alt="Ilustração do modelo de negócio" className={styles.businessModelImage} /> */}
          </motion.div>
          <motion.div
            className="col col--6" // Text column
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading as="h3">Nosso Processo</Heading>
            <p>Entendemos suas necessidades para entregar a melhor solução.</p>
            <ol className={styles.businessModelSteps}>
              {steps.map((step, idx) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                >
                  {step}
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Testimonials + Form Section ---
// NOTE: A proper carousel usually requires a library (e.g., react-slick, swiper)
// This is a simplified placeholder.
const testimonials = [
  {
    name: "Cliente A",
    comment: "Excelente serviço, superou minhas expectativas!",
    photo: "/img/logo-square.jpg",
  }, // Using existing svgs as placeholders
  {
    name: "Cliente B",
    comment: "Equipe muito profissional e atenciosa.",
    photo: "/img/logo-square.jpg",
  },
  {
    name: "Cliente C",
    comment: "Resultados incríveis em pouco tempo.",
    photo: "/img/logo-square.jpg",
  },
];

function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [feedbackData, setFeedbackData] = useState({ name: "", text: "" });
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackErrors, setFeedbackErrors] = useState({ name: "", text: "" });

  // Basic carousel logic (replace with library for better UX)
  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const validateFeedbackField = (name, value) => {
    let error = "";
    if (!value) {
      error = "Campo obrigatório";
    }
    setFeedbackErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prev) => ({ ...prev, [name]: value }));
    validateFeedbackField(name, value); // Validate on change
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!validateFeedbackField("name", feedbackData.name)) isValid = false;
    if (!validateFeedbackField("text", feedbackData.text)) isValid = false;

    if (isValid) {
      console.log("Feedback submitted:", feedbackData);
      // Add actual submission logic here
      setFeedbackSent(true);
      setFeedbackData({ name: "", text: "" });
      setFeedbackErrors({ name: "", text: "" });
      setTimeout(() => setFeedbackSent(false), 3000); // Reset feedback message
    } else {
      console.log("Feedback form has errors:", feedbackErrors);
    }
  };

  const { name, comment, photo } = testimonials[currentTestimonial];

  return (
    <section
      className={clsx(styles.sectionPadding, styles.testimonialsSection)}
    >
      <div className="container">
        <Heading as="h2" className="text--center">
          O Que Nossos Clientes Dizem
        </Heading>

        {/* Simplified Carousel Placeholder */}
        <div className={styles.testimonialCarousel}>
          <button
            type="button"
            onClick={prevTestimonial}
            className={styles.carouselButton}
            aria-label="Depoimento anterior"
          >
            ‹
          </button>
          <motion.div
            key={currentTestimonial} // Key change triggers animation
            className={styles.testimonialCard}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }} // Note: exit animation requires AnimatePresence wrapper usually
            transition={{ duration: 0.3 }}
          >
            <img
              src={photo}
              alt={`Ilustração representando ${name}`}
              className={styles.testimonialPhoto}
            />
            <p className={styles.testimonialComment}>"{comment}"</p>
            <p className={styles.testimonialName}>- {name}</p>
          </motion.div>
          <button
            type="button"
            onClick={nextTestimonial}
            className={styles.carouselButton}
            aria-label="Próximo depoimento"
          >
            ›
          </button>
        </div>

        {/* Feedback Form */}
        <div className={styles.feedbackFormContainer}>
          <Heading as="h3" className="text--center">
            Deixe seu Depoimento
          </Heading>
          {feedbackSent ? (
            <motion.p
              className={styles.feedbackSuccess}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Obrigado pelo seu depoimento!
            </motion.p>
          ) : (
            <form
              onSubmit={handleFeedbackSubmit}
              className={styles.feedbackForm}
              noValidate
            >
              <div className={styles.formGroup}>
                <label
                  htmlFor="feedback-name"
                  className={styles.visuallyHidden}
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="feedback-name"
                  name="name"
                  placeholder="Seu Nome *"
                  value={feedbackData.name}
                  onChange={handleFeedbackChange}
                  required
                  aria-required="true"
                  aria-invalid={!!feedbackErrors.name}
                  aria-describedby={
                    feedbackErrors.name ? "feedback-name-error" : undefined
                  }
                  className={clsx(
                    styles.formInput,
                    feedbackErrors.name && styles.inputError
                  )}
                />
                {feedbackErrors.name && (
                  <span
                    id="feedback-name-error"
                    className={styles.errorMessage}
                  >
                    {feedbackErrors.name}
                  </span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label
                  htmlFor="feedback-text"
                  className={styles.visuallyHidden}
                >
                  Depoimento
                </label>
                <textarea
                  id="feedback-text"
                  name="text"
                  placeholder="Seu depoimento... *"
                  value={feedbackData.text}
                  onChange={handleFeedbackChange}
                  required
                  aria-required="true"
                  aria-invalid={!!feedbackErrors.text}
                  aria-describedby={
                    feedbackErrors.text ? "feedback-text-error" : undefined
                  }
                  rows={4}
                  className={clsx(
                    styles.formInput,
                    feedbackErrors.text && styles.inputError
                  )}
                />
                {feedbackErrors.text && (
                  <span
                    id="feedback-text-error"
                    className={styles.errorMessage}
                  >
                    {feedbackErrors.text}
                  </span>
                )}
              </div>
              <motion.button
                type="submit"
                className="button button--primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Depoimento
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// --- Sub-component: FAQ Section ---
const faqItems = [
  {
    q: "O que é a Takeode?",
    a: "Somos uma empresa de tecnologia especializada no desenvolvimento de soluções digitais sob medida, como apps, sistemas web e APIs.",
  },
  {
    q: "Quais tipos de serviços vocês oferecem?",
    a: "Desenvolvimento de software, consultoria técnica, manutenção de sistemas, infraestrutura e automação de processos digitais.",
  },
  {
    q: "Quais tecnologias vocês usam?",
    a: "Trabalhamos com Laravel, React, Next.js, Node.js, Docker, PostgreSQL, MongoDB, Redis, entre outras.",
  },
  {
    q: "Como posso contratar a Takeode?",
    a: "Entre em contato pelo nosso site, envie os detalhes do seu projeto e retornamos com uma proposta personalizada.",
  },
  {
    q: "Vocês oferecem suporte após a entrega?",
    a: "Sim. Garantimos suporte técnico, correções e evoluções conforme o contrato definido com o cliente.",
  },
];

function FaqItem({ item, isOpen, onClick }) {
  const uniqueId = `faq-${item.q.toLowerCase().replace(/[^a-z0-9]/g, "-")}`; // Generate safer ID
  return (
    <div className={styles.faqItem}>
      <motion.button
        className={styles.faqQuestion}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`${uniqueId}-answer`} // Use unique ID
        whileHover={{ backgroundColor: "var(--ifm-hover-overlay)" }}
      >
        {item.q}
        <motion.span
          className={styles.faqIcon}
          animate={{ rotate: isOpen ? 45 : 0 }} // Rotates '+' to 'x' (45deg)
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </motion.button>
      <motion.section
        id={`${uniqueId}-answer`} // Use unique ID
        aria-labelledby={`${uniqueId}-question`} // Associate with button if needed, though aria-controls is primary
        className={styles.faqAnswer}
        initial={false} // Don't animate on initial load unless open
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "1rem" : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }} // Important for height animation
      >
        {/* Inner div prevents content jump during animation */}
        <div style={{ paddingBottom: "1px" }}>
          <p>{item.a}</p>
        </div>
      </motion.section>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={clsx(styles.sectionPadding, styles.faqSection)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Perguntas Frequentes
        </Heading>
        <div className={styles.faqList}>
          {faqItems.map((item, idx) => {
            const key = item.q;
            return (
              <FaqItem
                key={key}
                item={item}
                isOpen={openIndex === idx}
                onClick={() => handleClick(idx)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Sub-component: Footer Section ---
// Note: Docusaurus provides a theme footer. This is a custom one if needed.
// If using the theme footer, configure it in docusaurus.config.ts instead.
function CustomFooter() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <footer className={clsx(styles.footer, styles.sectionPadding)}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--4", styles.footerCol)}>
            {/* Reduced Logo */}
            {/* Make sure logo path is correct */}
            <Link to="/" aria-label="Página inicial">
              <img
                src="/img/logo.svg"
                alt={`${siteConfig.title} Logo`}
                width="100"
                className={styles.footerLogo}
              />
            </Link>
            <p className={styles.footerTagline}>
              Transformando ideias em soluções digitais.
            </p>
          </div>
          <div className={clsx("col col--4", styles.footerCol)}>
            <Heading as="h4">Navegação</Heading>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/">Início</Link>
              </li>
              {/* Add links to actual pages when created */}
              {/* <li><Link to="/services">Serviços</Link></li> */}
              {/* <li><Link to="/about">Sobre Nós</Link></li> */}
              <li>
                <Link to="#contact">Contato</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className={clsx("col col--4", styles.footerCol)}>
            <Heading as="h4">Siga-nos</Heading>
            <div className={styles.socialLinks}>
              {/* Replace with actual SVG icons or an icon library */}
              {/* Example using placeholders */}
              <a
                href="https://github.com/Takeode"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlaceholderIcon width="24" height="24" />
              </a>
              <a
                href="https://www.linkedin.com/company/takeode"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlaceholderIcon width="24" height="24" />
              </a>
              <a
                href="https://www.instagram.com/takeode"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlaceholderIcon width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
        <div className={clsx("text--center", styles.footerCopyright)}>
          <p>
            Copyright © {new Date().getFullYear()} {siteConfig.title}. Todos os
            direitos reservados.
          </p>
          {/* Add links to actual policy pages when created */}
          {/* <Link to="/privacy-policy">Política de Privacidade</Link> | <Link to="/terms">Termos de Uso</Link> */}
        </div>
      </div>
    </footer>
  );
}

// --- Main HomePage Component ---
export default function HomePage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`Página Inicial - ${siteConfig.title}`} // Customize title
      title="Takeode - Soluções Digitais Inovadoras" // More specific title
      description="Takeode oferece soluções digitais personalizadas: consultoria estratégica, desenvolvimento web moderno, e marketing digital focado em resultados para impulsionar o seu negócio."
    >
      {" "}
      {/* Customize description */}
      {/* Remove HomepageHeader if HeroSection replaces it */}
      {/* <HomepageHeader /> */}
      <HeroSection />
      <main>
        {/* Include HomepageFeatures if desired, or remove */}
        {/* <HomepageFeatures /> */}
        {/* <ServicesSection /> */}
        <BusinessModelSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <BudgetCTASection />
        <FaqSection />
      </main>
      {/* Use CustomFooter OR rely on Docusaurus theme footer configured in docusaurus.config.ts */}
      {/* If using Docusaurus footer, ensure it's configured in docusaurus.config.ts */}
      {/* <CustomFooter /> */}
    </Layout>
  );
}

// Add Visually Hidden class definition if not globally available
// Ensure styles object has this class if defined in the CSS module
// styles.visuallyHidden = { ... }
