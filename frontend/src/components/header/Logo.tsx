import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Flex className="logo">
      <Link to={"home"}>MentorShip</Link>
    </Flex>
  );
};

export default Logo;
