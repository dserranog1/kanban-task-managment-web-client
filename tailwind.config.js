/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "medium-grey": "#828FA3",
        "main-purple": "#635FC7",
        "light-grey": "#F4F7FD",
        "lines-light": "#E4EBFA",
      },
      fontSize: {
        md: [
          "0.938rem",
          {
            lineHeight: "1.18rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
