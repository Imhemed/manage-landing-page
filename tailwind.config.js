/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px' ,
      md: '768px' ,
      lg: '976px', 
      xl: '1440px' ,
    },
    extends: {
      colors: {
        brightred: "hsl(12, 88%, 59%)" , 
      }, 
    },
  },
  plugins: [],
}
