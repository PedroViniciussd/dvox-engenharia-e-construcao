import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Reveal from './components/Reveal';
import {
  FaBuilding,
  FaHardHat,
  FaTools,
  FaClipboardCheck,
  FaHome,
  FaCity,
  FaArrowRight,
  FaRulerCombined,
  FaPaintRoller,
  FaDraftingCompass,
  FaHandshake,
  FaAward,
} from 'react-icons/fa';

const whatsapp =
  'https://wa.me/5511965431342?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20D%2Fvox%20Constru%C3%A7%C3%B5es%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

const services = [
  {
    icon: FaBuilding,
    title: 'Construção civil em geral',
    text: 'Execução de obras residenciais, comerciais e prediais com planejamento, acompanhamento e acabamento profissional.',
  },
  {
    icon: FaHome,
    title: 'Reformas residenciais',
    text: 'Transformação de casas, apartamentos e ambientes internos com padrão premium e atenção aos detalhes.',
  },
  {
    icon: FaCity,
    title: 'Reformas comerciais',
    text: 'Reformas para lojas, empresas, escritórios, clínicas e ambientes corporativos com foco em prazo e funcionalidade.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Gerenciamento de obras',
    text: 'Acompanhamento técnico, organização das etapas, controle de prazos, fornecedores e execução da obra.',
  },
  {
    icon: FaHardHat,
    title: 'Empreitada total',
    text: 'Soluções completas do planejamento à entrega, reduzindo preocupação e centralizando a execução.',
  },
  {
    icon: FaPaintRoller,
    title: 'Restauração de fachadas',
    text: 'Revitalização, pintura, recuperação e valorização de fachadas residenciais, comerciais e prediais.',
  },
];

const seoLinks = [
  ['/construcao-civil-sp', 'Construção civil SP', 'Obras residenciais, comerciais e prediais com execução profissional em São Paulo.'],
  ['/reformas-residenciais-sp', 'Reformas residenciais SP', 'Reformas premium para casas, apartamentos e ambientes residenciais.'],
  ['/reformas-comerciais-sp', 'Reformas comerciais SP', 'Reformas para lojas, empresas, salas comerciais, clínicas e escritórios.'],
  ['/obras-corporativas-sp', 'Obras corporativas SP', 'Soluções para empresas, ambientes administrativos e projetos corporativos.'],
  ['/construcao-predial-sp', 'Construção predial SP', 'Execução e apoio para obras prediais, fachadas e empreendimentos.'],
  ['/gerenciamento-de-obras-sp', 'Gerenciamento de obras SP', 'Gestão técnica, planejamento, cronograma e acompanhamento de obras.'],
  ['/restauracao-de-fachadas-sp', 'Restauração de fachadas SP', 'Revitalização, pintura e valorização de fachadas em São Paulo.'],
  ['/obras-hospitalares-sp', 'Obras Hospitalares em São Paulo', 'Execução de obras hospitalares, reformas hospitalares, adequações técnicas ampliações e modernizações de ambientes de saúde em São Paulo.'],
];

