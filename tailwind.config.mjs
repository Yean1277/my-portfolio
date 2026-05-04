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
        // Warm neutral palette (replaces slate)
        warm: {
          bg:     '#f7f6f2',  // page background
          border: '#ece9e0',  // card borders
          ink:    '#24231f',  // headings
          body:   '#3a3833',  // body text
          muted:  '#787670',  // muted text
          meta:   '#a8a69f',  // mono/metadata
          grey:   '#5c5a55',  // dev accent
        },
      },
      transitionTimingFunction: {
        site: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        fidelity: '0 8px 30px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};
