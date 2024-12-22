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
        cimc_dark: "#272727",
      },
      fontSize: {
        "cimc-forward": ["20px", {
          fontFamily: "Questrial, sans-serif",
          lineHeight: "28px",
          letterSpacing: "-0.01em",
          fontWeight: "400",
          colors: "#272727",
        }],
        "cimc-heading": ["18px", {
          fontFamily: "Questrial, sans-serif",
          lineHeight: "1.4rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        }],
        "cimc-subheading": ["16px", {
          fontFamily: "Questrial, sans-serif",
          lineHeight: "1.4rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        }],
        "cimc-standard": ["16px", {
          fontFamily: "Questrial, sans-serif",
          lineHeight: "28px",
          letterSpacing: "-0.01em",
          fontWeight: "400",
          colors: "#272727",
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
