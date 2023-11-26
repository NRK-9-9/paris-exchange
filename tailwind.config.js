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
      listStyleImage: {
        tower: 'url("/images/eiffel-tower.png")',
        exchange: 'url("https://icons8.com/icon/61998/exchange")',
      },
      fontFamily: {
        logoFont: "Agrandir",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=emerald]"],
          secondary: "#13BFAB",
          neutral: "#373F4F",
          primary: "#13BFAB",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
