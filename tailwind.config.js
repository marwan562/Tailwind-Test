/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#67dbda",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992",
        xg: "1200px",
      },
    },
  },
  plugins: [],
};
