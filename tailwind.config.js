/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '720px', // Menor largura do container para telas grandes
          xl: '960px',
          '2xl': '1140px',
        },
      },
    },
  },
  plugins: [],
};
