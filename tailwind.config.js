/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./_src/**/*.{njk,html}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
