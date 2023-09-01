import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { FC } from "react";
import { AuthButtons } from "../authentication/SignInOrOut";
import NavBar from "./NavBar";
import { headerStyle } from "./style";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Flex style={headerStyle}>
      <Logo />

      <NavBar />

      <Box display={{ base: "none", md: "flex" }}>
        <AuthButtons />
      </Box>
    </Flex>
  );
};
