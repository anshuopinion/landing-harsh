import { Container, Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Heading, Text } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
interface DeskNavProps {
  NAV_ITEMS: any;
}

const DeskNav: FC<DeskNavProps> = ({ NAV_ITEMS }) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 80);
      });
    } else {
      setScroll(true);
    }
  }, [setScroll, router]);

  return (
    <Container
      display={{ base: "none", md: "block" }}
      maxW="1300p"
      zIndex={50}
      position="sticky"
      top="0"
      color={scroll ? "white" : "black"}
      transition="all 0.5s ease-in-out"
      p="2"
      bg={scroll ? "brand.800" : "transparent"}
    >
      <Flex justify="space-between">
        <Flex>
          <Heading fontSize="2xl">Logo</Heading>
        </Flex>
        <Flex overflow="hidden">
          <Fade cascade direction="top-right" duration={300}>
            {NAV_ITEMS.map((item: any) => (
              <NavItem
                scroll={scroll}
                link={item.href}
                name={item.label}
                key={item.label}
              />
            ))}
          </Fade>
        </Flex>
      </Flex>
    </Container>
  );
};
export default DeskNav;

const NavItem = ({
  name,
  link,
  scroll,
}: {
  name: string;
  link: string;
  scroll: boolean;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsActive(router.asPath === link);
  }, [setIsActive, router, link]);
  return (
    <Link href={link} passHref>
      <Flex
        ml="2"
        borderBottom={isActive ? "2px solid white" : "none"}
        borderColor={isActive ? "white" : "transparent"}
        _hover={{ borderBottom: "2px solid", borderColor: "brand.400" }}
      >
        <Text
          textTransform="uppercase"
          fontSize="md"
          color={!scroll ? "black" : isActive ? "brand.600" : "white"}
          _hover={{ color: "brand.600" }}
          fontWeight="semibold"
        >
          {name}
        </Text>
      </Flex>
    </Link>
  );
};
