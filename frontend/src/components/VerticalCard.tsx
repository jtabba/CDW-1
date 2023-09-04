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
	HOW_IT_WORKS_HEADING: string;
	HOW_IT_WORKS_CONTENT: string;
	HOW_IT_WORKS_LINK_LABEL: string;
	HOW_IT_WORKS_URL: string;
  }

// interface VerticalCardProps {
// 	cardInstance: string;
// 	url: string;
// }

const VerticalCard: FC<VerticalCardProps> = ({
	HOW_IT_WORKS_HEADING,
	HOW_IT_WORKS_CONTENT,
	HOW_IT_WORKS_LINK_LABEL,
	HOW_IT_WORKS_URL

}: VerticalCardProps) => {
	return (
		<Card flexDirection="column">
			<CardBody mb={0}>
				<Flex flexDirection="column" rowGap={2}>
					<Text fontStyle="italic" fontWeight="medium" fontSize={{ base: 'xl', md: '2xl' }}><ArrowForwardIcon mt="-6px" style={{ stroke: themeBlue, strokeWidth: "2px" }}/> {HOW_IT_WORKS_HEADING}</Text>
					<Text fontSize={{ base: 'lg', md: 'xl'}}>{HOW_IT_WORKS_CONTENT}</Text>
				</Flex>
			</CardBody>
			<CardFooter fontSize={{ base: '1rem', md: 'xl' }} mt={0} pt={0}>
				<Link mt={0} href={HOW_IT_WORKS_URL} textDecoration="underline">
					{HOW_IT_WORKS_LINK_LABEL}
				</Link>
			</CardFooter>
		</Card>
	);
};

export default VerticalCard;
