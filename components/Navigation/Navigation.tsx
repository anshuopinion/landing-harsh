import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import MobileNav from "./MobileNav";
import DeskNav from "./DeskNav";
import { FaHamburger, FaCross } from "react-icons/fa";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Product", href: "/#product" },
  { label: "Investor", href: "/#investor" },
  { label: "Contact", href: "/#contact" },
];
export default function Navigation() {
  return (
    <>
      <DeskNav NAV_ITEMS={NAV_ITEMS} />
      <MobileNav NAV_ITEMS={NAV_ITEMS} />
    </>
  );
}