function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'D/vox Construções e Reformas São Paulo',
    url: 'https://dvoxconstrucoes.com.br',
    telephone: '+55 11 96543-1342',
    image: 'https://dvoxconstrucoes.com.br/og-image-2026.jpg',
    sameAs: ['https://instagram.com/grupo_dvoxconstrucoes'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    areaServed: ['São Paulo', 'Grande São Paulo', 'Interior Paulista'],
    serviceType: services.map((s) => s.title),
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'D/vox Construções São Paulo',
    alternateName: 'D/vox Construções',
    url: 'https://dvoxconstrucoes.com.br',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
    </>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] text-slate-900">
      <JsonLd />
      <Header />

      <section className="relative min-h-[135vh] overflow-hidden bg-[#07111f] text-white">
  {/* IMAGEM FIXA */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{
      backgroundImage:
        "linear-gradient(90deg, rgba(7,17,31,.96) 0%, rgba(7,17,31,.82) 42%, rgba(7,17,31,.45) 100%), url('/assets/construcao-civil.png')",
    }}
  />

  {/* OVERLAYS PREMIUM */}
  <div className="absolute inset-0 blueprint opacity-30" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(215,25,32,.22),transparent_35%)]" />
  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07111f] to-transparent" />


  {/* CONTEÚDO */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-40 md:px-6">
    <div className="max-w-4xl pb-[6rem] md:pb-[0rem] md:pt-[2.3rem]">
      <Reveal>
        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.25em] text-white backdrop-blur">
          Construção e reformas premium em São Paulo e região paulista
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.05] tracking-tight md:text-7xl">
          Do projeto ao resultado extraordinário.
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">
          O grupo D/vox Construções executa construção civil, reformas residenciais, prediais, comerciais, gerenciamento de obras, empreitada total, restauração
          de fachadas e soluções completas com acabamento premium em São Paulo capital, Grande São Paulo e interior paulista.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsapp}
            className="rounded-full bg-[#d71920] px-8 py-4 text-center font-black text-white shadow-redglow transition hover:-translate-y-1 hover:bg-red-700"
          >
            Solicitar orçamento
          </a>

          <a
            href="#servicos"
            className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur transition hover:bg-white hover:text-[#07111f]"
          >
            Ver serviços
          </a>
        </div>
      </Reveal>
<Reveal delay={0.4}>
  <div className="mt-12 grid gap-4 sm:grid-cols-3">
    {[
      {
        icon: <FaDraftingCompass />,
        title: 'Projetos inteligentes',
      },
      {
        icon: <FaHardHat />,
        title: 'Obras com acompanhamento',
      },
      {
        icon: <FaAward />,
        title: 'Entrega com excelência',
      },
    ].map((item) => (
      <div
        key={item.title}
        className="group rounded-3xl border border-white/10 bg-[#07111f]/55 p-6 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#d71920]/40 hover:bg-[#0b1728]/80"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d71920]/15 text-2xl text-[#ff4b52] shadow-[0_0_30px_rgba(215,25,32,.15)] transition duration-500 group-hover:scale-110 group-hover:bg-[#d71920] group-hover:text-white">
          {item.icon}
        </div>

        <span className="mt-5 block text-sm font-bold uppercase tracking-[.15em] text-slate-200">
          {item.title}
        </span>
      </div>
    ))}
  </div>
</Reveal>
    </div>
  </div>
</section>

      <section id="servicos" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute inset-0 noise opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="font-black uppercase tracking-[.25em] text-[#d71920]">Serviços</span>

            <h2 className="mt-4 text-3xl font-black text-[#07111f] md:text-5xl">
              Construção, reformas e gerenciamento com padrão profissional
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Soluções completas para quem busca segurança, organização, acabamento premium e controle em cada etapa da obra.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.06} direction={index % 2 ? 'right' : 'left'}>
                  <article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#07111f] text-xl text-white transition group-hover:bg-[#d71920]">
                      <Icon />
                    </div>

                    <h3 className="mt-6 text-2xl font-black text-[#07111f]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {service.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="relative overflow-hidden bg-[#07111f] py-20 text-white md:py-28">
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <span className="font-black uppercase tracking-[.25em] text-[#ef4444]">
              Diferenciais
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Engenharia visual, execução organizada e acabamento que valoriza o imóvel.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              A D/vox une planejamento, mão de obra qualificada e acompanhamento técnico
              para entregar reformas e obras com mais previsibilidade, segurança e qualidade.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {['Planejamento inteligente', 'Execução com qualidade', 'Acompanhamento da obra', 'Entrega no prazo e sem dor de cabeça'].map((item, index) => (
              <Reveal key={item} direction="right" delay={index * 0.08}>
                <div className="flex items-center gap-5 rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d71920] font-black">
                    0{index + 1}
                  </span>

                  <p className="text-lg font-black">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="especialidades" className="relative overflow-hidden bg-[#f3f4f6] py-20 md:py-28">
        <img
          src="/assets/grafismo-1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 w-[77vw] md:w-[55vw] opacity-60 md:block"
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-4xl text-center">
  <span className="font-black uppercase tracking-[.25em] text-[#d71920]">
    Especialidades do Grupo D/VOX Engenharia e Construções
  </span>

  <h2 className="mt-4 text-3xl font-black text-[#07111f] md:text-5xl">
    Soluções completas para construir, reformar e transformar espaços
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Atuamos em construção civil, reformas residenciais e comerciais,
    gerenciamento de obras, empreitada total, restauração de fachadas,
    projetos e acabamentos com qualidade, segurança e compromisso em
    cada etapa.
  </p>
</Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {seoLinks.map(([href, title, text], index) => (
              <Reveal key={href} delay={index * 0.05}>
                <a href={href} className="group block h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
<span className="inline-flex rounded-full bg-[#d71920]/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-[#d71920]">
  Especialidade
</span>

                  <h3 className="mt-5 text-2xl font-black text-[#07111f] transition group-hover:text-[#d71920]">
                    {title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {text}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#07111f] group-hover:text-[#d71920]">
                    Saiba mais <FaArrowRight />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="max-w-6xl">
            <span className="font-black uppercase tracking-[.25em] text-[#d71920]">
              Processo
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#07111f] md:text-5xl">
              Uma jornada clara: da ideia à entrega da obra.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ['01', 'Diagnóstico', 'Entendimento da necessidade, medidas, escopo e expectativa do cliente.'],
              ['02', 'Planejamento', 'Definição das etapas, materiais, prazo, orçamento e execução.'],
              ['03', 'Execução', 'Equipe em obra com acompanhamento, organização e controle de qualidade.'],
              ['04', 'Entrega', 'Finalização com acabamento, limpeza e validação do resultado.'],
            ].map(([n, title, text], index) => (
              <Reveal key={n} delay={index * 0.08}>
                <div className="relative h-full rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-7">
                  <span className="text-5xl font-black text-[#d71920]">
                    {n}
                  </span>

                  <h3 className="mt-5 text-2xl font-black text-[#07111f]">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

   <section id='contato' className="relative overflow-hidden bg-[#07111f] py-24 text-white md:py-32">
  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1800&auto=format&fit=crop')",
    }}
  />

  <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111fcc_0%,rgba(7,17,31,.92)_40%,#07111fcc_100%)]" />

  {/* GRAFISMO */}
  <img
    src="/assets/grafismo-1.jpg"
    alt=""
    aria-hidden="true"
    className="pointer-events-none absolute bottom-0 right-0 hidden w-[38rem] opacity-[0.06] md:block"
  />

  <div className="relative mx-auto max-w-7xl px-4 md:px-6">
    {/* TOPO */}
    <Reveal className="mx-auto max-w-4xl text-center">
      <span className="font-black uppercase tracking-[.28em] text-[#d71920]">
        Excelência em construção civil
      </span>

      <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
        Construção, reforma e gerenciamento com padrão premium
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300">
        Projetos inteligentes, execução de alto padrão e acompanhamento
        técnico completo para obras residenciais, comerciais, prediais e corporativas em São Paulo capital, Grande São Paulo e interior paulista.
      </p>
    </Reveal>

      <div className="mx-auto max-w-5xl px-4 md:px-6 pt-[2rem]">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-8 text-center shadow-premium backdrop-blur md:p-14">
              <FaRulerCombined className="mx-auto text-4xl text-[#ef4444]" />

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                Vamos transformar sua ideia em obra?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Envie as informações do seu projeto e receba atendimento direto pelo WhatsApp.
              </p>

              <a href={whatsapp} className="mt-8 inline-flex rounded-full bg-[#d71920] px-8 py-4 font-black text-white shadow-redglow transition hover:-translate-y-1 hover:bg-red-700">
                Solicitar orçamento
              </a>
            </div>
          </Reveal>
        </div>
  </div>
</section>

      

      <Footer />
      <FloatingButtons />
    </main>
  );
}
