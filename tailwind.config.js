/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logoFont: "Agrandir",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13BFAB",
          "primary-focus": "#13BFAB",
          "base-100": "#FFFFFF",
          neutral: "#000000",
        },
      },
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=emerald]"],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
