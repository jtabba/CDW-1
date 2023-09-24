import { Flex, Image, Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white-blue-round.png";
import "@fontsource/bree-serif";
import {themeBlue, themePurple} from "../../theme/theme";

const Logo = () => {
  const color = useColorModeValue(themeBlue, 'white')
  return (
    <Flex color={color}>
      <Box
        className="logo"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        pr={10}
        w="100%"
      >
        <Image mr="15px" objectFit="cover" boxSize="50px" src={logo} />
        <Heading>
          <Link  to={"/"}>MentorShip</Link>
        </Heading>
      </Box>
    </Flex>
  );
};

export default Logo;
