'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp, FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 300
      );
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function send() {
    if (!subject.trim() || !message.trim()) return;

    const text = `*${subject.trim()}*\n\n${message.trim()}`;

    window.open(
      `https://wa.me/5511965431342?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  }

  return (
    <>
      <div
        className={`fixed bottom-5 left-5 z-[998] transition-all duration-500 ${
          showScrollTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-10 opacity-0'
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="rounded-full border border-white/10 bg-[#07111f]/95 p-3 text-white shadow-2xl backdrop-blur transition hover:bg-[#d71920]"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </button>
      </div>

      <div className="fixed bottom-5 right-5 z-[998]">
        {open && (
          <div className="mb-4 w-[320px] rounded-3xl border border-white/10 bg-[#07111f] p-5 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[.18em] text-[#25D366]">
                  WhatsApp
                </p>

                <h3 className="mt-1 text-lg font-black">
                  Enviar mensagem
                </h3>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#d71920]"
                aria-label="Fechar"
              >
                <FaTimes />
              </button>
            </div>

            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Assunto da mensagem"
              className="mt-5 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white outline-none placeholder:text-white/50 focus:border-[#25D366]"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem"
              rows={4}
              className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white outline-none placeholder:text-white/50 focus:border-[#25D366]"
            />

            <button
              onClick={send}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white transition hover:bg-green-600"
            >
              <FaPaperPlane />
              Enviar no WhatsApp
            </button>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:-translate-y-1 hover:bg-green-600 md:h-14 md:w-14"
          aria-label="Abrir WhatsApp"
        >
          <FaWhatsapp />
        </button>
      </div>
    </>
  );
}
