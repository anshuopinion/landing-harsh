import { Box, Flex } from "@chakra-ui/layout";
import AboutItem from "components/AboutItem/AboutItem";
import Hero from "components/Hero/Hero";
import Investor from "components/Investor/Investor";
import Product from "components/Product/Product";
import { aboutItems } from "constant/about";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Box id="about">
        {aboutItems.map((item, index) => (
          <AboutItem key={index} item={item} />
        ))}
      </Box>
      <Product />
      <Investor />

      <Contact />
      {/* <Footer /> */}
    </>
  );
}
