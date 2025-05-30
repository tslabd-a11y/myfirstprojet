/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#ffffff",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
      red: "#ff2c2c",
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ["Roboto"],
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94,206,220,0.5)",
        cyanMidumShadow: "10px 10px 200px 150px rgba(94,206,220,0.5)",
        orangeMidumShadow: "10px 10px 200px 150px rgba(240,  169, 79, 0.5)",
      },
    },
  },
  plugins: [],
};
