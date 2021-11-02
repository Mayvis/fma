import { defineConfig } from "windicss/helpers";

// https://windicss.org/integrations/vite.html
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans TC", "Helvetica", "Arial", "sans-serif"],
        podkova: [
          "Podkova",
          "Noto Sans TC",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
});
