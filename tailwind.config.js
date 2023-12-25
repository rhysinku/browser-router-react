/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    fontFamily:{
      priFont:['Fira Sans'],
      secFont:['Poppins']
    },
    extend: {
      colors:{
        'priColor':'#52D3D8',
        'secColor':'#3887BE',
        'pColor':'#200E3A',
        'hColor':'#38419D'
      },
    },
  },
  plugins: [],
  darkMode: 'dark'
}

