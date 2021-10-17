import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "components/Navigation/Navigation";
import theme from "theme";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Navigation /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
