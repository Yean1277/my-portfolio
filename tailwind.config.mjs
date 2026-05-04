/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-soft': 'var(--color-primary-soft)',
        'bg-main': 'var(--color-bg-main)',
        'bg-card': 'var(--color-bg-card)',
        // Anime palette
        miku:        '#39c5bb',
        'miku-dark': '#2ba8a0',
        yuru:        '#F07535',
        'yuru-dark': '#D4612A',
        kato:        '#F5B3C8',
        'kato-dark': '#E0899F',
      },
      boxShadow: {
        fidelity: '0 8px 30px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
