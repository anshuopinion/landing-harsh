import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { FC } from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

interface ProductProps {}

const Product: FC<ProductProps> = ({}) => {
  const productImages = [
    { url: "/images/pThumb1.png", alt: "thumb1" },
    { url: "/images/pThumb2.png", alt: "thumb2" },
    { url: "/images/pThumb3.png", alt: "thumb3" },
  ];
  return (
    <Box bg="brand.600" p={{ base: "0", md: "12" }} id="product">
      <Container
        maxW="1000px"
        justifyContent="space-between"
        display="flex"
        p="4"
        flexDirection={{ base: "column", sm: "row" }}
      >
        <VStack
          align="flex-start"
          justify="center"
          spacing="8"
          mb={{ base: 8, md: 0 }}
        >
          <Fade direction="up" cascade duration={500}>
            <Heading fontSize="4xl">Product</Heading>
            <VStack align="flex-start" spacing="4">
              <Heading fontSize="2xl">Product Benifts</Heading>
              <Text lineHeight="1.5">
                Derspiciatis unde omnis <br /> iste natus error sit voluptatem
                accusantiu.
              </Text>
            </VStack>
            <VStack align="flex-start" spacing="4">
              <Heading fontSize="2xl">Product Benifts</Heading>
              <Text lineHeight="1.5">
                Derspiciatis unde omnis iste <br /> natus error sit voluptatem
                accusantiu.
              </Text>
            </VStack>
            <HStack spacing="6" overflow="hidden">
              <Slide direction="right" cascade duration={500}>
                {productImages.map((image) => (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    key={image.url}
                    height="60px"
                  />
                ))}
              </Slide>
            </HStack>
          </Fade>
        </VStack>
        <Flex as={Zoom} bg="red">
          <Image
            src="/images/product1.png"
            objectFit="cover"
            objectPosition="center"
            alt="product"
            maxH={{ base: "auto", md: "500px" }}
          />
        </Flex>
      </Container>
    </Box>
  );
};
export default Product;
