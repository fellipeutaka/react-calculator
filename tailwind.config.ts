import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/App.tsx", "./src/components/*.tsx"],
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
  plugins: [],
} satisfies Config;
