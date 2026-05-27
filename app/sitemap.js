export default function sitemap() {
  const baseUrl = 'https://dvoxconstrucoes.com.br';

  const pages = [
    '',
    '/construcao-civil-sp',
    '/reformas-residenciais-sp',
    '/reformas-comerciais-sp',
    '/obras-corporativas-sp',
    '/construcao-predial-sp',
    '/gerenciamento-de-obras-sp',
    '/restauracao-de-fachadas-sp',
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.9,
  }));
}
