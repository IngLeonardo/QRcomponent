/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'white':        'hsl(0, 0%, 100%)',
        'light-gray':   'hsl(212, 45%, 89%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue':    'hsl(218, 44%, 22%)',
      },
      fontFamily:{
        'Outfit' :['Outfit'],
      },
      fontSize:{
        'sm-15': '15px',
      },
      screens:{
        'desktop':{'max':'1440px'},
        'tablet':{'max':'758px'},
        'mobile':{'max':'375px'},
        
      }
    },
  },
  plugins: [],
}

