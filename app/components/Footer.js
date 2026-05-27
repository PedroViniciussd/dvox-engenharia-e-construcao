import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-[#07111f]">
      <div className="absolute inset-0 blueprint opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,25,32,.18),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/icon-512.png"
                alt="D/vox Construções"
                className="h-20 w-20 rounded-2xl object-cover shadow-xl"
              />

              <div>
                <strong className="text-xl font-black text-white">
                  D/vox Construções
                </strong>

                <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ef4444]">
                  Engenharia e Construções
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-8 text-slate-300">
              Construção civil, reformas premium, gerenciamento de obras, empreitada total,
              restauração de fachadas e soluções completas para projetos em São Paulo.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[.25em] text-[#ef4444]">
              Contato
            </h4>

            <div className="mt-6 space-y-4">
              <a href="https://wa.me/5511965431342" target="_blank" className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#25D366]">
                  <FaWhatsapp />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">WhatsApp</p>
                  <span className="text-sm">(11) 96543-1342</span>
                </div>
              </a>

              <a href="mailto:contato@dvoxconstrucoes.com.br" className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <FaEnvelope />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">E-mail</p>
                  <span className="text-sm">contato@dvoxconstrucoes.com.br</span>
                </div>
              </a>

              <a href="https://instagram.com/grupo_dvoxconstrucoes" target="_blank" className="flex items-center gap-3 text-slate-300 transition hover:text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#E1306C]">
                  <FaInstagram />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">Instagram</p>
                  <span className="text-sm">@grupo_dvoxconstrucoes</span>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[.25em] text-[#ef4444]">
              Especialidades
            </h4>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                'Construção civil',
                'Reformas premium',
                'Projetos',
                'Gerenciamento',
                'Empreitada total',
                'Fachadas',
                'Piso vinílico',
                'Elétrica e hidráulica',
              ].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} D/vox Construções São Paulo. Todos os direitos reservados.
          </p>

          <p className="text-sm text-slate-400">
            Desenvolvido por{' '}
            <a href="https://kinkajoudev.com.br" target="_blank" className="font-bold text-white transition hover:text-[#ef4444]">
              Kinkajou Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
