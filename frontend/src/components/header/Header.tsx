import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { FC } from "react";
import { AuthButtons } from "../authentication/SignInOrOut";
import NavBar from "./NavBar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Flex bg="green" width={"100%"} justifyContent={"space-between"} p={8}>
      <Logo />

      <NavBar />

      <Box display={{ base: "none", md: "flex" }}>
        <AuthButtons />
      </Box>
    </Flex>
  );
};
