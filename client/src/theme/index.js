// Import necessary functions from Chakra UI
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "gray.800")(props),
      color: mode("gray.800", "white")(props),
    },
  }),
};

const colors = {
  brand: {
    50: "#e9f5ff",
    100: "#cfe3ff",
    200: "#99c2ff",
    300: "#66a1ff",
    400: "#3380ff",
    500: "#0060e6",
    600: "#004bb4",
    700: "#003682",
    800: "#002050",
    900: "#000b26",
  },
};

// Extend the theme
const theme = extendTheme({
  config,
  styles,
  colors,
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "xl",
      },
      variants: {
        solid: (props) => ({
          bg: mode("brand.500", "brand.400")(props),
          color: "white",
          _hover: {
            bg: mode("brand.600", "brand.500")(props),
          },
        }),
      },
    },
  },
});

export default theme;
