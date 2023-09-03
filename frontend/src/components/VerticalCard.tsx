import { QuestionIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Flex,
	Text,
	Card,
	CardBody,
	CardFooter,
	Link,
	Heading,
	CardHeader
} from "@chakra-ui/react";
import { FC } from "react";

interface VerticalCardProps {
	headline: string;
	content: string;
	linkLabel: string;
	url: string;
}

const VerticalCard: FC<VerticalCardProps> = ({
	headline,
	content,
	linkLabel,
	url
}: VerticalCardProps) => {
	return (
		<Card flexDirection="column">
			{/* <CardHeader> */}
				{/* <QuestionIcon /> */}
			{/* </CardHeader> */}
			<CardBody mb={0}>
				<Flex flexDirection="column" rowGap={2}>
					<Text fontStyle="italic" fontWeight="medium" fontSize={{ base: 'xl', md: '2xl' }}><ArrowForwardIcon mt="-6px" style={{ stroke: "#0060DF", strokeWidth: "2px" }}/> {headline}</Text>
					<Text fontSize={{ base: 'lg', md: 'xl'}}>{content}</Text>
				</Flex>
			</CardBody>
			<CardFooter fontSize={{ base: '1rem', md: 'xl' }} mt={0} pt={0}>
				<Link mt={0} href={url} textDecoration="underline">
					{linkLabel}
				</Link>
			</CardFooter>
		</Card>
	);
};

export default VerticalCard;
