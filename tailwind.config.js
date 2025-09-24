/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vibrant-green': '#66B933',
        'gold-yellow': '#E0C026',
        'solid-black': '#000000',
        'soft-green': '#B8D39A',
      }
    },
  },
  plugins: [],
};
