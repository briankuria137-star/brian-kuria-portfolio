import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F6F3",
        surface: "#FFFFFF",
        "surface-muted": "#ECEEEA",
        foreground: "#151A19",
        muted: "#5B6460",
        border: "#DBDFD9",
        primary: {
          DEFAULT: "#1F4B4C",
          light: "#2E6668",
          dark: "#123132",
        },
        accent: {
          DEFAULT: "#B8863B",
          light: "#D3A461",
          dark: "#8F672B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "38rem",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21, 26, 25, 0.06), 0 1px 1px rgba(21, 26, 25, 0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
