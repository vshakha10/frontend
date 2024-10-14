/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'2rem'
    },
    // screens:{
    //   xs:'320px',
    //   sm:'576px',
    //   md:'768px',
    //   lg:'1200px',
    //   xl:'1400px',
    //   xxl:'1500px'
    // },
    extend: {
      backgroundImage:{
        'vish':"url('./pexels.jpeg')"
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight:false,
  }
}

