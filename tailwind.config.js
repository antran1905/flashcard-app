module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0ff",
      secondary: "#ff6bd5",
    },
    variants: {
      extends: {
        borderColor: ['focus', 'hover', 'group-hover'],
        textColor: ['group-hover'],
        translate: ['group-hover', 'hover'],
      }
    },
  },
  plugins: [],
}
