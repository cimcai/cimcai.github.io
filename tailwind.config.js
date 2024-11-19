/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cimc_blue: "#626dd6",
      },
      fontSize: {
        "cimc-standard": ["20px", {
          fontFamily: "Helvetica, sans-serif",
          lineHeight: "1.4rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        }],
        "cimc-logo": ["2.1rem", {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        }],
        "2xl": ["1.5rem", {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        }],
        "3xl": ["1.875rem", {
          lineHeight: "2.25rem",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        }],
      }
    },
  },
  plugins: [],
}
