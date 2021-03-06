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

      {aboutItems.map((item, index) => (
        <AboutItem key={index} item={item} />
      ))}

      <Product />
      <Investor />

      <Contact />
      <Footer />
    </>
  );
}
