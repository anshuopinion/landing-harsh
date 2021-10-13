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
} from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
interface HeroProps {}

const MotionImage = motion<ImageProps>(Image);

const Hero: FC<HeroProps> = ({}) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  console.log(scale);
  const constraintsRef = useRef(null);
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
                // scaleY={scrollYProgress}
                // style={{ scaleY: scrollYProgress }}
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
                drag
                src="/images/hero.png"
                alt="doctor"
                height={400}
                position="relative"
              />
            </Box>
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
