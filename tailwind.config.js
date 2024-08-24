/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
        teko: ['Teko', 'sans-serif']
      },
      colors:{
        customDarkBG: '#212434',
        customBG: '#F8F5EC',
        customTxt: '#50413C',
        customTxtOrange: '#F5834D',
        customTxtYellow: '#FFCC63'
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounceOnce: 'bounceOnce 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

