// Import necessary functions from Chakra UI
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Define custom configurations
const config = {
  initialColorMode: "light", // Set the initial color mode to 'light' or 'dark'
  useSystemColorMode: false, // Set to true to use the system's color mode
};

// Define custom styles
const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "gray.800")(props),
      color: mode("gray.800", "white")(props),
    },
  }),
};

// Define custom colors if needed
const colors = {
  brand: {
    50: "#e9f5ff",
    100: "#cfe3ff",
    200: "#99c2ff",
    300: "#66a1ff",
    400: "#3380ff",
    500: "#0060e6", // Primary brand color
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
    // Customize Chakra UI components here if needed
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
