/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkgray: '#767676',
        bordergray: '#d1d1d1',
        backgroundgray: '#eee',
        backgroundSearchGray: '#f5f5f5',
      },
      backgroundImage: {
        'hero-image': "url('./assets/home-banner.jpg')",
      },
      backgroundOpacity: {
        50: '0.5',
      },
      boxShadow: {
        bottom: 'inset 0 -1px #d1d1d1',
        bottomActive: 'inset 0 -2px #000000',
      },
      backgroundColor: ['focus-within'],
    },
  },
  plugins: [],
};
