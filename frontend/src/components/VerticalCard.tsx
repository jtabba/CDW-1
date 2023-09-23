import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
	Flex,
	Text,
	Card,
	CardBody,
	CardFooter,
	Link
} from "@chakra-ui/react";
import { FC } from "react";
import { themeBlue } from "../theme/theme";

export type VerticalCardProps = {
	howHeading: string;
	howContent: string;
	howLinkLabel: string;
	howUrl: string;
  }

const VerticalCard: FC<VerticalCardProps> = ({
	howHeading,
	howContent,
	howLinkLabel,
	howUrl

}: VerticalCardProps) => {
	return (
		<Card flexDirection="column" mb={3}>
			<CardBody mb={0}>
				<Flex flexDirection="column" rowGap={2}>
					<Text fontStyle="bold" fontWeight="bold" fontSize={{ base: 'xl', md: '2xl' }}><ArrowForwardIcon mt="-6px" style={{ stroke: themeBlue, strokeWidth: "2px" }}/> {howHeading}</Text>
					<Text fontSize={{ base: 'lg', md: 'xl'}}>{howContent}</Text>
				</Flex>
			</CardBody>
			<CardFooter fontSize={{ base: '1rem', md: 'xl' }} mt={0} pt={0}>
				<Link mt={0} href={howUrl} textDecoration="none" color={themeBlue} fontWeight="bold">
					{howLinkLabel}
				</Link>
			</CardFooter>
		</Card>
	);
};

export default VerticalCard;
