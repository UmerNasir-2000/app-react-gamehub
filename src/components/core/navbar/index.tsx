import { HStack, Image } from "@chakra-ui/react";
import logo from "../../../assets/logo.webp";
import ColorModeSwitch from "../colorModeSwitch";

const Navbar = () => {
  return (
    <HStack as='nav' justifyContent='space-between' paddingX={4} paddingY={1}>
      <Image src={logo} alt='logo' boxSize={16} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
