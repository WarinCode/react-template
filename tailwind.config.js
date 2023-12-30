/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      mali: ['Mali', 'cursive']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      }
    },
  },
  plugins: [],
}