/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      // system
      screens: {
        p: "240px",
        d: "1024px",
      },

      fontFamily: {
        //system font
        OpenSans: ["Open Sans", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        //custom font
        UTMAmerican: ["UTMAmerican", "sans-serif"],
        UTMFleur: ["UTMFleur", "sans-serif"],
      },
      colors: {
        //system colors
        redPrimmary: "#ed1b2e",
        Blue3D: "#1D1D3D",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        blueAdmin: "#74affc",
        purpleAdmin: "#bb86fc37",
        purpleHover: "#BB86FC",
        BlueFF: "#1A49FF",
        //Custom colors
        mainyellow: "#f7ef00",
        mainred: "#d70000",
      },

      // custom
      backgroundImage: {},
      backgroundColor: {},
    },
  },
};
