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
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}