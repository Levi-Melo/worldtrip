import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    gray: {
      "900": "#181b23",
      "800": "#1f2029",
      "700": "#353646",
      "600": "#47585B",
      "500": "#999999",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#DADADA",
      "100": "#d1d2dc",
      "50": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
      "300": "rgba(255, 186, 8,0.5)",
    },
  },
  font: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
    },
  },
});
