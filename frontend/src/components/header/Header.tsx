import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { FC } from "react";
import { AuthButtons } from "../authentication/SignInOrOut";
import NavBar from "./NavBar";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      h="60px"
      outline={1}
      position={"absolute"}
      top={0}
      left={0}
      w={"100dvw"}
      px={8}
    >
      <Logo />

      <NavBar />

      <AuthButtons />
    </Flex>
  );
};
