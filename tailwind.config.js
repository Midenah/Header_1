/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // tailwind.config.js
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}