import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary Emerald Color Palette
                emerald: {
                    DEFAULT: "#064E3B",
                    50: "#ECFDF5",
                    100: "#D1FAE5",
                    200: "#A7F3D0",
                    300: "#6EE7B7",
                    400: "#34D399",
                    500: "#10B981",
                    600: "#059669",
                    700: "#047857",
                    800: "#065F46",
                    900: "#064E3B",
                    950: "#022C22",
                },
                // Supporting Colors
                cream: {
                    DEFAULT: "#FFFDF7",
                    50: "#FFFEF9",
                    100: "#FFFDF7",
                    200: "#FFF9E6",
                },
                gold: {
                    DEFAULT: "#D4AF37",
                    light: "#E8C547",
                    dark: "#B8962E",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "sans-serif"],
                display: ["var(--font-outfit)", "Outfit", "sans-serif"],
                serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-emerald": "linear-gradient(135deg, #064E3B 0%, #047857 50%, #10B981 100%)",
            },
            boxShadow: {
                "emerald-glow": "0 0 40px rgba(6, 78, 59, 0.3)",
                "card": "0 4px 20px rgba(0, 0, 0, 0.08)",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out",
                "slide-up": "slideUp 0.6s ease-out",
                "float": "float 3s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
