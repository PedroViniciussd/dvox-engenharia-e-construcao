import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import Reveal from '../components/Reveal';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const whatsapp =
  'https://wa.me/5511965431342?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20D%2Fvox%20Constru%C3%A7%C3%B5es%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

const pageData = {
  "slug": "reformas-comerciais-sp",
  "title": "Reformas Comerciais SP | D/vox Construções",
  "description": "Reformas comerciais em São Paulo para lojas, escritórios, clínicas, empresas e ambientes corporativos com execução profissional e prazo.",
  "kicker": "Reformas comerciais SP",
  "h1": "Reformas comerciais em São Paulo para empresas, lojas e escritórios",
  "intro": "A D/vox Construções executa reformas comerciais para empresas que precisam modernizar espaços, melhorar a experiência do cliente e valorizar o ambiente profissional.",
  "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  "keywords": [
    "reformas comerciais SP",
    "reforma de loja São Paulo",
    "reforma de escritório SP",
    "reforma corporativa"
  ],
  "sections": [
    {
      "title": "Ambientes comerciais mais funcionais",
      "text": "Lojas, escritórios, clínicas e empresas precisam de ambientes bem planejados, bonitos e funcionais. A D/vox executa reformas comerciais com foco em qualidade e prazo."
    },
    {
      "title": "Obra com menor impacto na operação",
      "text": "O planejamento das etapas ajuda a reduzir transtornos e organizar a execução de forma mais eficiente para o negócio."
    },
    {
      "title": "Imagem profissional para sua empresa",
      "text": "Uma reforma bem executada melhora a percepção da marca, o atendimento ao cliente e a produtividade do espaço."
    }
  ],
  "faqs": [
    {
      "question": "Vocês fazem reforma de loja?",
      "answer": "Sim. A D/vox atende lojas, escritórios, clínicas, empresas e ambientes comerciais."
    },
    {
      "question": "A reforma comercial pode ser planejada por etapas?",
      "answer": "Sim. O planejamento por etapas ajuda a organizar prazos e reduzir impacto na operação."
    },
    {
      "question": "Atendem empresas em São Paulo?",
      "answer": "Sim. A D/vox atende São Paulo capital, Grande São Paulo e interior paulista."
    }
  ]
};

export const metadata = {
  title: pageData.title,
  description: pageData.description,
  alternates: { canonical: `/${pageData.slug}` },
  keywords: pageData.keywords,
  openGraph: {
    title: pageData.title,
    description: pageData.description,
    url: `https://dvoxconstrucoes.com.br/${pageData.slug}`,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'D/vox Construções São Paulo',
    images: [
      {
        url: '/og-image-2026.jpg',
        width: 1200,
        height: 630,
        alt: pageData.title,
      },
    ],
  },
};

function ServiceJsonLd() {
  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pageData.h1,
    description: pageData.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'D/vox Construções São Paulo',
      telephone: '+55 11 96543-1342',
      url: 'https://dvoxconstrucoes.com.br',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
    },
    areaServed: ['São Paulo', 'Grande São Paulo', 'Interior Paulista'],
    serviceType: pageData.keywords,
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </>
  );
}

