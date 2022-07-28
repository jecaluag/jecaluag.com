const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument Extended", ...defaultTheme.fontFamily.sans],
        cangste: ["Cangste", ...defaultTheme.fontFamily.sans],
        gallient: ["Gallient", ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: {
      sans: ["HK Grotesk", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
