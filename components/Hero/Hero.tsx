import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import heroImage from "assets/images/hero.png";
import Image from "next/image";
interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
    <Flex mt="-40px">
      <Image src={heroImage} alt="hero-image" />
    </Flex>
  );
};
export default Hero;
