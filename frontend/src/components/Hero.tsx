import { Button, Flex, Text, Heading, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import logo from "../assets/logo-white-blue-round.png";

interface HeroProps {
  headline: string;
  content: string;
  buttonLabel: string;
  buttonUrl: string;
}

const Hero: FC<HeroProps> = ({ headline, content, buttonLabel, buttonUrl }) => {
	return (
		<Flex mt={30}  mb={20} flexDirection="column" justifyContent="center" alignItems="center" w="90%" ml="auto" mr="auto">

			<Stack mt={20} mb={6} direction={["column", "row"]} spacing={4} alignItems="center">
			<Image height="150px" width="150px" src={logo}/>
					<Heading
						fontSize="clamp(2rem, -0.875rem + 8.333vw, 4.5rem)"
						textAlign="center" justifyContent="center"
					>
					{headline}
					</Heading>
					
			</Stack>

			<Text
				textAlign="center"
				fontSize="clamp(1rem, -0.875rem + 8.333vw, 1.15rem)"
				pb={4}
			>
				{content}
			</Text>

			<Button size="lg" width="3xs">
				{buttonLabel}
			</Button>

		</Flex>
	);
};

export default Hero;
