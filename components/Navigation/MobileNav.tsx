import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Stack,
  Flex,
  Text,
  Icon,
  Collapse,
  IconButton,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
interface MobileNavProps {
  NAV_ITEMS: any;
}
import Link from "next/link";
import { SiChevrolet } from "react-icons/si";
const MobileNav: FC<MobileNavProps> = ({ NAV_ITEMS }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        bg="brand.600"
        position="sticky"
        zIndex={50}
        top="0"
        display={{ base: "flex", md: "none" }}
      >
        <IconButton
          colorScheme="brand"
          onClick={onToggle}
          icon={
            isOpen ? (
              <AiOutlineClose color="white" />
            ) : (
              <GiHamburgerMenu color="white" />
            )
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />

        <Collapse in={isOpen} animateOpacity>
          <Stack p={4} display={{ lg: "none" }}>
            {NAV_ITEMS.map((navItem: any) => (
              <MobileNavItem
                key={navItem.label}
                {...navItem}
                onClose={onClose}
              />
            ))}
          </Stack>
        </Collapse>
      </Flex>
    </>
  );
};
export default MobileNav;

const MobileNavItem = ({ label, children, href, onClose }: any) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        onClick={onClose}
        as={Link}
        href={href}
        passHref
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
