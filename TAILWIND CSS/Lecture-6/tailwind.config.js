/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage:{
      'back-fixed':"url('./pexels.jpg')",
      'back-fixed-2':"url('./pexels-sev.jpg')"
    }
  },
  },
  plugins: [],
}

