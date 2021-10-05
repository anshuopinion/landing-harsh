import { Flex } from "@chakra-ui/layout";
import AboutItem from "components/AboutItem/AboutItem";
import Hero from "components/Hero/Hero";
import { aboutItems } from "constant/about";

export default function Home() {
  return (
    <>
      <Hero />
      {aboutItems.map((item, index) => (
        <AboutItem key={index} item={item} />
      ))}
    </>
  );
}
