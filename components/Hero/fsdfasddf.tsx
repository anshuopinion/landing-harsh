import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { FC } from "react";
import heroImage from "assets/images/hero.png";
import Image from "next/image";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <>
      <Flex
        mt="-40px"
        h={{
          base: "250px",
          sm: "350px",
          md: "450px",
          lg: "500px",
          xl: "650px",
        }}
      >
        <Image
          src={heroImage}
          alt="hero-image"
          //   objectFit="cover"
          //   objectPosition="100% 100%"
          //   width="1200"
          //   height="650"
        />
      </Flex>
      <Heading
        position="relative"
        // top="-150px"
        top={["-80px", "-100px", "-120px"]}
        left="0"
        color="white"
        mb={["-40px", "-60px", "-80px"]}
        fontSize={["xl", "2xl", "3xl"]}
      >
        WORLD CLASS MEDICAL <br /> DIAGNOSIS FOR{" "}
        <Heading color="yellow.400" as="span" fontSize={["3xl", "4xl", "5xl"]}>
          HUMAN
        </Heading>
      </Heading>
    </>
  );
};
export default Hero;
