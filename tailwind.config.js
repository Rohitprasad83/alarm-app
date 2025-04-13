/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      grey: {
        100: "#F8F8F8",
        200: "#EBEBEB",
        300: "#DCDBDB",
        400: "#B3B4B6",
        500: "#727374",
        600: "#333537",
      },
      orange: {
        100: "#FFE9D4",
        200: "#D1C8C1",
        300: "#FBB562",
        400: "#ED7F50",
        500: "#7A3829",
        600: "#512516",
      },
      secondaryBlue: "#719ACC",
      secondaryPink: "#FFB6B6",
      green: {
        100: "#C4ECBC",
        200: "#8EDA7F",
        300: "#61C34D",
        400: "#57A847",
        500: "#47853B",
        600: "#225818",
      },
      red: {
        100: "#F1CFC9",
        200: "#FE8F8F",
        300: "#F66D6D",
        400: "#E84242",
        500: "#B73535",
        600: "#7C2020",
      }
    },
  },
  plugins: [],
}


