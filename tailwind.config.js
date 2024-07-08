/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      secondary: ["Jost", "sans-serif"],
      primary: ["Big Shoulders Display", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
