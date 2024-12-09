/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoArial: ["Roboto", "Arial"],
      },
      fontSize: {
        regularSizedText: ["17.6px", "1.5"],
      },
    },
  },
  plugins: [require("daisyui")],
};
