/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif",
      },
      colors: {
        primary: "#D0F7FA",
        basegray: "#979797",
        danger: "#A80000",
        success: "#087B2F",
      },
      boxShadow: {
        cardShad: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
      },
    },
  },
  plugins: [],
};
