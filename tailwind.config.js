/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF385C',
        secondary: '#222222',
        neutral: {
          light: '#F7F7F7',
          DEFAULT: '#717171',
          dark: '#222222',
        },
        border: '#DDDDDD'
      }
    },
  },
  plugins: [],
}
