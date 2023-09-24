import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import { FC } from "react";
import { AuthButtons } from "../authentication/SignInOrOut";
import NavBar from "./NavBar";

interface HeaderProps {}






export const Header: FC<HeaderProps> = () => {
  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')
  return (
    <Flex color={color} bgColor={bg} width={"100%"} justifyContent={"space-between"} p={4}>
      <Logo />

      <NavBar />

      <Box display={{ base: "none", md: "flex" }}>
        <AuthButtons />
      </Box>
    </Flex>
  );
};
