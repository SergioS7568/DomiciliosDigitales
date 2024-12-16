import containerQuery from "@tailwindcss/container-queries";
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoArial: ["Roboto", "Arial"],
      },
      fontSize: {
        regularSizedText: ["17.6px", "1.5"],
      },
      maxWidth: {
        maxwith8: ["90% ", " 1300px "],
      },
      maxHeight: {
        maxheigt8: ["60,5rem", "1300px"],
      },
      screens: {
        xs: "569px",
        mmd: "927px",
      },
      colors: {
        lightBlueShift: ["rgb(63, 117, 168)"],
        darkBlueShift: ["rgb(28, 50, 91)"],
        grayOption: ["#8f8f8f"],
        blackOption: ["rgb(40, 40, 40)"],
        darkGrayOption: ["rgb(30, 30, 30)"],
      },
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
      darkMode: "class",
    },
  },
  plugins: [containerQuery, require("daisyui")],
};
