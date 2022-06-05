module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navy: "#112D4E",
        blue: "#3F72AF",
        gray: "#DBE2EF",
        white: "#F9F7F7",
      },
    },
  },
  plugins: [],
};
