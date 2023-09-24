import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import { FC } from "react";
import { AuthButtons } from "../authentication/SignInOrOut";
import NavBar from "./NavBar";
import { themeGrey } from "../../theme/theme";

interface HeaderProps {}






export const Header: FC<HeaderProps> = () => {
  const bg = useColorModeValue('white', themeGrey)
  return (
    <Flex bgColor={bg} width={"100%"} justifyContent={"space-between"} p={4}>
      <Logo />

      <NavBar />

      <Box display={{ base: "none", md: "flex" }}>
        <AuthButtons />
      </Box>
    </Flex>
  );
};
