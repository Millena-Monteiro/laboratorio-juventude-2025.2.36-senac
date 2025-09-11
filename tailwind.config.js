/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grotas-amarelo': '#eeca06',
        'azul-profundo': '#14213d',
        'cinza-claro': '#f4f4f4',
        'laranja-intenso': '#ff9800',
        'azul-cobalto': '#014ba0',

      },
    },
  },
  plugins: [],
}