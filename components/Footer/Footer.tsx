import { Box, Container } from "@chakra-ui/layout";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <Box>
      <Container maxW="1300px"></Container>
    </Box>
  );
};
export default Footer;
