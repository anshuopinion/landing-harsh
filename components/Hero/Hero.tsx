import { FC, useRef, useState } from "react";
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
import { AttentionSeeker, Fade, Slide } from "react-awesome-reveal";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <Container maxW="1300px" id="home">
        <Flex
          justify="center"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack overflow="hidden">
            <AttentionSeeker effect="jello">
              <Box>
                <Image
                  src="/images/heroBack.png"
                  alt="doctor"
                  // height={{ base: "250px", md: "400px" }}
                  width={{ base: "250px", sm: "350px", md: "400px" }}
                  // width={400}
                  position="relative"
                  top={410}
                  left={{ base: 0, sm: 10, md: 10 }}
                  zIndex={4}
                  mt={-410}
                />
              </Box>
            </AttentionSeeker>
            {/* <MainImageSlide  direction="left" delay={2}> */}
            <Box as={Slide} triggerOnce direction="up" position="relative">
              <Image src="/images/hero.png" alt="doctor" maxHeight="400px" />
            </Box>
            {/* </MainImageSlide> */}
          </Stack>
          <Stack align="flex-start" justify="end" mb={{ base: 0, md: "150px" }}>
            {/* <Zoom damping={10} direction="down" duration={1500}> */}
            <AttentionSeeker effect="jello">
              <Heading fontSize="5xl">AUTOMATE</Heading>
            </AttentionSeeker>
            {/* </Zoom> */}

            <Fade direction="up" cascade duration={2000}>
              <VStack align="flex-start">
                <Heading fontSize="2xl">Diagnosis, For Faster Results</Heading>
                <Text>
                  Bringing Artificial Inteligence Inside Medical World .
                </Text>
              </VStack>
            </Fade>
          </Stack>
        </Flex>
      </Container>
      <Stack spacing={0}>
        <Box
          overflow="hidden"
          position="relative"
          top={{ base: "-55px", sm: "-16", md: "-100px" }}
          mb={{ base: "-55px", sm: "-16", md: "-100px" }}
          zIndex="-1"
        >
          <Slide direction="right">
            <Box bg="brand.500" height={{ base: 10, md: 20 }} />
          </Slide>
        </Box>
        <Box overflow="hidden" position="relative" zIndex={20}>
          <Slide direction="left">
            <Box bg="brand.600" height={{ base: 10, md: 20 }} />
          </Slide>
        </Box>
      </Stack>
    </>
  );
};
export default Hero;
