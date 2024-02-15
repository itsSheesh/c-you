import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/assets/hero.svg')",
      },
      gap: {
        "2xs": "8px",
        "xs": "16px",
        "md": "24px",
        "lg": "32px",
        "xl": "48px",
        "2xl": "64px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "white": "#fff",
        "main": "#27374D",
        "supplement": "#4D3D27",
        "black": "#070707",
        "main-1": "#9DB2BF",
        "main-2": "#DDE6ED",
        "main-3": "#1A2533",
        "main-4": "#526D82",
        "supplement-1": "#A48253",
        "supplement-2": "#E2D5C5",
        "supplement-3": "#1A140D",
        "supplement-4": "#443623",
        "other-1": "#CBCBCB",
        "other-2": "#F9F9F9",
        "other-3": "#757575",
        "other-4": "#EDEDED",
      },
    },
  },
  plugins: [],
};
export default config;
