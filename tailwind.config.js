/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "767px", min: "0px" },
      md: { max: "1023px", min: "768px" },
      lg: { max: "1279px", min: "1024px" },
      xl: { max: "9999px", min: "1280px" },
    },
  },
  fontFamily: {
    sans: ["Montserrat", "sans-serif"],
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
