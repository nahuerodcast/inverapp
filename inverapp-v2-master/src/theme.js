import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  shades: {
    0: "#c8d479",
    10: "#b4bf6d",
    20: "#a0aa61",
    30: "#8c9455",
    40: "#787f49",
    50: "#646a3d",
    60: "#505530",
    70: "#3c4024",
    80: "#282a18",
    90: "#14150c",
    100: "#000000",
  },
  tints: {
    0: "#c8d479",
    10: "#ced886",
    20: "#d3dd94",
    30: "#d9e1a1",
    40: "#dee5af",
    50: "#e4eabc",
    60: "#e9eec9",
    70: "#eff2d7",
    80: "#f4f6e4",
    90: "#fafbf2",
    100: "#ffffff",
  },
};

const theme = extendTheme({
  config,
  colors,
});

export default theme;
