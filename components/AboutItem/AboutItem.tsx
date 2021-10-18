import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";
import { Fade, Reveal, Zoom } from "react-awesome-reveal";
interface AboutItemProps {
  item: {
    id: string;
    image: {
      url: string;
      url2: string;
      alt: string;
    };
    color: string;
    heading: string;
    isLeft: boolean;
    text1: string;
    text2: string;
  };
}

const AboutItem: FC<AboutItemProps> = ({
  item: { isLeft, image, heading, text1, text2, color, id },
}) => {
  return (
    <Box bg={color} id={id} py="4">
      <Container maxW="1300px" py="12">
        <Flex
          justify="center"
          direction={{
            base: "column",
            sm: isLeft ? "row" : "row-reverse",
          }}
          // align={isLeft ? "flex-start" : "flex-end"}
          overflow="hidden"
        >
          <Box as={Fade} display={{ base: "block", sm: "none" }}>
            <Image src={image.url2} alt={image.alt} />
          </Box>
          <Box
            display={{ base: "none", sm: "block" }}
            as={Zoom}
            direction={isLeft ? "left" : "right"}
          >
            <Image
              src={image.url}
              alt={image.alt}
              height="400px"
              //   width="420px"
            />
          </Box>
          <VStack
            position={{ base: "relative", sm: "static" }}
            bottom="280px"
            mb="-280px"
            bg={{ base: "rgba(125, 94, 36,0.7)", sm: "transparent" }}
            align="flex-start"
            spacing="8"
            color={{ base: "whiteAlpha.900", sm: "black" }}
            maxW={{ base: "100%", sm: "50%" }}
            ml={{ base: 0, md: isLeft ? "12" : "0" }}
            mr={{ base: 0, md: isLeft ? "0" : "12" }}
            p={{ base: 4, sm: 0 }}
          >
            <Fade direction={!isLeft ? "left" : "right"}>
              <Heading
                textTransform="uppercase"
                color={{ base: "whiteAlpha.900", sm: "black" }}
              >
                {heading}
              </Heading>
              <Text fontSize="sm" textAlign="justify">
                {text1}
              </Text>
              <Text
                display={{ base: "none", sm: "block" }}
                fontSize="sm"
                textAlign="justify"
              >
                {text2}
              </Text>
            </Fade>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};
export default AboutItem;
