/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#37B7C3',
        secondary: '#088395',
        navy: '#071952',
      },
    },
  },
  plugins: [],
}
