/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        frank: ["Frank Ruhl Libre", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "Arial", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
