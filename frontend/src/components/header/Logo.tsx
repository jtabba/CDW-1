import { Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png";



const Logo = () => {
	return (
		<Flex className="logo" >
			<Box display="flex" alignItems="center" justifyContent="center" border="1px" boxSize="" p={10} w="100%">			
				<Image objectFit="cover" boxSize="75px" src={logo} />
				<Link to={"home"}>MentorShip</Link>
			</Box>
			{/* <img src={logo} alt="logo" /> */}
			{/* <Link to={"home"}>MentorShip</Link> */}
		</Flex>
	);
};

export default Logo;
