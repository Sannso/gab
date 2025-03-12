/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'BebasKai': ['BebasKai', 'sans-serif'],
        'LexendMega': ['LexendMega', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 11s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-84.5%)" },
        },
      },
    },
  },
  plugins: [],
}
