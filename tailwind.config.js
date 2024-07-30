/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shadowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px red, 0 0 10px red, 0 0 15px red' },
          '33%': { boxShadow: '0 0 5px green, 0 0 10px green, 0 0 15px green' },
          '66%': { boxShadow: '0 0 5px blue, 0 0 10px blue, 0 0 15px blue' },
        },
        shadowPulse2: {
          '0%, 100%': { boxShadow: '0 0 5px green, 0 0 10px green, 0 0 15px green' },
          '33%': { boxShadow: '0 0 5px blue, 0 0 10px blue, 0 0 15px blue' },
          '66%': { boxShadow: '0 0 5px red, 0 0 10px red, 0 0 15px red' },
        },
        shadowPulse3: {
          '0%, 100%': { boxShadow: '0 0 5px blue, 0 0 10px blue, 0 0 15px blue' },
          '33%': { boxShadow: '0 0 5px red, 0 0 10px red, 0 0 15px red' },
          '66%': { boxShadow: '0 0 5px green, 0 0 10px green, 0 0 15px green' },
        },
        marquee : {
          '0%' : {
            transform: 'translateX(0%)'
          },
          '100%' : {
            transform: 'translateX(-90%)'
          }
        }
      },
      animation: {
        shadowPulse: 'shadowPulse 3s infinite',
        shadowPulse2: 'shadowPulse2 3s infinite',
        shadowPulse3: 'shadowPulse3 3s infinite',
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
