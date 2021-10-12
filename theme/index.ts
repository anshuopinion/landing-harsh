import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  color: {},
  styles: {
    global: (props: any) => ({
      "html, body": {},
    }),
  },
});

export default theme;
