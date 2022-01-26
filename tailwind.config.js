module.exports = {
  purge: ["./src/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        numbers: "#313131",
        operators: "#f69906",
        clear: "#9f9f9f",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["active"],
    },
  },
  plugins: [],
};
