/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#67dbda",
        secondry: "#1c2230",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992",
        xg: "1200px",
      },
      keyframes: {
        moveRight: {
          "0%,100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
