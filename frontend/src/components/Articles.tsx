// import {FC} from 'react';
import { articleData } from "../requests/types";
import {useState, useEffect} from "react";
import { ViewIcon, StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Heading,
	SimpleGrid, 
	Card, 
	CardHeader, 
	CardBody, 
	CardFooter, 
	HStack, 
	Button, 
	Box,
	Link, 
	Text,
	Spacer,
	Container,
	Alert,
	AlertIcon,
	AlertTitle} from "@chakra-ui/react";
import { getAllArticles} from "../requests/getAllArticles";

const Article = () => {
    const [articles, setArticles] = useState<articleData[]>([]);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		// open browser console to see result
		const getArticles = async () => {
			const response = await getAllArticles();

			if (response.success) {
                setArticles(response.data as articleData[])
				console.log(response.data);
			} else {
				console.log(response);
				setError(true);
				// create error notification wth Chakra
			}
		};
		getArticles()
	}, []);
    
    return (
		<Container maxWidth={800} centerContent>
			{error && <Alert
			status="error" 
			padding={50}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			colorScheme="blue"
			bg="white"
			borderRadius={10}
			height={450}>
				<Spacer/>
				<AlertIcon boxSize={75} mr={0}/>
				<AlertTitle fontSize='xl'>Page cannot be found</AlertTitle>
				<Spacer />
				</Alert>}

			<SimpleGrid columns={3} spacing={15} minChildWidth={250}>
			{articles && articles.map(article => (
        <Card key={article._id} borderTop="8px" borderColor="blue.500" bg="white">
          <CardHeader>
              <Box>
                <Heading as="h3" size="sm">{article.articleName}</Heading>
                <Text>Author</Text>
                </Box> 
          </CardHeader>
          <CardBody color="gray.500">
			<Text fontSize="lg" color="blackAlpha.900">
				<Link href={article.url} isExternal>
					View article's content <ExternalLinkIcon mx="3px" />
				</Link>
			</Text>
          </CardBody>
			
			<CardFooter>
            <HStack>
              <Button size="xs" variant="outline" leftIcon={<ViewIcon />}>1000</Button>
			  <Button size="xs" variant="outline" leftIcon={<StarIcon />}>1000</Button>
            </HStack>
          </CardFooter>
        </Card>
		
		))}
		</SimpleGrid>
		</Container>
    )
}

export default Article;