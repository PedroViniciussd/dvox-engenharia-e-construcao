'use client';

import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFileInvoiceDollar,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const whatsapp =
  'https://wa.me/5511965431342?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20D%2Fvox%20Constru%C3%A7%C3%B5es%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ['Serviços', '/#servicos'],
    ['Diferenciais', '/#diferenciais'],
    ['Especialidades', '/#especialidades'],
    ['Processo', '/#processo'],
    ['Obras', '/obras'],
    ['Contato', '/#contato'],
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
     <div className="bg-[#d71920] px-4 py-2 text-white">
  <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 text-xs font-bold md:justify-between md:px-6">
    
    <a
      href={whatsapp}
      className="flex items-center gap-2 transition hover:text-white/80"
    >
      <FaWhatsapp className="text-base" />
      <span>(11) 96543-1342</span>
    </a>

    {/* LINK DRYWALL */}
<a
  href="https://dvoxdrywall.com.br"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[.15em] text-white transition hover:bg-white hover:text-[#d71920] md:flex"
>
  Conheça a D/VOX Drywall Prime
  <FaExternalLinkAlt className="text-[10px]" />
</a>

    <div className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-sm" />
      <span>São Paulo - SP e Região</span>
    </div>

  </div>
</div>

      <header className="border-b border-white/10 bg-[#07111f]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a
            href="/"
            className="flex items-center gap-4"
            aria-label="D/vox Engenharia e Construções - Início"
          >
            <div className="flex h-[5.5rem] w-[6.5rem] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl md:h-[6.5rem] md:w-[7.5rem]">
              <img
                src="/dvox-engenharia-logo.png"
                alt="Logo Grupo D/vox Engenharia e Construções em São Paulo, Grande São Paulo e Região Paulista"
                className="h-[5rem] w-auto object-contain md:h-[6rem]"
              />
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-white/80 md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <a
            href={whatsapp}
            className="hidden items-center gap-2 rounded-full bg-[#d71920] px-5 py-3 text-sm font-black text-white shadow-redglow transition hover:-translate-y-0.5 hover:bg-red-700 md:inline-flex"
          >
            <FaFileInvoiceDollar />
            Orçamento
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#07111f] px-4 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-bold text-white">
              {links.map(([label, href]) => (
                <a key={href} onClick={() => setMenuOpen(false)} href={href}>
                  {label}
                </a>
              ))}

              <a
                onClick={() => setMenuOpen(false)}
                href={whatsapp}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#d71920] px-5 py-3 text-center font-black text-white"
              >
                <FaFileInvoiceDollar />
                Solicitar orçamento
              </a>

              <a
  href="https://dvoxdrywall.com.br"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#d71920] px-5 py-3 text-center font-black text-white"
>
  Conheça a D/VOX Drywall Prime
</a>
              
            </div>
          </div>
        )}
      </header>
    </div>
  );
}