/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "light-gray": "#F7F7F7",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0,0,0,0.1)",
      },
      width: {
        300: "300px",
        350: "350px",
        400: "400px",
        500: "500px",
        600: "600px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
        320: "320px",
      },
      minHeight: {
        590: "590px",
      },
      maxHeight: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
