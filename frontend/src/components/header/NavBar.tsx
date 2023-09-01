import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { headerStyle } from "./style";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <AbsoluteCenter>
      <Box>
        <Flex
          // style={headerStyle}
          bg={useColorModeValue("inherit", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Box
          position={"absolute"}
          width={"100px"}
          transform={"translateX(-15%)"}
          boxShadow={"lg"}
          rounded={"md"}
        >
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      </Box>
    </AbsoluteCenter>
  );
}
