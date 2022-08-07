/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0,1fr))',
      },
      gridRow:  {
        'span-7': 'span 7 / span 7',
      },
      height: {
        '3/4-screen': '75vh',
        '4/5-screen': '80vh',
      },
      backgroundImage: {
        'woodworm_pattern': "url('/woodworm_pattern.svg')",
        'moth': "url('/moth.svg')",
      },
      backgroundSize: {
        '50%': '50%',
        '90%': '90%',
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
      }
    },
  },
  plugins: [],
}
