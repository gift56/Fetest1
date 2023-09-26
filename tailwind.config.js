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
        tabColor: "#00635B",
      },
      boxShadow: {
        sideShad: "0px 4px 23px 0px rgba(0, 0, 0, 0.05)",
        cardShad: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
        tabShad: "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
        uploadShad: "3px 3px 9px 0px rgba(190, 190, 190, 0.13)",
      },
    },
  },
  plugins: [],
};
