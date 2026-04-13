/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // This maps your CSS variables to Tailwind classes
        primary: 'var(--color-primary)',
        'primary-soft': 'var(--color-primary-soft)',
        'bg-main': 'var(--color-bg-main)',
        'bg-card': 'var(--color-bg-card)',
      },
      boxShadow: {
        // Allows you to use 'shadow-fidelity' in your components
        'fidelity': '0 8px 30px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
};/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // This maps your CSS variables to Tailwind classes
        primary: 'var(--color-primary)',
        'primary-soft': 'var(--color-primary-soft)',
        'bg-main': 'var(--color-bg-main)',
        'bg-card': 'var(--color-bg-card)',
      },
      boxShadow: {
        // Allows you to use 'shadow-fidelity' in your components
        'fidelity': '0 8px 30px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
};
