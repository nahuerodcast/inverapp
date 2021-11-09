import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    900: "red",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  config,
  colors,
});

export default theme;
