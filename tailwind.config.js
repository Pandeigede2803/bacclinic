/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        "la-belle": ['"La Belle Aurore"', "cursive"],
        // Here we add Tenor Sans to the primary fontFamily
        primary: ["Tenor Sans",],
        secondary: ["Telex"]
      },
      colors: {
        primary: "#F2EBE1",
        secondary: "#866342",
        accent: "#E8E0D3",
        accent2: "#e0f1d9",
        background: "#FDF6F7",
        abu: "#7B7B7B",
        biruabu:"#A7B9BE",

      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
