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
            lineHeight: "24px",
            letterSpacing: "-0.36px",
          },
        ],
        "cimc-navbar-mobile": [
          "28px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.84px",
          },
        ],
        "cimc-helvetica-smaller": [
          "14px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "112%",
            letterSpacing: "-0.28px",
          },
        ],
        "cimc-helvetica-small": [
          "16px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "140%" /* 22.4px */,
          },
        ],
        "cimc-contact-button": [
          "16px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "120%" /* 19.2px */,
            letterSpacing: "-0.32px",
          },
        ],
        "cimc-substack-description": [
          "16px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%" /* 24px */,
          },
        ],
        "cimc-helvetica-medium": [
          "18px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
            letterSpacing: "-0.36px",
          },
        ],
        "cimc-substack-button": [
          "20px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "120%" /* 24px */,
            letterSpacing: "-0.4px",
          },
        ],
        "cimc-helvetica-standard": [
          "20px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
        "cimc-helvetica-heading": [
          "24px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "140%",
            letterSpacing: "-0.72px",
          },
        ],
        "cimc-helvetica-normal": [
          "24px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "125%",
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
        "cimc-large": [
          "24px",
          {
            fontFamily: "Questrial, sans-serif",
            lineHeight: "105%",
            fontStyle: "normal",
            letterSpacing: "-0.72px",
            fontWeight: "400",
            colors: "#181D27",
          },
        ],
        "cimc-helvetica-large": [
          "36px",
          {
            colors: "#181D27",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "105%",
            letterSpacing: "-1.08px",
          },
        ],
        "cimc-logo-small": [
          "32px",
          {
            color: "#181D27",
            fontFamily: "Questrial",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "105%",
            letterSpacing: "-0.96px",
          },
        ],
        "cimc-logo": [
          "40px",
          {
            color: "#181D27",
            fontFamily: "Questrial",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "105%",
            letterSpacing: "-1.2px",
          },
        ],
        "cimc-hero-small": [
          "36px",
          {
            color: "#181D27",
            fontFamily: "Questrial",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "105%",
            letterSpacing: "-1.44px",
          },
        ],
        "cimc-substack": [
          "44px",
          {
            fontFamily: "Questrial",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "105%",
            letterSpacing: "17.6px",
            color: "#181D27",
            textTransform: "uppercase",
          },
        ],
        "cimc-hero-sub": [
          "44px",
          {
            color: "#181D27",
            fontFamily: "Questrial",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "105%",
            letterSpacing: "-1.32px",
          },
        ],
        "cimc-hero": [
          "56px",
          {
            color: "#181D27",
            fontFamily: "Questrial",
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
