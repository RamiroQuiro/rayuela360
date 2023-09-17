const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {

  content: ["./src/**/*.{html,js,astro,jsx}"],
  theme: {
    extend: {
      colors: {
        primary:{
        100: '#89CFF0',
        200: '#98FF98',
        'text': '#595959',
        'resaltado': '#FFFACD',
        'fondo': '#FFD1DC50',
        'error':"#FF7F50"
      }},
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframe: {

        aparecer: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      }
    },
  },
  // ...
};