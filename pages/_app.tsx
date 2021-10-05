import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Navigation from "components/Navigation/Navigation";
function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <ChakraProvider>
      <Navigation />
      <Container maxW="container.lg">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
