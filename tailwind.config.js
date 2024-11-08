/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1d4ed8",
        secondary: "#000",
        tertiary: "rgb(245 245 247)",
        gray: "#d1d5db",
        darkgray: "#888a8b",
      },

      textColor: {
        primary: "#1d4ed8",
        secondary: "#000",
        tertiary: "rgb(245 245 247)",
        gray: "#d1d5db",
        darkgray: "#888a8b",
      },
      colors: {
        primary: "#1d4ed8",
        secondary: "#000",
        tertiary: "rgb(245 245 247)",
        gray: "#d1d5db",
        darkgray: "#888a8b",
      },
    },
  },
  plugins: [],
};
