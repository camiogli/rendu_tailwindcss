/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'], 
      },
      backgroundImage: {
        'orang' : "url('../Images/image-header.jpg')",
        'cherry' : "url('../Images/image-graphic-design.jpg')",
        'mandarine' : "url('../Images/image-photography.jpg')",
      },
    },
  },
  plugins: [],
}
