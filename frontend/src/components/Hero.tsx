import { Button, Flex, Text, Heading, Image, Stack, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import logo from "../assets/logo-white-blue-round.png";
import { themeBlue, themeDarkGrey, themePurple } from "../theme/theme";

interface HeroProps {
	heroHeadline: string;
	heroContent: string;
	heroLinkLabel: string;
	heroUrl: string;
}

const Hero: FC<HeroProps> = ({ heroHeadline, heroContent, heroLinkLabel, heroUrl }) => {
	const bg = useColorModeValue(themeBlue, themeDarkGrey)
	const buttonBg = useColorModeValue("#fff", themeBlue)
	const buttonColor = useColorModeValue(themeBlue, "fff")
	return (
		<Flex bg={bg} color="white" w="100%">
			<Flex maxWidth={{ base: '90%', md: '60%' }} pt={30} pb={20} flexDirection="column" justifyContent="center" alignItems="center" ml="auto" mr="auto">
				<Stack mt={20} mb={6} direction={["column", "row"]} spacing={4} alignItems="center" >
				{/* <Image height="150px" width="150px" src={logo}/> */}
						<Heading
							fontSize="clamp(3rem, -0.875rem + 8.333vw, 4.5rem)"
							textAlign="center" justifyContent="center"
						>
						{heroHeadline}
						</Heading>
						
				</Stack>

				<Text
					textAlign="center"
					fontSize="clamp(1.6rem, -0.875rem + 8.333vw, 1.15rem)"
					pb={4}
				>
					{heroContent}
				</Text>

				<Button bg={buttonBg} color={buttonColor} size="lg" width="3xs">
					{heroLinkLabel}
				</Button>
			</Flex>
		</Flex>
	);
};

export default Hero;