export default function ServicePage() {
  return (
    <main className="bg-white text-slate-900">
      <ServiceJsonLd />
      <Header />

      
  <section className="relative min-h-[78vh] overflow-hidden bg-[#07111f] pt-36 text-white md:pt-44">
  {/* BACKGROUND FIXO */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{
      backgroundImage: `
        linear-gradient(
          90deg,
          rgba(7,17,31,.92) 0%,
          rgba(7,17,31,.74) 42%,
          rgba(7,17,31,.40) 100%
        ),
        url('${pageData.image}')
      `,
    }}
  />

  {/* LUZ PREMIUM */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(215,25,32,.18),transparent_35%)]" />

  {/* FADE INFERIOR */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07111f] to-transparent" />

  {/* CONTEÚDO */}
  <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 md:px-6 md:pt-[1rem]">
          <div className="max-w-4xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.25em] text-white backdrop-blur">
                {pageData.kicker}
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                {pageData.h1}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">
                {pageData.intro}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={whatsapp} className="rounded-full bg-[#d71920] px-8 py-4 text-center font-black text-white shadow-redglow transition hover:-translate-y-1 hover:bg-red-700">
                  Solicitar orçamento
                </a>

                <a href="/#especialidades" className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-white hover:text-[#07111f]">
                  Ver especialidades
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <Reveal direction="left">
            <aside className="rounded-[2rem] bg-[#f3f4f6] p-8 shadow-sm">
              <span className="font-black uppercase tracking-[.25em] text-[#d71920]">
                Especialidade
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#07111f]">
                Execução com planejamento, qualidade e acompanhamento.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Atendimento para São Paulo capital, Grande São Paulo e interior paulista,
                com foco em segurança, prazo, acabamento e clareza em cada etapa.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {pageData.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </aside>
          </Reveal>

          <div className="space-y-10">
            {pageData.sections.map((section, index) => (
              <Reveal key={section.title} direction="right" delay={index * 0.08}>
                <article>
                  <h2 className="text-2xl font-black text-[#07111f] md:text-3xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-lg leading-9 text-slate-600">
                    {section.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

  <section className="relative overflow-hidden bg-[#07111f] py-20 text-white md:py-32">
    {/* BACKGROUND IGUAL AO DIFERENCIAIS */}
    <div className="absolute inset-0 blueprint opacity-40" />
  
    <div
      className="absolute inset-0 opacity-20 bg-fixed bg-center bg-cover"
          style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(7 17 31 / 0%), rgba(7,17,31,.75)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
    />
  
    {/* LUZ */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(215,25,32,.18),transparent_30%)]" />
  
    {/* GRAFISMO */}
    <img
      src="/assets/grafismo-1.jpg"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 hidden w-[40rem] opacity-[0.05] md:block"
    />
  
    <div className="relative mx-auto max-w-7xl px-4 md:px-6">
      <Reveal className="max-w-4xl">
        <span className="font-black uppercase tracking-[.28em] text-[#ef4444]">
          Atendimento regional
        </span>
  
        <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
          Atendimento em São Paulo, Grande São Paulo e interior paulista.
        </h2>
  
        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">
          O grupo D/vox atende clientes em São Paulo, Guarulhos, Osasco,
          Barueri, Santo André, São Bernardo, Cotia, Campinas, Sorocaba,
          Jundiaí e diversas cidades do interior paulista, executando
          obras, reformas e projetos com alto padrão de qualidade.
        </p>
  
        <div className="mt-10 flex flex-wrap gap-4">
          {[
            'São Paulo',
            'Guarulhos',
            'Osasco',
            'Barueri',
            'Campinas',
            'Sorocaba',
          ].map((city) => (
            <div
              key={city}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              {city}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>

      <section className="bg-[#f3f4f6] py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal className="text-center">
            <span className="font-black uppercase tracking-[.25em] text-[#d71920]">
              Perguntas frequentes
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#07111f] md:text-5xl">
              Dúvidas sobre {pageData.kicker.toLowerCase()}
            </h2>
          </Reveal>

          <div className="mt-12 space-y-5">
            {pageData.faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.08}>
                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="flex items-center gap-3 text-xl font-black text-[#07111f]">
                    <FaCheckCircle className="text-[#d71920]" />
                    {faq.question}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#07111f] px-6 py-14 text-center text-white shadow-premium md:px-12">
          <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">
            Orçamento
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Quer tirar sua obra do papel com mais segurança?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Envie as informações do seu projeto para a D/vox Construções
            e receba atendimento direto pelo WhatsApp.
          </p>

          <a href={whatsapp} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d71920] px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-red-700">
            Chamar no WhatsApp <FaArrowRight />
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
