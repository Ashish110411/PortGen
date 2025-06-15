/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ this enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
