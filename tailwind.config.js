/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      grey100: "#F8F8F8",
      grey200: "#EBEBEB",
      grey300: "#DCDBDB",
      grey400: "#B3B4B6",
      grey500: "#727374",
      grey600: "#333537",
      orange100: "#FFE9D4",
      orange200: "#D1C8C1",
      orange300: "#FBB562",
      orange400: "#ED7F50",
      orange500: "#7A3829",
      orange600: "#512516",
      secondaryBlue: "#719ACC",
      secondaryPink: "#FFB6B6",
      green100: "#C4ECBC",
      green200: "#8EDA7F",
      green300: "#61C34D",
      green400: "#57A847",
      green500: "#47853B",
      green600: "#225818",
      red100: "#F1CFC9",
      red200: "#FE8F8F",
      red300: "#F66D6D",
      red400: "#E84242",
      red500: "#B73535",
      red600: "#7C2020",
    },
  },
  plugins: [],
}


