import { Button, Flex, Text, Heading, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import logo from "../assets/logo-white-blue-round.png";
import theme from "../theme/theme";

interface HeroProps {
	heroHeadline: string;
	heroContent: string;
	heroLinkLabel: string;
	heroUrl: string;
}

const Hero: FC<HeroProps> = ({ heroHeadline, heroContent, heroLinkLabel, heroUrl }) => {
	return (
		<Flex mt={-2} bgColor={theme.colors.primary.darkBlue} color="white" pt={30}  pb={20} flexDirection="column" justifyContent="center" alignItems="center" w="100%">

			<Stack mt={20} mb={6} direction={["column", "row"]} spacing={4} alignItems="center">
			<Image height="150px" width="150px" src={logo}/>
					<Heading
						fontSize="clamp(2rem, -0.875rem + 8.333vw, 4.5rem)"
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

			<Button size="lg" width="3xs">
				{heroLinkLabel}
			</Button>

		</Flex>
	);
};

export default Hero;
