import { FC } from "react";
import {
  Container,
  Box,
  Image,
  Stack,
  Flex,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <Container maxW="1300px">
        <Flex justify="center">
          <Stack>
            <Image
              src="/images/heroBack.png"
              alt="doctor"
              height={400}
              width={400}
              position="relative"
              top={410}
              left={10}
              zIndex={4}
              mt={-410}
            />
            <Image
              zIndex={9}
              src="/images/hero.png"
              alt="doctor"
              height={400}
              position="relative"
            />
          </Stack>
          <Stack align="flex-start" justify="end" mb="150px">
            <Heading fontSize="5xl">AUTOMATE</Heading>
            <VStack align="flex-start">
              <Heading fontSize="2xl">Diagnosis, For Faster Results</Heading>
              <Text>
                Bringing Artificial Inteligence Inside Medical World .
              </Text>
            </VStack>
          </Stack>
        </Flex>
      </Container>
      <Stack
        spacing={0}
        position="relative"
        top="-100px"
        mb="-100px"
        zIndex={5}
      >
        <Box bg="brand.500" height={20} />
        <Box bg="brand.600" height={20} />
      </Stack>
    </>
  );
};
export default Hero;
