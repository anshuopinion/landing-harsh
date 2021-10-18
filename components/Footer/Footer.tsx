import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { FC } from "react";
import { SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <Box bg="brand.800">
      <Container maxW="1300px">
        <Flex
          justify="space-between"
          p={{ base: 2, md: 8 }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Stack my={{ base: 4, md: 0 }} color="white" maxW="400px" spacing={4}>
            <Heading as="h3" size="md">
              Company Name
            </Heading>
            <Text fontSize="xs">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              praesentium ex excepturi eaque illo! Distinctio harum, aliquid
              dolorem ab dolores ex, cupiditate odit inventore id nostrum
              consectetur, vitae cum expedita?
            </Text>
            <Text>Copyright 2021 Company Name</Text>
          </Stack>
          <Stack my={{ base: 4, md: 0 }} color="white" maxW="300px" spacing={4}>
            <Heading as="h3" size="md">
              Want to connect?
            </Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            </Text>
            <Flex maxW="80px" justify="space-between">
              <SiTwitter />
              <SiInstagram />
              <SiLinkedin />
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
export default Footer;
