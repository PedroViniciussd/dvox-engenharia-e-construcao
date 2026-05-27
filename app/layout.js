import './globals.css';

const siteUrl = 'https://dvoxconstrucoes.com.br';

export const metadata = {
  metadataBase: new URL(siteUrl),

  manifest: '/manifest.json',

  title: {
    default:
      'Grupo D/vox Engenharia e Construções São Paulo | Construção Civil, Reformas e Gerenciamento de Obras',
    template: '%s | D/vox Construções São Paulo',
  },

  description:
    'D/vox Construções e Reformas São Paulo: construção civil, reformas residenciais e comerciais premium, gerenciamento de obras, empreitada total, restauração de fachadas, projetos e soluções completas em São Paulo.',

  keywords: [
    'construção civil em São Paulo',
    'construtora em São Paulo',
    'reformas residenciais SP',
    'reformas comerciais São Paulo',
    'gerenciamento de obras SP',
    'construção predial São Paulo',
    'empreitada total SP',
    'restauração de fachadas',
    'Dvox Construções',
    'engenharia em São Paulo',
    'construção civil no interior de São Paulo',
    'construção civil na Grande São Paulo',
    'reformas comerciais na Grande São Paulo',
    'reformas residenciais em São Paulo',
    'empresa de construção civil SP',
    'engenharia e construções São Paulo',
  ],

  authors: [
    {
      name: 'D/vox Construções e Reformas São Paulo',
    },
  ],

  creator: 'D/vox Construções e Reformas São Paulo',

  publisher: 'D/vox Construções e Reformas São Paulo',

  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },

      {
        url: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],

    shortcut: '/favicon.ico',

    apple: '/icon-512.png',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',

    locale: 'pt_BR',

    url: siteUrl,

    title:
      'Grupo D/vox Engenharia e Construções São Paulo | Do projeto ao resultado extraordinário',

    description:
      'Construção civil, reformas premium, gerenciamento de obras, empreitada total e soluções completas para residências, empresas e obras prediais em São Paulo.',

    siteName: 'D/vox Construções São Paulo',

    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'D/vox Engenharia e Construções São Paulo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'D/vox Construções São Paulo | Construção Civil e Reformas',

    description:
      'Construção civil, reformas premium, gerenciamento de obras e soluções completas em São Paulo.',

    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#07111f" />

        <meta
          name="format-detection"
          content="telephone=yes"
        />

        <link rel="manifest" href="/manifest.json" />

        <script src="https://cdn.tailwindcss.com" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      dvoxNavy: '#07111f',
                      dvoxNavy2: '#101b2d',
                      dvoxRed: '#d71920',
                      dvoxConcrete: '#f3f4f6',
                      dvoxGold: '#d6a84f'
                    },

                    boxShadow: {
                      premium:
                        '0 30px 90px rgba(7,17,31,.22)',

                      redglow:
                        '0 24px 80px rgba(215,25,32,.25)'
                    },

                    keyframes: {
                      float: {
                        '0%,100%': {
                          transform: 'translateY(0)'
                        },

                        '50%': {
                          transform: 'translateY(-14px)'
                        }
                      },

                      draw: {
                        '0%': {
                          strokeDashoffset: 900
                        },

                        '100%': {
                          strokeDashoffset: 0
                        }
                      },

                      pulseLine: {
                        '0%,100%': {
                          opacity: .45
                        },

                        '50%': {
                          opacity: 1
                        }
                      }
                    },

                    animation: {
                      float:
                        'float 5s ease-in-out infinite',

                      draw:
                        'draw 4s ease forwards',

                      pulseLine:
                        'pulseLine 2.8s ease-in-out infinite'
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>

      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}