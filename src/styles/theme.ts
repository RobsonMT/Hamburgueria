// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      0: "#F5F5F5",
      50: "#F2F2F2",
      100: "#E0E0E0",
      300: "#999999",
      400: "#828282",
      600: "#333333",
    },
    red: "#E60000",
    yellow: "#FFCD07",
    green: {
      100: "rgba(39, 174, 96, 0.1)",
      500: "#168821",
    },
    blue: "#155BCB",
  },
  fonts: {
    heading: "'Inter', san-serif",
    body: "'Inter', san-serif",
  },
  fontSizes: {
    xs: ".75rem",
    sm: ".875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.600",
      },
    },
  },
});
