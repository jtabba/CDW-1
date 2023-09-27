import { Box, Flex } from "@chakra-ui/react";

import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export default function NavBar() {
  return (
    <Box display={"flex"}>
      <Flex display={{ base: "none", md: "flex" }} alignItems={"center"}>
        <DesktopNav />
      </Flex>

      <Box  display={{ base: "flex", md: "none" }}>
        <MobileNav />
      </Box>
    </Box>
  );
}
