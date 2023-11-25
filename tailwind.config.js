/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderWidth: {
        1: "1px"
      },
      opacity: {
        15: "0.15",
        45: "0.45"
      }
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blackish: "#171717",
      green: "#5CE761"
    }
  },
  plugins: [],
}
