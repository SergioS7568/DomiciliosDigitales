import containerQuery from "@tailwindcss/container-queries";
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
      colors: {
        lightBlueShift: ["rgb(63, 117, 168)"],
        darkBlueShift: ["rgb(28, 50, 91)"],
        grayOption: ["#8f8f8f"],
        blackOption: ["rgb(40, 40, 40)"],
      },
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    },
  },
  plugins: [containerQuery, require("daisyui")],
};
