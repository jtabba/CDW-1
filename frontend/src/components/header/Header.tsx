import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { FC } from "react";
import { AuthButtons } from "../authentication/SignInOrOut";
import NavBar from "./NavBar";
import theme from "../../theme/theme";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Flex color="white" bg={theme.colors.primary.darkGrey} width={"100%"} justifyContent={"space-between"} p={4}>
      <Logo />

      <NavBar />

      <Box display={{ base: "none", md: "flex" }}>
        <AuthButtons />
      </Box>
    </Flex>
  );
};
