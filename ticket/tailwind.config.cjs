/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      // => @media (min-width: 576px) { ... }

      'md': '640px',
      // => @media (min-width: 960px) { ... }

      'lg': '960px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
