/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "blur-text": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        "blur-text": "blur-text 800ms ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
