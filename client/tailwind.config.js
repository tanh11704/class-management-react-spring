/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fl-x': {
            '0%, 100%': { transform: 'translateX(-20px)' },
            '50%': { transform: 'translateX(-10px)' },
        },
        'fl-y': {
            '0%, 100%': { transform: 'translateY(-20px)' },
            '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        'fl-x': 'fl-x 2s linear infinite',
        'fl-y': 'fl-y 2s linear infinite',
      }
    },
  },
  plugins: [],
}
