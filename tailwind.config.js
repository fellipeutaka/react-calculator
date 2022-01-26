module.exports = {
  purge: ["./src/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        numbers: {
          0: "#313131",
          1: "#6d6d6d",
        },
        operators: {
          0: "#f69906",
          1: "#ffdf4c",
        },
        clear: {
          0: "#9f9f9f",
          1: "#e5e5e5",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
