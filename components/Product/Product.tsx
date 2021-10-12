import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Heading,
  HStack,
  //   HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { FC } from "react";

interface ProductProps {}

const Product: FC<ProductProps> = ({}) => {
  const productImages = [
    { url: "/images/pThumb1.png", alt: "thumb1" },
    { url: "/images/pThumb2.png", alt: "thumb2" },
    { url: "/images/pThumb3.png", alt: "thumb3" },
  ];
  return (
    <Box bg="brand.600" py="12">
      <Container maxW="800px" justifyContent="space-between" display="flex">
        <VStack align="flex-start" spacing="8">
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
          <HStack spacing="6">
            {productImages.map((image) => (
              <Image
                src={image.url}
                alt={image.alt}
                key={image.url}
                height="60px"
              />
            ))}
          </HStack>
        </VStack>
        <Image src="/images/product1.png" alt="product" h="400px" />
      </Container>
    </Box>
  );
};
export default Product;
