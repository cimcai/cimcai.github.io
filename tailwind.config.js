/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Questrial", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        cimc_blue: "#626dd6",
        cimc_dark: "#272727",
        "color-border-neutral-default": "var(--color-border-neutral-default)",
        "color-primitives-gray-900": "var(--color-primitives-gray-900)",
        "color-primitives-slate-900": "var(--color-primitives-slate-900)",
        "color-text-default-default": "var(--color-text-default-default)",
        "color-text-neutral-on-neutral": "var(--color-text-neutral-on-neutral)",
        "system-colors-grays-black": "var(--system-colors-grays-black)",
      },
      fontSize: {
        "cimc-navbar": [
          "24px",
          {
            fontFamily: "Questrial, sans-serif",
            lineHeight: "normal",
            fontWeight: "400",
            colors: "#000",
          },
        ],
        "cimc-forward": [
          "20px",
          {
            fontFamily: "Questrial, sans-serif",
            lineHeight: "28px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
            colors: "#272727",
          },
        ],
        "cimc-heading": [
          "18px",
          {
            fontFamily: "Questrial, sans-serif",
            lineHeight: "1.4rem",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "cimc-subheading": [
          "16px",
          {
            fontFamily: "Questrial, sans-serif",
            lineHeight: "1.4rem",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "cimc-standard": [
          "16px",
          {
            fontFamily: "Questrial, sans-serif",
            lineHeight: "28px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
            colors: "#272727",
          },
        ],
        "cimc-logo": [
          "2.5rem",
          {
            fontFamily: "Questrial",
            lineHeight: "normal",
            letterSpacing: "0.075rem",
            fontWeight: "400",
            color: "#1C1C1C",
          },
        ],
        "cimc-hero": [
          "50px",
          {
            fontFamily: "Questrial",
            lineHeight: "50px",
            letterSpacing: "9px",
            fontWeight: "400",
            color: "#000",
          },
        ],
      },
    },
  },
  plugins: [],
}
