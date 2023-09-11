import { Flex, Image, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white-blue-round.png";
import "@fontsource/bree-serif";

const Logo = () => {
  return (
    <Flex>
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
          <Link to={"/"}>MentorShip</Link>
        </Heading>
      </Box>
    </Flex>
  );
};

export default Logo;
