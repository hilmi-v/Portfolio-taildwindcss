/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#FFD700',
        first: '#115173', 
        second: '#053F5E', 
        third: '#022C43' 
      },
      fontFamily: {
        "inter": ["Inter"]
      },
      
    },
  },
  plugins: [],
}

