/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
