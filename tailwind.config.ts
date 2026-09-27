import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ivory: {
          50: "#FCFBF9",
          100: "#FAF8F5",
          200: "#F4EFE6",
          300: "#ECE3D4",
          400: "#DFD2BE",
          500: "#CEBC9F",
          900: "#1A1713",
        },
        charcoal: {
          50: "#6B665E",
          100: "#4D4841",
          200: "#36322C",
          300: "#27241F",
          400: "#1D1B17",
          500: "#141310",
          600: "#0E0D0B",
        },
        gold: {
          50: "#FAF6EE",
          100: "#F3EAD5",
          200: "#E5D2A8",
          300: "#D4B679",
          400: "#C49C52",
          500: "#B88936",
          600: "#9A6D24",
          700: "#7A531A",
          800: "#5B3C13",
        },
        bronze: {
          500: "#8C5835",
          600: "#704326",
          700: "#56321B",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
