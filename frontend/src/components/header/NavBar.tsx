import { Box, Flex } from "@chakra-ui/react";

import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

export default function NavBar() {
  return (
    <Box>
      <Flex display={{ base: "none", md: "flex" }}>
        <DesktopNav />
      </Flex>

      <Box display={{ base: "flex", md: "none" }}>
        <MobileNav />
      </Box>
    </Box>
  );
}
