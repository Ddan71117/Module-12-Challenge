/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-1': "url('./components/cardimg/card1.jpg')",
        'card-2': "url('./components/cardimg/card2.jpg')",
        'card-3': "url('./components/cardimg/card3.jpg')",
        'card-4': "url('./components/cardimg/card4.jpg')",
        'card-5': "url('./components/cardimg/card5.jpg')",
        'card-6': "url('./components/cardimg/card6.jpg')",
      },
      colors: {
        yinmnBlue: '#3A506B',
        oxfordBlue: '#0B132B',
        verdegris: '#5BC0BE',
        spaceCadet: '#1C2541',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

