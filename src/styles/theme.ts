import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    green: {
      100: "#00B37E",
      400: "#00875F",
      800: "#015F43",
    },
    blue: {
      100: "#81D8F7",
    },
    orange: {
      100: "#FBA94C",
    },
    red: {
      100: "#F75A68",
    },
    gray: {
      100: "#323238",
      500: "#121214",
      900: "#09090A",
    },
  },
  fonts: {
    body: '"Roboto", sans-serif',
    regular: {
      weigth: 400,
    },
    medium: {
      weight: 500,
    },
    bold: {
      weight: 700,
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
      }
    }
  }
});
