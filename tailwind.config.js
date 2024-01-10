/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter':['"Inter"']
      }
    },
    colors:{
      background:'var(--background)',
    },
    
  }
  ,
  plugins: [],
}

