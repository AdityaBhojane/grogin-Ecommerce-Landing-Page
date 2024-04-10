/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*","./src/**"],
  theme: {
    extend: {
      backgroundImage:{

        'hero-pattern': "url('./assets home3/slider-03.jpg.png')",
        'hero-pattern2': "url('./assets/main.png')",
        'filter-hero':"url('./assets home3/filter/banner-33.jpg.png')",
        // 'logo': "url('./assets/logo.png')",

        
        'demo-banner': "url('./assets/banner-04.jpg.png')",
        'hero-pattern': "url('./assets/bannerLarge.png')",
        'bubble': "url('./assets/contriburtion.jpg')",

        'svg-1': "url('./assets/SVG-1.png')",
        'svg-2': "url('./assets/SVG-2.png')",
        'svg-3': "url('./assets/SVG-3.png')",
        'svg-4': "url('./assets/SVG-4.png')",

        'card-1': "url('./assets/card-1.jpeg')",
        'card-2': "url('./assets/card-2.jpeg')",
        'card-3': "url('./assets/card-3.jpeg')",

        'card-4': "url('./assets/Banner-lg-1.jpeg')",
        'card-5': "url('./assets/Banner-lg-2.jpeg')",
        'card-6': "url('./assets/Banner-lg-3.jpeg')",
        'card-7': "url('./assets/Banner-lg-4.jpeg')",

        'card-8': "url('./assets/card-8.jpeg')",
        'card-9': "url('./assets/card-9.jpeg')",

       
        

        
      },
      fontFamily:{
          Inter:["'Inter', sans-serif"]
      },
    },
  },
  plugins: [],
}

