import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      globals: {
        // Astro globals
        Astro: 'readonly',
        // Add other globals if needed
      },
    },
  },
];
