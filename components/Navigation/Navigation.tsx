import { Container, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Heading, Text } from "@chakra-ui/layout";

interface NavigationProps {}

const Navigation: FC<NavigationProps> = ({}) => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Investor", link: "#investor" },
    { name: "Product", link: "#product" },
  ];

  return (
    <Container maxW="1300p" zIndex={50} position="sticky" top="0" color="white">
      <Flex justify="space-between">
        <Flex>
          <Heading fontSize="2xl">Logo</Heading>
        </Flex>
        <Flex>
          {navItems.map((item) => (
            <NavItem link={item.link} name={item.name} key={item.name} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
export default Navigation;

const NavItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <Flex
      ml="2"
      _hover={{ borderBottom: "2px solid", borderColor: "brand.300" }}
    >
      <Text fontSize="lg" fontWeight="bold">
        {name}
      </Text>
    </Flex>
  );
};
