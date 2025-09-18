/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-profundo': '#14213d',
        'cinza-claro': '#f4f4f4',
        'laranja-vibrante': '#ff8c00',
        'laranja-escuro': '#cf7100', 
        'azul-cobalto': '#014ba0',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}