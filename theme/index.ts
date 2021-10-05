import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  color: {},
  styles: {
    global: (props: any) => ({
      "html, body": { bg: "#141414" },
    }),
  },
});

export default theme;
