/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Blue300:"#D0D6F9",
        Blue900:"#0B0D17",
        White:"#FFFFFF",
        Dark:"#CCCCCC"
      },
      backgroundImage:{
        'background-home-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'background-destination-mobile':"url('./assets/destination/background-destination-mobile.jpg')",
        'background-crew-mobile':"url('./assets/crew/background-crew-mobile.jpg')"
      },
      fontFamily:{
        bellefair:["Bellefair", "serif"],
        barlow:["Barlow", "sans-serif"]

      }
    },
  },
  plugins: [],
}