/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    colors: {
      'primary': '#64FFDA',
      'secondary':'#CCD6F6',
      'body':'#0A192E',
      'tab':'#132742',
      'card':'#112240'
    },
    fontSize:{
      'small':'18px',
      'title':'138px',
      '32':'32px',
      '57':'57px',
      '18':'18px',
      '24':'24px'
    },
    height: {
      '1':'1px'
    },
    borderWidth:{
      '1':'1px'
    },
    extend: {
     
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
