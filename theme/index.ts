import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      300: "#F8EDC6",
      400: "#FAE69E",
      500: "#E0CA7C",
      600: "#DFAE00",
    },
  },
  styles: {
    global: (props: any) => ({
      "html, body": {},
    }),
  },
});

export default theme;
