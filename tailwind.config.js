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
        "cimc-forward": ["20px", {
          fontFamily: "Helvetica, sans-serif",
          lineHeight: "1.4rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        }],
        "cimc-heading": ["18px", {
          fontFamily: "Helvetica, sans-serif",
          lineHeight: "1.4rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        }],
        "cimc-subheading": ["16px", {
          fontFamily: "Helvetica, sans-serif",
          lineHeight: "1.4rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        }],
        "cimc-standard": ["20", {
          fontFamily: "Helvetica, sans-serif",
          lineHeight: "1.2rem",
          letterSpacing: "-0.01em",
          fontWeight: "400",
        }],
        "cimc-logo": ["2.1rem", {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        }],
      }
    },
  },
  plugins: [],
}
