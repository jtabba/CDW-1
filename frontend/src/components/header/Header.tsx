import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { FC } from "react";
import { AuthButtons } from "../authentication/SignInOrOut";
import NavBar from "./NavBar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Flex
      justifyContent="space-between"
      position={"absolute"}
      top={0}
      left={0}
      width={"100dvw"}
      padding={8}
    >
      <Logo />

      <NavBar />

      <Box display={{ base: "none", md: "flex" }}>
        <AuthButtons />
      </Box>
    </Flex>
  );
};
