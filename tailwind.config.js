/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e6ffff',
          100: '#b3f0ff',
          200: '#80e6ff',
          300: '#4ddbff',
          400: '#00d0ff',
          500: '#00b8e6',
          600: '#0099cc',
          700: '#007a99',
          800: '#005c73',
          900: '#003d4d',
        },
        'secondary': {
          50: '#ffe6f0',
          100: '#ffb3d7',
          200: '#ff80be',
          300: '#ff4da6',
          400: '#ff1a8d',
          500: '#ff0074',
          600: '#e6005f',
          700: '#cc0055',
          800: '#99004d',
          900: '#660033',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};