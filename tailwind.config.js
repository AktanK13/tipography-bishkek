/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  plugins: [
    require("tw-elements/plugin.cjs"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
  darkMode: "class",
};
