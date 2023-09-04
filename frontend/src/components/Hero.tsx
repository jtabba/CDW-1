import { Button, Flex, Text, Heading, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import logo from "../assets/logo-white-blue-round.png";

interface HeroProps {
	HERO_HEADLINE: string;
	HERO_CONTENT: string;
	HERO_LINK_LABEL: string;
	HERO_URL: string;
}

const Hero: FC<HeroProps> = ({ HERO_HEADLINE, HERO_CONTENT, HERO_LINK_LABEL, HERO_URL }) => {
	return (
		<Flex mt={30}  mb={20} flexDirection="column" justifyContent="center" alignItems="center" w="90%" ml="auto" mr="auto">

			<Stack mt={20} mb={6} direction={["column", "row"]} spacing={4} alignItems="center">
			<Image height="150px" width="150px" src={logo}/>
					<Heading
						fontSize="clamp(2rem, -0.875rem + 8.333vw, 4.5rem)"
						textAlign="center" justifyContent="center"
					>
					{HERO_HEADLINE}
					</Heading>
					
			</Stack>

			<Text
				textAlign="center"
				fontSize="clamp(1.6rem, -0.875rem + 8.333vw, 1.15rem)"
				pb={4}
			>
				{HERO_CONTENT}
			</Text>

			<Button size="lg" width="3xs">
				{HERO_LINK_LABEL}
			</Button>

		</Flex>
	);
};

export default Hero;
