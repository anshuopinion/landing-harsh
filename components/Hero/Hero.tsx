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
import { motion } from "framer-motion";
import {
  AttentionSeeker,
  Fade,
  Hinge,
  Slide,
  Zoom,
} from "react-awesome-reveal";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <Container maxW="1300px" id="home">
        <Flex justify="center">
          <Stack as={motion.div}>
            <AttentionSeeker effect="jello">
              <Box>
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
              </Box>
            </AttentionSeeker>
            {/* <MainImageSlide  direction="left" delay={2}> */}
            <Box as={Slide} triggerOnce direction="up" zIndex="8">
              <Image
                // zIndex={8}
                src="/images/hero.png"
                alt="doctor"
                height={400}
                position="relative"
              />
            </Box>
            {/* </MainImageSlide> */}
          </Stack>
          <Stack align="flex-start" justify="end" mb="150px">
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
        <Slide direction="right">
          <Box
            bg="brand.500"
            height={20}
            position="relative"
            top="-100px"
            mb="-100px"
          />
        </Slide>
        <Slide direction="left">
          <Box
            // as={Slide}
            bg="brand.600"
            height={20}
            position="relative"
            zIndex={20}
            top="-20px"
            mb="-20px"
          />
        </Slide>
      </Stack>
    </>
  );
};
export default Hero;
