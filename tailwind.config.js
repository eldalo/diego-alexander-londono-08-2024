/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#242424',
      },
      fontFamily: {
        pokemonHollow: ['PokemonHollow', 'sans-serif'],
        pokemonClassic: ['PokemonClassic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
