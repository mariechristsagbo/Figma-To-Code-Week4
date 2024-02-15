/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors : {
      'primary-color' : '#000000',
    },
    extend: {
     
      fontFamily :  {
        'sora' : ['sans-serif', 'Sora'],
      }
     
    },
  },
  plugins: [],
}