import { Flex, Image, Box, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-white.png";
import '@fontsource/bree-serif';
// import './Logo.css';



const Logo = () => {
	return (
		<Flex>
			<Box className="logo" display="flex" alignItems="center" justifyContent="flex-start" pr={10} w="100%">			
				<Image mr="15px" objectFit="cover" boxSize="38px" src={logo} />
				<Heading><Link to={"home"}>MentorShip</Link></Heading>
			</Box>
		</Flex>
	);
};

export default Logo;
