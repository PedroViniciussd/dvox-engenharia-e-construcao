'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImages,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const projects = [
  {
    title: 'Obra concluída em Moema AeD',
    location: 'Moema - São Paulo',
    description:
      'Registro fotográfico de obra concluída pelo Grupo D/VOX Engenharia e Construções, com execução profissional, acabamento de qualidade e acompanhamento em cada etapa.',
    images: Array.from(
      { length: 27 },
      (_, index) => `/assets/projetos/etapa-${index + 1}.jpg`
    ),
  },
];

export default function ObrasPage() {
  const [carouselIndex, setCarouselIndex] = useState({});
  const [modal, setModal] = useState(null);

  function getCurrentIndex(projectIndex) {
    return carouselIndex[projectIndex] || 0;
  }

  function getVisibleImages(project, currentIndex) {
  return {
    mobile: project.images.slice(currentIndex, currentIndex + 1),
    desktop: project.images.slice(currentIndex, currentIndex + 4),
  };
}

function nextCarousel(projectIndex, total) {
  setCarouselIndex((prev) => {
    const current = prev[projectIndex] || 0;
    const next = current + 1 >= total ? 0 : current + 1;

    return {
      ...prev,
      [projectIndex]: next,
    };
  });
}

function prevCarousel(projectIndex, total) {
  setCarouselIndex((prev) => {
    const current = prev[projectIndex] || 0;
    const previous = current - 1 < 0 ? total - 1 : current - 1;

    return {
      ...prev,
      [projectIndex]: previous,
    };
  });
}

  function openModal(projectIndex, imageIndex) {
    setModal({
      projectIndex,
      imageIndex,
    });
  }

  function closeModal() {
    setModal(null);
  }

  function nextModal() {
    if (!modal) return;

    const project = projects[modal.projectIndex];
    const next =
      modal.imageIndex + 1 >= project.images.length ? 0 : modal.imageIndex + 1;

    setModal({
      ...modal,
      imageIndex: next,
    });
  }

  function prevModal() {
    if (!modal) return;

    const project = projects[modal.projectIndex];
    const previous =
      modal.imageIndex - 1 < 0 ? project.images.length - 1 : modal.imageIndex - 1;

    setModal({
      ...modal,
      imageIndex: previous,
    });
  }

  return (
    <main className="bg-[#f3f4f6] text-slate-900">
      <Header />

      <section className="relative overflow-hidden bg-[#07111f] pb-24 pt-44 text-white md:pb-32 md:pt-52">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,17,31,.95), rgba(7,17,31,.78)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1800&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(215,25,32,.22),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f3f4f6] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.25em] text-white backdrop-blur">
            <FaImages className="text-[#ef4444]" />
            Obras concluídas
          </span>

          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Projetos executados pelo Grupo D/VOX Engenharia e Construções
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">
            Conheça algumas obras concluídas pela D/VOX, com registros reais
            de execução, acabamento, transformação dos ambientes e resultado
            final entregue aos clientes.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="space-y-20">
            {projects.map((project, projectIndex) => {
              const currentIndex = getCurrentIndex(projectIndex);
const visibleImages = getVisibleImages(project, currentIndex);

              return (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[2.5rem] border border-slate-200  p-5 shadow-[0_25px_90px_rgba(2,6,23,.08)] md:p-8"
                >
                  <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#d71920]/10 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-[#d71920]">
                        <FaMapMarkerAlt />
                        {project.location}
                      </span>

                      <h2 className="mt-5 text-3xl font-black leading-tight text-[#07111f] md:text-5xl">
                        {project.title}
                      </h2>

                      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                        {project.description}
                      </p>
                    </div>

                    {project.images.length > 4 && (
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() =>
                            prevCarousel(projectIndex, project.images.length)
                          }
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#07111f] shadow-sm transition hover:-translate-y-1 hover:bg-[#07111f] hover:text-white"
                          aria-label="Imagem anterior"
                        >
                          <FaChevronLeft />
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            nextCarousel(projectIndex, project.images.length)
                          }
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d71920] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#07111f]"
                          aria-label="Próxima imagem"
                        >
                          <FaChevronRight />
                        </button>
                      </div>
                    )}
                  </div>

{/* MOBILE - 1 imagem por vez */}
<div className="block md:hidden">
  {visibleImages.mobile.map((image, imageIndex) => {
    const realImageIndex = currentIndex + imageIndex;

    return (
      <button
        type="button"
        key={image}
        onClick={() => openModal(projectIndex, realImageIndex)}
        className="group relative h-80 w-full overflow-hidden rounded-[2rem] bg-slate-200 text-left shadow-sm"
      >
        <img
          src={image}
          alt={`${project.title} - imagem ${realImageIndex + 1}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 via-transparent to-transparent opacity-80" />

        <div className="absolute bottom-5 left-5 right-5">
          <span className="rounded-full bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[.16em] text-[#07111f]">
            Ver imagem
          </span>
        </div>
      </button>
    );
  })}
</div>

{/* DESKTOP - 4 imagens por vez */}
<div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
  {visibleImages.desktop.map((image, imageIndex) => {
                      const realImageIndex = currentIndex + imageIndex;

                      return (
                        <button
                          type="button"
                          key={image}
                          onClick={() => openModal(projectIndex, realImageIndex)}
                          className="group relative h-72 overflow-hidden rounded-[2rem] bg-slate-200 text-left shadow-sm"
                        >
                          <img
                            src={image}
                            alt={`${project.title} - imagem ${realImageIndex + 1}`}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/75 via-transparent to-transparent opacity-80" />

                          <div className="absolute bottom-5 left-5 right-5">
                            <span className="rounded-full bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[.16em] text-[#07111f]">
                              Ver imagem
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {modal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-4 py-8">
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#07111f] shadow-xl transition hover:bg-[#d71920] hover:text-white"
            aria-label="Fechar modal"
          >
            <FaTimes />
          </button>

          <button
            type="button"
            onClick={prevModal}
            className="absolute left-5 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#07111f] shadow-xl transition hover:bg-[#d71920] hover:text-white md:flex"
            aria-label="Imagem anterior"
          >
            <FaChevronLeft />
          </button>

          <div className="max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] p-2 shadow-2xl">
            <img
              src={projects[modal.projectIndex].images[modal.imageIndex]}
              alt={`${projects[modal.projectIndex].title} - imagem ampliada`}
              className="max-h-[84vh] w-full rounded-[1.5rem] object-contain"
            />
          </div>

          <button
            type="button"
            onClick={nextModal}
            className="absolute right-5 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#07111f] shadow-xl transition hover:bg-[#d71920] hover:text-white md:flex"
            aria-label="Próxima imagem"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3 md:hidden">
            <button
              type="button"
              onClick={prevModal}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#07111f]"
              aria-label="Imagem anterior"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              onClick={nextModal}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d71920] text-white"
              aria-label="Próxima imagem"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      <Footer />
      <FloatingButtons />
    </main>
  );
}