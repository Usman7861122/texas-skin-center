import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://texasskincenter.com',
  redirects: { '/blogs': '/blog', '/contact': '/contact-us', '/terms-and-conditions': '/terms-condition', '/privacy': '/privacy-policy' },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
