import {
  extendTheme,
  theme as baseTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#fcfbf0",
        100: "#fcf9e8",
        200: "#fff8de",
        300: "#F8EDC6",
        400: "#FAE69E",
        500: "#E0CA7C",
        600: "#DFAE00",
        700: "#c9a100",
        800: "#6b5600",
      },
    },
    components: {
      ...baseTheme.components,
      // custom components go here

      Input: {
        variants: {
          filled: {
            field: {
              bg: "brand.200",
              _hover: {
                bg: "brand.300",
              },
              _focus: {
                borderColor: "brand.600",
              },
            },
          },
        },
      },
    },

    styles: {
      global: (props: any) => ({
        "html, body": { scrollBehavior: "smooth" },
      }),
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Button", "Input", "Textarea"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
