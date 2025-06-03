/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
 // darkMode: "media", // ili "class" ako želiš ručno kontrolisanje tamnog moda
  theme: {
    extend: {},
  },
  plugins: [],
}
