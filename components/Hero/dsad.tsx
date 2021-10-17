import { FC, useRef } from "react";
import {
  Container,
  Box,
  Image,
  Stack,
  Flex,
  VStack,
  Text,
  Heading,
  ImageProps,
  HeadingProps,
  BoxProps,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useOnView from "react-useonview";
interface HeroProps {}

const MotionImage = motion<ImageProps>(Image);
const MotionHeading = motion<HeadingProps>(Heading);
const MotionBox = motion<BoxProps>(Box);

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: (i: number) => ({
    opacity: 1,

    transition: {
      delay: i * 0.2,
    },
  }),

  hidden: {
    opacity: 0,
    scale: 1,
    // x: -100
  },
};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <Container maxW="1300px">
        <Flex justify="center">
          <Stack as={motion.div}>
            <Box>
              <MotionImage
                transition={
                  {
                    duration: 1,
                  } as any
                }
                initial={{
                  opacity: 0,
                  translateY: "-100vh",
                  scale: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  scale: 1,
                  height: "auto",
                }}
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
            <Box>
              <MotionImage
                transition={
                  {
                    duration: 1,
                  } as any
                }
                initial={{
                  scale: 0,
                  translateY: "100vh",
                }}
                animate={{
                  scale: 1,
                  translateY: 0,
                  zIndex: 8,
                }}
                src="/images/hero.png"
                alt="doctor"
                height={400}
                position="relative"
              />
            </Box>
          </Stack>
          <Stack align="flex-start" justify="end" mb="150px">
            <MotionHeading
              fontSize="5xl"
              variants={list}
              initial="hidden"
              animate="visible"
            >
              {"AUTOMATE".split("").map((value, i) => (
                <MotionBox
                  variants={item}
                  as="span"
                  key={i}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {value}
                </MotionBox>
              ))}
            </MotionHeading>
            <VStack align="flex-start">
              <Heading fontSize="2xl">Diagnosis, For Faster Results</Heading>
              <Text>
                Bringing Artificial Inteligence Inside Medical World .
              </Text>
            </VStack>
          </Stack>
        </Flex>
      </Container>
      <Stack spacing={0}>
        <Box
          bg="brand.500"
          height={20}
          position="relative"
          top="-100px"
          mb="-100px"
        />
        <Box bg="brand.600" height={20} position="relative" zIndex={20} />
      </Stack>
    </>
  );
};
export default Hero;
