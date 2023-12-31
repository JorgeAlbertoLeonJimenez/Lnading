/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fc552f',
        'neg': '#07070c',
        'bgFooter':'#585858'
      },
      fontfamily: {
        'Poppins': 'sans-serif',
        'Roboto': 'sans - serif'
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/icons/logos/fondo5.webp')",
        'second-pattern': "url('./assets/icons/logos/fondo.webp')",
      }
    },
    plugins: [],
  }}