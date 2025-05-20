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
          "18px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px" /* 133.333% */,
            letterSpacing: "-0.36px",
          },
        ],
        "cimc-contact-button": [
          "16px",
          {
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "120%" /* 19.2px */,
            letterSpacing: "-0.32px",
          },
        ],
        "cimc-forward": [
          "28px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            lineHeight: "110%",
            fontStyle: "normal",
            fontWeight: "400",
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
          "40px",
          {
            fontFamily: "Questrial",
            fontStyle: "normal",
            lineHeight: "105%",
            letterSpacing: "-1.2px",
            fontWeight: "400",
            color: "#181D27",
          },
        ],
        "cimc-hero": [
          "56px",
          {
            color: "#181D27",
            fontFamily: "Questrial",
            fontSize: "56px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "105%" /* 58.8px */,
            letterSpacing: "-2.24px",
          },
        ],
      },
    },
  },
  plugins: [],
}
