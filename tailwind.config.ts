import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // shadcn semantic tokens (mapped to our schema below)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Internet Money brand tokens (direct from your schema)
        im: {
          bg: { DEFAULT: "#f5f5f5", dark: "#121314" },
          surface: { DEFAULT: "#ffffff", dark: "#232426" },
          border: { DEFAULT: "#CDCDCD", dark: "#2C2D2F" },
          ink: { DEFAULT: "#1A1A1A", dark: "#E6E6E6" },
          subtle: { DEFAULT: "#6b6b6b", dark: "#b3b3b3" },
          accent: { DEFAULT: "#3861f6", dark: "#00B4FF" },
          success: { DEFAULT: "#3FA028", dark: "#5FD639" },
          danger: { DEFAULT: "#D93333", dark: "#FF4A4A" },
          warning: "#D98A21",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Schema-specified radii
        pill: "16px",
        btn: "12px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Mobile schema scale, normalized to rem for web
        "im-max": ["35px", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "im-1": ["18px", { lineHeight: "1.3" }],
        "im-2": ["17px", { lineHeight: "1.4" }],
        "im-3": ["14px", { lineHeight: "1.5" }],
        "im-4": ["13px", { lineHeight: "1.5" }],
        "im-5": ["11px", { lineHeight: "1.5" }],
        "im-6": ["10px", { lineHeight: "1.4" }],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tw-rotate, 0deg))" },
          "50%": { transform: "translateY(-8px) rotate(var(--tw-rotate, 0deg))" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
