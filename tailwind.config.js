/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grotas-amarelo': '#eeca06',
        'grotas-azul': '#14213d',
        'grotas-cinza-claro': '#f4f4f4',
        'grotas-carmesim':  '#de183d',
        'grotas-laranja': '#ff9800',

      },
    },
  },
  plugins: [],
}