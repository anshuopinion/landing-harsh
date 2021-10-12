import { Image } from "@chakra-ui/image";
import { Container, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { FC } from "react";

interface AboutItemProps {
  item: {
    image: {
      url: string;
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
  item: { isLeft, image, heading, text1, text2, color },
}) => {
  return (
    <Container maxW="1300px" bg={color} py="12">
      <Flex
        justify="center"
        direction={isLeft ? "row" : "row-reverse"}
        // align={isLeft ? "flex-start" : "flex-end"}
      >
        <Image
          src={image.url}
          alt={image.alt}
          height="400px"
          //   width="420px"
        />
        <VStack
          align="flex-start"
          spacing="8"
          color="black"
          maxW="50%"
          ml={isLeft ? "12" : "0"}
          mr={isLeft ? "0" : "12"}
        >
          <Heading color="yellow.400">{heading}</Heading>
          <Text fontSize="sm">{text1}</Text>
          <Text fontSize="sm">{text2}</Text>
        </VStack>
      </Flex>
    </Container>
  );
};
export default AboutItem;
