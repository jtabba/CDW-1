import { Flex, Image, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white-blue-round.png";
import "@fontsource/bree-serif";

const Logo = () => {
  return (
    <Flex className="logo" alignItems={"center"}>
      <Link to={"/"}>MentorShip</Link>
    </Flex>
  );
};

export default Logo;
