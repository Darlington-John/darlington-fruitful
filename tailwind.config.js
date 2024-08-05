/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
      //Or if using `src` directory:
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    colors: {
grey: '#bcbcbc',
darkGrey: '#5b616b',
black: '#141414',
orange: '#fe7755',
lightOrange: '#fee9d1',
beige: '#c6b5a0',
white: '#fff',
green: '#054f31',
lightGreen: '#d9ffe0'
    },
    screens: {
      '3xl': { max: '1535px' },
      
      '2xl': { max: '1400px' },
      xl: { max: '1279px' },
      

      lg: { max: '1023px' },
      

      md: { max: '767px' },
      

      sm: { max: '639px' },
      xs: { max: '575px' },
      dxs: { max: '500px' },
      '2xs': { max: '400px' },
      
  },
    extend: {},
  },
  plugins: [],
}