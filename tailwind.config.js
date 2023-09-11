/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"rubik"', "sans-serif"],
        "roboto-mono": ['"roboto-mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
